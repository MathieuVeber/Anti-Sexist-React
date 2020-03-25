// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CommentList from './CommentList'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'


export class Post extends Component {

    render() {
        return (
            <Row className="d-flex justify-content-center">
                <Col xs="12" md="10" lg="8" xl="6">
                    <Accordion defaultActiveKey="">
                    <Card className="m-4" border={this.props.variant}>
                        <Card.Header>
                                {this.props.post.author || 'Anonyme' }
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{this.props.post.title}</Card.Title>
                            <Card.Text>
                                {this.props.post.message}
                            </Card.Text>
                        </Card.Body>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <CommentList comments={this.props.post.comments }/>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Card.Footer className="text-muted">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Voir les commentaires
                            </Accordion.Toggle>
                        </Card.Footer>
                    </Card>
                    </Accordion>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
