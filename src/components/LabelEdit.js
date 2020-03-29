// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { putLabelPost, putLabelComment } from '../actions/contentAction'

// Components
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


export class LabelEdit extends Component {

    constructor(props){
        super(props);
        this.state = {show: false};
        this.name = React.createRef();
    }

    handleClose = () =>{
        this.setState({show: false});
    }
    handleShow = () =>{
        this.setState({show: true})
    }

    handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.handleClose();
        this.props.posts ? (
            this.props.putLabelPost(this.props.labels,this.props.name,this.name.current.value,this.props.token)
        ):(
            this.props.putLabelComment(this.props.labels,this.props.name,this.name.current.value,this.props.token)
        );
        
    }

    render() {
        return (
            <div className="EditLabel">
            <Button variant="secondary" onClick={this.handleShow}>
                Modifier
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Vous modifiez: {this.props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={this.handleClick}>

                    <Form.Group controlId={this.props.id}>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control as="input" placeholder="Écrivez le nouveau nom" ref={this.name} required />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Valider les changements
                    </Button>
                </Form>

            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Annuler
              </Button>
            </Modal.Footer>
          </Modal>
          </div>
        )
    }
}

function mapStateToProps(state,ownProps){
    if (ownProps.posts){
        return{
            token: state.user.token,
            labels: state.content.labelsPost
        };
    } else {
        return{
            token: state.user.token,
            labels: state.content.labelsComment
        };
    }
    
}
const mapDispatchToProps = {
    putLabelPost,
    putLabelComment
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelEdit)
