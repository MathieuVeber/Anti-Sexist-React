// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { login } from '../actions/userAction'

// Components
import {Redirect} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.user = React.createRef();
        this.password = React.createRef();
        //this.isValid = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.login(this.user.current.value,this.password.current.value);
    }

    render() {

        // When logged in
        if(this.props.loggedIn) {
            return <Redirect to="/"/>
        }

        return (
            <div className="login">
                <Container fluid>
                    <Row>
                        <Col ></Col>
                        <Col >
                            <Form onSubmit={this.handleSubmit}> {/*validated={this.isValid} noValidate >*/}
                                <Form.Group controlId="user">
                                    <Form.Label>Identifiant</Form.Label>
                                    <Form.Control type="text" placeholder="Email ou pseudo" ref={this.user} required />
                                    <Form.Control.Feedback type="invalid">Pas facile de vous identifier comme ça...</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control type="password" placeholder="Au moins 6 caractères" ref={this.password} required />
                                    <Form.Control.Feedback type="invalid">Pas facile de vous identifier comme ça...</Form.Control.Feedback>
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
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)
