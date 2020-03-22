import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'

export class CommentList extends Component {
    render() {
        return (
            <ul>
                {this.props.comments.map(comment => <Comment key={comment._id} comment={comment}/>)}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
