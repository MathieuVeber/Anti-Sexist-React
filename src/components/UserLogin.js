// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Form validation
import { Formik } from 'formik'
import * as yup from 'yup'

// Actions
import { login } from '../actions/userAction'

// Components
import {Redirect} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export class UserLogin extends Component {

    handleSubmit = (user,password) => {
        this.props.login(user,password);
    }

    render() {

        // When logged in
        if(this.props.loggedIn) {
            return <Redirect to="/"/>
        }

        const user = this.props.user ? this.props.user : "" ;
        const password = this.props.password ? this.props.password : "" ;

        const formSchema = yup.object({
            user: yup.string()
                .min(1,"Un email ou un pseudo est requis")
                .max(64, "Le champ ne dépasse pas 64 caractères")
                .required("Un email ou un pseudo est requis"),
            password: yup.string()
                .min(6,"Votre mot de passe n'est pas assez long")
                .max(64,"Votre mot de passe est trop long")
                .required("Difficile de se connecter sans mot de passe"),
        });

        return (
            <div className="login">
                <Container fluid>
                    <Row className="d-flex justify-content-center">
                        <Card bg="dark" text="light" >
                            <Card.Header>
                                Connexion
                            </Card.Header>
                            <Card.Body className="p-4">
                            <Formik
                                validationSchema={formSchema}
                                onSubmit={(values) => this.handleSubmit(values.user,values.password)}
                                initialValues={{
                                    user: user,
                                    password: password,
                            }}>
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isValid,
                                errors,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Group controlId="validationFormik01">
                                        <Form.Label>Identifiant</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Email ou pseudo"
                                            name="user"
                                            value={values.user}
                                            onChange={handleChange}
                                            isValid={touched.user && !errors.user}
                                            isInvalid={!!errors.user}
                                        />
                                        <Form.Control.Feedback type="valid" >Parfait !</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid" >{errors.user}</Form.Control.Feedback>
                                    </Form.Group>
                                    
                                    <Form.Group controlId="validationFormik02">
                                        <Form.Label>Mot de passe</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="******"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            isValid={touched.password && !errors.password}
                                            isInvalid={!!errors.password}
                                        />
                                        <Form.Control.Feedback type="valid" >Parfait !</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid" >{errors.password}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Button variant="outline-light" type="submit">
                                        Se connecter
                                    </Button>
                                </Form>
                                )}
                                </Formik>
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
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)
