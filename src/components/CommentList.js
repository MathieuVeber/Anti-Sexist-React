// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Comment from './Comment'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export class CommentList extends Component {
    render() {
        return (
            <ListGroup className="">
                {this.props.comments.map(comment => <ListGroupItem key={comment._id} variant="dark" style={{"backgroundColor": "#FF8166"}}> <Comment key={comment._id} comment={comment} post={this.props.post} /> </ListGroupItem> )}
            </ListGroup>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
