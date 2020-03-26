// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

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


export class Post extends Component {

    displayOptions = () => {
        if (!this.props.token || (this.props.pseudo !== this.props.post.author && !this.props.isAdmin)) {
            return (
                <Button eventkey="report" variant="outline-danger" size="sm">Signaler</Button>
            )
        }
        else if (this.props.pseudo === this.props.post.author) {
            return (
                <DropdownButton className="" key="options" title="Options" variant="outline-secondary" size="sm" >
                    <Dropdown.Item eventKey="update">Modifier</Dropdown.Item>
                    <Dropdown.Item eventKey="delete">Supprimer</Dropdown.Item>
                </DropdownButton>
            )
        }
        else if (this.props.isAdmin && this.props.post.report === 0) {
            return (
                <DropdownButton className="" key="options" title="Options" variant="outline-secondary" size="sm" >
                    <Dropdown.Item eventKey="report">Signaler</Dropdown.Item>
                    <Dropdown.Item eventKey="delete">Supprimer</Dropdown.Item>
                </DropdownButton>
            )
        }
        else { // Connecté en tant qu'admin && non auteur du post && au moins 1 signalement
            return (
                <DropdownButton className="" key="options" title={`${this.props.post.report} ${this.props.post.report === 1 ?"signalement":"signalements"}`} variant="outline-danger" size="sm" >
                    <Dropdown.Item eventKey="cancel">Retirer le signalement</Dropdown.Item>
                    <Dropdown.Item eventKey="delete">Supprimer</Dropdown.Item>
                </DropdownButton>
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
                                <ButtonGroup className="">
                                    <Button variant="outline-success" size="sm" disabled={!this.props.token} ><Badge variant="success">{this.props.post.reaction}</Badge> Déjà entendu</Button>
                                    <Button variant="outline-light" size="sm" disabled={!this.props.token} >Commenter</Button>
                                </ButtonGroup>
                                <ButtonGroup className="">
                                {this.props.post.comments.length !== 0 ?
                                        <Accordion.Toggle as={Button} variant="outline-warning" eventKey="0" size="sm">
                                            <Badge variant="warning">{this.props.post.comments.length}</Badge>  {this.props.post.comments.length === 1 ?"Commentaire":"Commentaires"} 
                                        </Accordion.Toggle>
                                    : null }
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

}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
