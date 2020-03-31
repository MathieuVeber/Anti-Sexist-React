// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Form validation
import { Formik } from 'formik'
import * as yup from 'yup'

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
    handleSubmit = (pseudo,email,password) => {
        this.props.register(pseudo,email,password);
    }

    render() {

        // When logged in
        if(this.props.loggedIn) {
            return <Redirect to="/"/>
        }

        const pseudo = this.props.pseudo ? this.props.pseudo : "" ;
        const email = this.props.email ? this.props.email : "" ;
        const password = this.props.password ? this.props.password : "" ;

        const formSchema = yup.object({
            pseudo: yup.string()
                .min(1,"Votre pseudo est requis")
                .max(32, "Le champ ne doit pas dépasser pas 32 caractères")
                .required("Votre pseudo est requis"),
            email: yup.string()
                .min(6,"Votre email est requis")
                .max(64, "Le champ ne doit pas dépasser 64 caractères")
                .required("Votre email est requis"),
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
                                Inscription
                            </Card.Header>
                            <Card.Body className="p-4">
                            <Formik
                                validationSchema={formSchema}
                                onSubmit={(values) => this.handleSubmit(values.pseudo,values.email,values.password)}
                                initialValues={{
                                    pseudo: pseudo,
                                    email:email,
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
                                        <Form.Label>Pseudo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="antiDu34"
                                            name="pseudo"
                                            value={values.pseudo}
                                            onChange={handleChange}
                                            isValid={touched.pseudo && !errors.pseudo}
                                            isInvalid={!!errors.pseudo}
                                        />
                                        <Form.Control.Feedback type="valid" >Parfait !</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid" >{errors.pseudo}</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="validationFormik02">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="anti@sexiste.fr"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            isValid={touched.email && !errors.email}
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type="valid" >Parfait !</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid" >{errors.email}</Form.Control.Feedback>
                                    </Form.Group>
                                    
                                    <Form.Group controlId="validationFormik03">
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
                                        S'inscrire
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
    register
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister)
