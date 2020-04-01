// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { putAdmin } from '../actions/contentAction'

// Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export class AdminNew extends Component {

    constructor(props) {
        super(props);
        this.name = React.createRef();
    }


    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.putAdmin(this.name.current.value,this.props.token)
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
                                        <Card.Title><Form.Label>Ajouter un nouveau administrateur</Form.Label></Card.Title>
                                        <Form.Control type="text" placeholder="entrez le pseudo de l'adminastrateur" ref={this.name} required />
                                    </Form.Group>

                                    <Button variant="info" type="submit">
                                        valider
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

function mapStateToProps(state){
    return{
        token: state.user.token,
    }
}

const mapDispatchToProps = {
    putAdmin,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminNew)
