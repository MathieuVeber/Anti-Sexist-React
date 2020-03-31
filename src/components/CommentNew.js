// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Form validation
import { Formik } from 'formik'
import * as yup from 'yup'

// Actions
import { postComment, patchComment } from '../actions/contentAction'

// Components
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export class CommentNew extends Component {

    handleSubmit = (message,type) => {        
        // new comment
       if (!this.props.callBack) {
           this.props.postComment(this.props.post_id,message,type,this.props.token);
       }
       // update comment
       else {
           this.props.patchComment(this.props.post._id,this.props.comment._id,message,type,this.props.token);
           this.props.callBack();
       }
   }

    render() {

        const message = this.props.comment ? this.props.comment.message : "" ;
        const type = this.props.comment ? this.props.comment.type : "" ;

        const formSchema = yup.object({
            message: yup.string()
                .min(10,"Un message, c'est au moins 10 caractères !")
                .max(512,"Pour que l'on vous lise il faut écrire moins de 512 caractères")
                .required("Le message est requis"),
            type: yup.string()
                .min(1, "Le type est requis")
                .max(32,"Le type doit être concis (- de 32 caractères)")
                .required("Le type est requis"),
        });

        return (
            <div className="postComment">
                <Container fluid className="" >
                <Formik
                    validationSchema={formSchema}
                    onSubmit={(values) => this.handleSubmit(values.message,values.type)}
                    initialValues={{
                        message: message,
                        type: type,
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
                        <Form.Row className="">
                            <Col className="w-auto h-auto mt-0 mb-0" xs="3">
                            <Form.Control
                                        as="select"
                                        name="type"
                                        value={values.type}
                                        onChange={handleChange}
                                        isValid={touched.type && !errors.type}
                                    >
                                        <option disabled>Catégorie</option>
                                        {this.props.labels.map(label => <option key={label._id}> {label.name} </option>)}
                                    </Form.Control>
                                    <Form.Control.Feedback type="valid" >Parfait !</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid" >{errors.type}</Form.Control.Feedback>
                            </Col>
                            <Col className="w-auto mt-0 mb-0" xs="7" >
                                <Form.Control
                                            type="textarea"
                                            placeholder="Réponse ou remarque"
                                            name="message"
                                            value={values.message}
                                            onChange={handleChange}
                                            isValid={touched.message && !errors.message}
                                            isInvalid={!!errors.message}
                                />
                                <Form.Control.Feedback type="valid" >Parfait !</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid" >{errors.message}</Form.Control.Feedback>
                            </Col>
                            <Col className="w-auto mt-0 mb-0" xs="2" >
                                <Button variant="outline-light" type="submit">Publier</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                    )}
                    </Formik>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.user.token,
    labels: state.content.labels.comments
})

const mapDispatchToProps = {
    postComment,
    patchComment,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentNew)
