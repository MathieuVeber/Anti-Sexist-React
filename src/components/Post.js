import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

export class Post extends Component {
    render() {
        return (
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>{this.props.post.author}</Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.post.title}</Card.Title>
                    <Card.Text>
                        {this.props.post.message}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
