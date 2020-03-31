// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Form validation
import { Formik } from 'formik'
import * as yup from 'yup'

// Actions
import { postPost, patchPost } from '../actions/contentAction'

// Components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Card from 'react-bootstrap/Card'


export class PostNew extends Component {

    handleSubmit = (title,message,location) => {
         // new post
        if (!this.props.callBack) {
            this.props.postPost(title,message,location,this.props.token);
        }
        // update post
        else {
            this.props.patchPost(this.props.post._id,title,message,location,this.props.token);
            this.props.callBack();
        }
    }

    render() {
        
        const title = this.props.post ? this.props.post.title : "" ;
        const message = this.props.post ? this.props.post.message : "" ;
        const location = this.props.post ? this.props.post.location : "" ;

        const formSchema = yup.object({
            title: yup.string()
                .min(1,"Le titre est requis")
                .max(64, "Le titre doit être concis (- de 64 caractères)")
                .required("Le titre est requis"),
            message: yup.string()
                .min(10,"Un message, c'est au moins 10 caractères !")
                .max(512,"Pour que l'on vous lise il faut écrire moins de 512 caractères")
                .required("Le message est requis"),
            location: yup.string()
                .min(1, "Le contexte est requis")
                .max(32,"Le contexte doit être concis (- de 32 caractères)")
                .required("Le contexte est requis"),
        });

        return (
            <div className="postPost">
                <Card className="" bg="dark" text="light" >
                    <Card.Header>
                        Dites-nous ce que vous avez entendu !
                    </Card.Header>
                    <Card.Body className="p-4">
                        <Formik
                            validationSchema={formSchema}
                            onSubmit={(values) => this.handleSubmit(values.title,values.message,values.location)}
                            initialValues={{
                                title: title,
                                message: message,
                                location: location,
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
                                    <Form.Label>Titre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Femme au volant, mort au tournant !"
                                        name="title"
                                        value={values.title}
                                        onChange={handleChange}
                                        isValid={touched.title && !errors.title}
                                        isInvalid={!!errors.title}
                                    />
                                    <Form.Control.Feedback type="valid" >Parfait !</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid" >{errors.title}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationFormik02">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        type="textarea"
                                        placeholder="Préciser le contexte, on souhaite connaitre toute l'histoire..."
                                        name="message"
                                        value={values.message}
                                        onChange={handleChange}
                                        isValid={touched.message && !errors.message}
                                        isInvalid={!!errors.message}
                                    />
                                    <Form.Control.Feedback type="valid" >Parfait !</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid" >{errors.message}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationFormik03">
                                    <Form.Label>Contexte</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="location"
                                        value={values.location}
                                        onChange={handleChange}
                                        isValid={touched.location && !errors.location}
                                    >
                                        <option disabled>Sélectionnez le contexte le plus approprié</option>
                                        {this.props.labels.map(label => <option key={label._id}> {label.name} </option>)}
                                    </Form.Control>
                                    <Form.Control.Feedback type="valid" >Parfait !</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid" >{errors.location}</Form.Control.Feedback>

                                </Form.Group>
                                
                                {this.props.callBack?
                                    <ButtonToolbar className="mt-2 d-flex justify-content-between">
                                        <Button variant="outline-secondary" onClick={this.props.callBack}> Annuler </Button>
                                        <Button variant="outline-light" type="submit">Sauvegarder</Button>
                                    </ButtonToolbar>
                                :
                                    <Button variant="outline-light" type="submit">Publier</Button>
                                }
                            </Form>
                        )}
                        </Formik>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.user.token,
    labels: state.content.labels.posts
})

const mapDispatchToProps = {
    postPost,
    patchPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNew)
