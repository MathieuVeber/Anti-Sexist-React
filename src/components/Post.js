// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { showConfirmation } from '../actions/contentAction'

// Components
import CommentList from './CommentList'
import Date from './Date'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'


export class Post extends Component {

    // According to who is looking at the post, different options are available
    displayOptions = () => {
        // Non connecté
        if (!this.props.token) {
            return (
                <div></div>
            )
        }
        // Connecté && non admin && non auteur
        else if (this.props.pseudo !== this.props.post.author && !this.props.isAdmin) {
            return (
                <Button onClick={() => this.props.showConfirmation("report",this.props.post)} variant="outline-danger" size="sm">Signaler</Button>
            )
        }
        // Connecté && auteur
        else if (this.props.pseudo === this.props.post.author) {
            return (
                <DropdownButton className="" key="options" title="Options" variant="outline-secondary" size="sm" >
                    <Dropdown.Item eventKey="update">Modifier</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.props.showConfirmation("delete",this.props.post) }>Supprimer</Dropdown.Item>
                </DropdownButton>
            )
        }
        // Connecté en tant qu'admin && non auteur && pas encore de signalement
        else if (this.props.isAdmin && this.props.post.report === 0) {
            return (
                <DropdownButton className="" key="options" title="Options" variant="outline-secondary" size="sm" >
                    <Dropdown.Item onClick={() => this.props.showConfirmation("report",this.props.post)} >Signaler</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.props.showConfirmation("delete",this.props.post)} >Supprimer</Dropdown.Item>
                </DropdownButton>
            )
        }
        // Connecté en tant qu'admin && non auteur du post && au moins 1 signalement
        else {
            return (
                <Dropdown className="" key="options" >
                    <Dropdown.Toggle variant="outline-danger" size="sm">
                        <Badge variant="danger"> {this.props.post.report} </Badge> {this.props.post.report === 1 ?"signalement":"signalements"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="cancel">Retirer le signalement</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.showConfirmation("report",this.props.post)}>Supprimer</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
    }


    // Reaction + Comments disabled if not logged in
    displayInteractions = () => {
        // LoggedIn
        if(this.props.token) {
            return (
                <ButtonGroup className="">
                    <Button variant="outline-success" size="sm"><Badge variant="success">{this.props.post.reaction}</Badge> Déjà entendu</Button>
                    <Button variant="outline-light" size="sm">Commenter</Button>
                </ButtonGroup>
            )
        }
        // !LoggedIn
        else {
            return (
                <div>
                    <OverlayTrigger
                    placement="top"
                    delay={{ show: 100, hide: 500 }}
                    overlay={
                        <Popover id="popover-contained">
                            <Popover.Title className="text-center" as="h3">Rejoignez-nous !</Popover.Title>
                            <Popover.Content className="text-center">
                                Intéragissez avec la communauté ! Inscription en moins de 2 minutes
                            </Popover.Content>
                        </Popover>
                    }
                    >
                        <span className="d-inline-block">
                        <ButtonGroup className="">
                            <Button variant="outline-success" size="sm" disabled style={{ pointerEvents: 'none' }}><Badge variant="success">{this.props.post.reaction}</Badge> Déjà entendu</Button>
                            <Button variant="outline-light" size="sm" disabled style={{ pointerEvents: 'none' }}>Commenter</Button>
                        </ButtonGroup>
                        </span>
                    </OverlayTrigger>
                </div>
            )
        }
    }


    render() {
        return (
            <Row className="justify-content-center">
                <Col xs="12" md="10" lg="8" xl="6">
                    <Card className="m-4" bg={this.props.variant} text={this.props.variant === 'light' ? 'dark' : 'white'} >
                    <Accordion defaultActiveKey="">
                        <Card.Header>
                            <Card.Subtitle className="d-flex mt-2 mb-2 justify-content-between">
                                <div className="d-flex align-items-center text-secondary">
                                {this.props.post.location}
                                </div>
                                <div className="d-flex align-items-center">
                                    {this.displayOptions()}
                                </div>
                            </Card.Subtitle>
                            <Card.Title>
                                {this.props.post.title}
                            </Card.Title>
                            <hr style={{backgroundColor:"white"}} />
                            <Card.Text className="text-left" >
                                {this.props.post.message}
                            </Card.Text>
                            <blockquote className="blockquote mb-0 text-right">
                                <footer className="blockquote-footer">
                                    {this.props.post.author || "Anonyme" },  <cite title={this.props.post.createdAt}> <Date date={this.props.post.createdAt}/> </cite>
                                </footer>
                            </blockquote>
                            <ButtonToolbar className="mt-2 d-flex justify-content-between">
                                {this.displayInteractions()}
                                <ButtonGroup className="">
                                    <Accordion.Toggle as={Button} variant="outline-warning" eventKey="0" size="sm" disabled={this.props.post.comments.length === 0}>
                                        <Badge variant="warning">{this.props.post.comments.length}</Badge>  {this.props.post.comments.length < 2 ?"Commentaire":"Commentaires"} 
                                    </Accordion.Toggle>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <CommentList comments={this.props.post.comments }/>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Card.Footer className="text-muted">

                        </Card.Footer>
                    </Accordion>
                    </Card>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.user.token,
    isAdmin: state.user.isAdmin,
    pseudo: state.user.pseudo,
})

const mapDispatchToProps = {
    showConfirmation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
