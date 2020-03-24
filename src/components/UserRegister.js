// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { register } from '../actions/userAction'

// Components
import {Redirect} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


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
                    <Row>
                        <Col ></Col>
                        <Col >
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="pseudo">
                                    <Form.Label>Pseudo</Form.Label>
                                    <Form.Control type="text" placeholder="antiDu34" ref={this.pseudo} required />
                                </Form.Group>

                                <Form.Group controlId="email">
                                    <Form.Label>Identifiant</Form.Label>
                                    <Form.Control type="email" placeholder="anti@sexiste.fr" ref={this.email} required />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control type="password" placeholder="Au moins 6 caractères" ref={this.password} required />
                                </Form.Group>
                                <Button variant="info" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col ></Col>
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
