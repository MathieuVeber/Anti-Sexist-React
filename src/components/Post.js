import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import CommentList from './CommentList'

export class Post extends Component {

    render() {
        return (
            <Accordion defaultActiveKey="">
                <Card border="primary" style={{ width: '18rem' }}>
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

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
