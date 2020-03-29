// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { register } from '../actions/userAction'

// Components
import {Redirect} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export class UserRegister extends Component {
    constructor(props) {
        super(props);
        this.pseudo = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.register(this.pseudo.current.value,this.email.current.value,this.password.current.value);
    }

    render() {

        // When registered
        if(this.props.loggedIn) {
            return <Redirect to="/"/>
        }

        return (
            <div className="register">
                <Container fluid>
                <Row className="d-flex justify-content-center">
                        <Card bg="dark" text="light" >
                            <Card.Header>
                                Inscription
                            </Card.Header>
                            <Card.Body className="p-4">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="pseudo">
                                        <Card.Title><Form.Label>Pseudo</Form.Label></Card.Title>
                                        <Form.Control type="text" placeholder="antiDu34" ref={this.pseudo} required />
                                    </Form.Group>

                                    <Form.Group controlId="email">
                                        <Card.Title><Form.Label>Email</Form.Label></Card.Title>
                                        <Form.Control type="email" placeholder="anti@sexiste.fr" ref={this.email} required />
                                    </Form.Group>

                                    <Form.Group controlId="password">
                                        <Card.Title><Form.Label>Mot de passe</Form.Label></Card.Title>
                                        <Form.Control type="password" placeholder="Au moins 6 caractères" ref={this.password} required />
                                    </Form.Group>
                                    <Button variant="info" type="submit">
                                        S'incrire
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
    loggedIn: state.user.token,
})

const mapDispatchToProps = {
    register
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister)
