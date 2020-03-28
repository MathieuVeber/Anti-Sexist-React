// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { postComment, getLabels } from '../actions/contentAction'

// Components
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export class CommentNew extends Component {

    constructor(props) {
        super(props);
        this.message = React.createRef();
        this.type = React.createRef();
    }

    componentDidMount = () => {
        this.props.getLabels("comments");
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.postComment(this.props.post._id,this.message.current.value,this.type.current.value,this.props.token);
        this.message.current=null;
    }

    render() {

        return (
            <div className="postComment">
                <Container fluid className="" >
                    <Form className="" onSubmit={this.handleSubmit}>
                        <Form.Row className="">
                            <Col className="w-auto h-auto mt-0 mb-0" xs="3">
                                <Form.Group className="" controlId="type">
                                    <Form.Control as="select" ref={this.type} required >
                                        {this.props.labels.map(label => <option key={label._id}> {label.name} </option>)}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col className="w-auto mt-0 mb-0" xs="7" >
                                <Form.Group className="m-0" controlId="message">
                                    <Form.Control as="textarea" rows="1" placeholder="Réponse ou commentaire" ref={this.message} required />
                                </Form.Group>
                            </Col>
                            <Col className="w-auto mt-0 mb-0" xs="2" >
                                <Button className="" variant="outline-light" type="submit">
                                    Publier
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
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
    getLabels,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentNew)
