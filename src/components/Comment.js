// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { postLikeComment, deleteLikeComment, showConfirmation, deleteReport } from '../actions/contentAction'

// Components
import Date from './Date'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'


export class Comment extends Component {
    // Init
    constructor(props) {
        super(props);
        const likeList = this.props.commentReaction.filter( idComment => idComment === this.props.comment._id ? true : false);
        const isLiked = likeList.length === 0 ? false : true;
        this.state = {
            isLiked:isLiked,
        }
    }

    // Handling buttons
    handleLike = () => {
        if (this.state.isLiked) {
            this.props.deleteLikeComment(this.props.post._id,this.props.comment._id,this.props.token);
            this.setState({isLiked:false});
        }
        else {
            this.props.postLikeComment(this.props.post._id,this.props.comment._id,this.props.token);
            this.setState({isLiked:true});
        }
    }

    handleDeleteReport = () => {
        this.props.deleteReport("comments",this.props.comment._id,this.props.token);
    }


    // According to who is looking at the comment, different options are available
    displayOptions = () => {
        // Non connecté
        if (!this.props.token) {
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
                        <span>
                            <Button variant="dark" size="sm" disabled style={{ pointerEvents: 'none' }}> <Badge variant="outline-dark">{this.props.comment.reaction}</Badge> J'aime</Button>
                        </span>
                    </OverlayTrigger>
                </div>
            )
        }
        // Connecté && non admin && non auteur
        else if (this.props.pseudo !== this.props.comment.author && !this.props.isAdmin) {
            return (
                <Dropdown as={ButtonGroup} drop="right">
                    <Button variant="dark" size="sm" onClick={this.handleLike} active={this.state.isLiked}> <Badge variant="outline-dark">{this.props.comment.reaction}</Badge> J'aime</Button>
                    <Dropdown.Toggle split variant="dark"/>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => this.props.showConfirmation("report",this.props.post,this.props.comment)}>Signaler</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
        // Connecté && auteur
        else if (this.props.pseudo === this.props.comment.author) {
            return (
                <ButtonGroup>
                    <Button variant="dark" size="sm" onClick={this.handleLike} active={this.state.isLiked}> <Badge variant="outline-dark">{this.props.comment.reaction}</Badge> J'aime</Button>
                    <DropdownButton className="" key="options" title="Options" variant="outline-dark" size="sm" >
                        <Dropdown.Item eventKey="update">Modifier</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.showConfirmation("delete",this.props.post,this.props.comment) }>Supprimer</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            )
        }
        // Connecté en tant qu'admin && non auteur && pas encore de signalement
        else if (this.props.isAdmin && this.props.comment.report === 0) {
            return (
                <ButtonGroup>
                    <Button variant="dark" size="sm" onClick={this.handleLike} active={this.state.isLiked}> <Badge variant="outline-dark">{this.props.comment.reaction}</Badge> J'aime</Button>
                    <DropdownButton className="" key="options" title="Options" variant="outline-dark" size="sm" >
                        <Dropdown.Item onClick={() => this.props.showConfirmation("report",this.props.post,this.props.comment)} >Signaler</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.showConfirmation("delete",this.props.post,this.props.comment)} >Supprimer</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            )
        }
        // Connecté en tant qu'admin && non auteur && au moins 1 signalement
        else {
            return (
                <ButtonGroup>
                    <Button variant="dark" size="sm" onClick={this.handleLike} active={this.state.isLiked}> <Badge variant="outline-dark">{this.props.comment.reaction}</Badge> J'aime</Button>
                    <Dropdown className="" key="options" >
                        <Dropdown.Toggle variant="danger" size="sm">
                            <Badge variant="danger"> {this.props.comment.report} </Badge> {this.props.comment.report === 1 ?"Signalement":"Signalements"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.handleDeleteReport}>Retirer le signalement</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.props.showConfirmation("delete",this.props.post,this.props.comment)}>Supprimer</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="text-left mt-2 mb-3">
                    {this.props.comment.message}
                </div>
                <div className="d-flex justify-content-between">
                    {this.displayOptions()}
                    <blockquote className="blockquote mb-0 text-dark">
                        <footer className="blockquote-footer text-dark">
                            {this.props.comment.author || "Anonyme" },  <cite title={this.props.comment.createdAt}> <Date date={this.props.comment.createdAt}/> { this.props.comment.createdAt !== this.props.comment.updatedAt ? "(Modifié)" : null } </cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.user.token,
    isAdmin: state.user.isAdmin,
    pseudo: state.user.pseudo,
    commentReaction: state.user.commentReaction,
})

const mapDispatchToProps = {
    postLikeComment,
    deleteLikeComment,
    showConfirmation,
    deleteReport,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
