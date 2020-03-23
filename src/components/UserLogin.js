import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/userAction'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


export class UserLogin extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('bla');
        this.props.login('M4thieu','azerty');
        
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} >
                <Form.Group controlId="user">
                    <Form.Label>Identifiant</Form.Label>
                    <Form.Control type="email" placeholder="Email ou pseudo" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user,
})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)
