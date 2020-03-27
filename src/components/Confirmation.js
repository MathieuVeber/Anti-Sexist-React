// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { postReportPost, deletePost, hideConfirmation } from '../actions/contentAction'

// Components
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export class Confirmation extends Component {

    handleConfirm = () => {
        if (this.props.type === "report") {
            this.props.postReportPost(this.props.post._id,this.props.token);
        }
        else {
            this.props.deletePost(this.props.post._id,this.props.token);
        }
        this.props.hideConfirmation();
    }

    handleClose = () => {
        this.props.hideConfirmation();
    }

    render() {
        let title = this.props.type === "report" ? "Signaler ce post" : "Supprimer ce post";
        let message = this.props.type === "report"
        ? "Vous devez le signaler si vous considérez que le contenu est innaproprié ou injurieux."
        : "Cette action est définitive, les commentaires seront aussi supprimés.";
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
    token:state.user.token
})

const mapDispatchToProps = {
    postReportPost,
    deletePost,
    hideConfirmation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
