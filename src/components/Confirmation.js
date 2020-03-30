// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { postReportPost, postReportComment, deletePost, deleteComment, hideConfirmation } from '../actions/contentAction'

// Components
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export class Confirmation extends Component {

    handleConfirm = () => {
        // Report confirmation of a post
        if (this.props.type === "report" && !this.props.comment) {
            this.props.postReportPost(this.props.post._id,this.props.token);
        }
        // Report confirmation of a comment
        else if (this.props.type === "report") {
            this.props.postReportComment(this.props.post._id,this.props.comment._id,this.props.token);
        }
        // Delete confirmation of a post
        else if (this.props.type === "delete" && !this.props.comment) {
            this.props.deletePost(this.props.post._id,this.props.token);
        }
        // Delete confirmation of a comment
        else {
            this.props.deleteComment(this.props.post._id,this.props.comment._id,this.props.token);
        }
        this.props.hideConfirmation();
    }

    handleClose = () => {
        this.props.hideConfirmation();
    }

    render() {
        let title = `${this.props.type === "report" ? "Signaler" : "Supprimer"} ce ${!this.props.comment ? "post" : "commentaire"}`;
        let message = this.props.type === "report"
        ? "Vous devez le signaler si vous considérez que le contenu est innaproprié ou injurieux."
        : `Cette action est définitive${ !this.props.comment ? ", les commentaires seront aussi supprimés" : ""}.`;
        let submit = this.props.type === "report" ? "Signaler" : "Supprimer";

        return (
            <Modal className="d-flex justify-content-center" size="sm" show={this.props.display} onHide={this.handleClose} centered>
                <Modal.Header className="d-flex justify-content-center" closeButton>
                    <Modal.Title className="d-flex justify-content-center">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-justify">{message}</Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                <Button variant="outline-secondary" onClick={this.props.hideConfirmation}>Annuler</Button>
                <Button variant="danger" onClick={this.handleConfirm}>{submit}</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    display:state.content.confirmation.display,
    type:state.content.confirmation.type,
    post:state.content.confirmation.post,
    comment:state.content.confirmation.comment,
    token:state.user.token
})

const mapDispatchToProps = {
    postReportPost,
    postReportComment,
    deletePost,
    deleteComment,
    hideConfirmation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
