// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { showConfirmation, postLikePost, deleteLikePost, deleteReport } from '../actions/contentAction'

// Components
import CommentList from './CommentList'
import CommentNew from './CommentNew'
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
import Collapse from 'react-bootstrap/Collapse'


export class Post extends Component {
    // Init
    constructor(props) {
        super(props);
        const likeList = this.props.postReaction.filter( idPost => idPost === this.props.post._id ? true : false);
        const isLiked = likeList.length === 0 ? false : true;
        this.state = {
            isLiked:isLiked,
            newComment: false,
        }
    }


    // Handle buttons
    handleLike = () => {
        if (this.state.isLiked) {
            this.props.deleteLikePost(this.props.post._id,this.props.token);
            this.setState({isLiked:false});
        }
        else {
            this.props.postLikePost(this.props.post._id,this.props.token);
            this.setState({isLiked:true});
        }
    }

    handleDeleteReport = () => {
        this.props.deleteReport("posts",this.props.post._id,this.props.token);
    }

    handleNewComment = () => {
        this.setState({newComment:!this.state.newComment});
    }


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
                        <Badge variant="danger"> {this.props.post.report} </Badge> {this.props.post.report === 1 ?"Signalement":"Signalements"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={this.handleDeleteReport} >Retirer le signalement</Dropdown.Item>
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
                    <Button variant="outline-success" size="sm" onClick={this.handleLike} active={this.state.isLiked} ><Badge variant="success">{this.props.post.reaction}</Badge> Déjà entendu</Button>
                    <Button variant="outline-light" size="sm" onClick={this.handleNewComment} > Commenter </Button>
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
                                        {this.props.post.author || "Anonyme" },  <cite title={this.props.post.createdAt}> <Date date={this.props.post.createdAt}/> { this.props.post.createdAt !== this.props.post.updatedAt ? "(Modifié)" : null } </cite>
                                    </footer>
                                </blockquote>
                                <ButtonToolbar className="mt-2 d-flex justify-content-between">
                                    {this.displayInteractions()}
                                    <ButtonGroup className="">
                                        <Accordion.Toggle as={Button} variant="outline-warning" eventKey="comments" size="sm" disabled={this.props.post.comments.length === 0}>
                                            <Badge variant="warning">{this.props.post.comments.length}</Badge>  {this.props.post.comments.length < 2 ?"Commentaire":"Commentaires"} 
                                        </Accordion.Toggle>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </Card.Header>
                            <Accordion.Collapse eventKey="comments">
                                <Card.Body className="h-auto">
                                    <CommentList comments={this.props.post.comments} post={this.props.post} />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Accordion>
                        <Collapse className="pt-3 pb-0 mb-0" in={this.state.newComment} >
                            <Card.Footer className="pl-0 pr-0" >
                                <div>
                                    <CommentNew post={this.props.post} />
                                </div>
                            </Card.Footer>
                        </Collapse>
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
    postReaction: state.user.postReaction,
})

const mapDispatchToProps = {
    showConfirmation,
    postLikePost,
    deleteLikePost,
    deleteReport,
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
