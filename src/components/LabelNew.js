// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { postLabel } from '../actions/contentAction'

// Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export class LabelNew extends Component {

    constructor(props) {
        super(props);
        this.name = React.createRef();
    }


    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.postLabel(this.props.labels,this.props.of,this.name.current.value,this.props.token)
        this.name.current.value = '';
    }

    render() {
        return (
            <div className="postLabel">
                <Container fluid className="m-4" >
                    <Row className="d-flex justify-content-center">
                        <Card className="" border="info" >
                            <Card.Body className="p-4">
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="name">
                                        <Card.Title><Form.Label>Nom</Form.Label></Card.Title>
                                        <Form.Control type="text" placeholder="Ajouter un nouveau libellé" ref={this.name} required />
                                    </Form.Group>

                                    <Button variant="info" type="submit">
                                        Ajouter
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

function mapStateToProps(state,ownProps){
    if (ownProps.posts){
        return{
            token: state.user.token,
            labels: state.content.labels.posts
        };
    } else {
        return{
            token: state.user.token,
            labels: state.content.labels.comments
        };
    }
    
}

const mapDispatchToProps = {
    postLabel,
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelNew)
