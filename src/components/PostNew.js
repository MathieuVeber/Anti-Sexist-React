// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { postPost } from '../actions/contentAction'

// Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export class PostNew extends Component {

    constructor(props) {
        super(props);
        this.title = React.createRef();
        this.message = React.createRef();
        this.location = React.createRef();
    }


    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.postPost(this.title.current.value,this.message.current.value,this.location.current.value,this.props.token);
    }

    render() {
        return (
            <div className="postPost">
                <Container fluid className="m-4" >
                    <Row className="d-flex justify-content-center">
                        <Card className="" border="info" >
                            <Card.Header>
                                Dites-nous ce que vous avez entendu !
                            </Card.Header>
                            <Card.Body className="p-4">
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="title">
                                        <Card.Title><Form.Label>Titre</Form.Label></Card.Title>
                                        <Form.Control type="text" placeholder="Femme au volant, mort au tournant !" ref={this.title} required />
                                    </Form.Group>

                                    <Form.Group controlId="message">
                                        <Card.Title><Form.Label>Message</Form.Label></Card.Title>
                                        <Form.Control as="textarea" placeholder="Préciser le contexte, on souhaite connaitre toute l'histoire..." ref={this.message} required />
                                    </Form.Group>

                                    <Form.Group controlId="location">
                                        <Card.Title><Form.Label>Contexte</Form.Label></Card.Title>
                                        <Form.Control as="select" ref={this.location} required >
                                            <option defaultValue disabled>Sélectionnez le contexte le plus approprié</option>
                                            {this.props.labels.map(label => <option key={label._id}> {label.name} </option>)}
                                        </Form.Control>
                                    </Form.Group>

                                    <Button variant="info" type="submit">
                                        Publier
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.user.token,
    labels: state.content.labels
})

const mapDispatchToProps = {
    postPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNew)
