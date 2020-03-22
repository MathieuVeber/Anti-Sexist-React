import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Comment extends Component {
    render() {
        return (
            <li>
                {this.props.comment.message}<br/>
                {this.props.comment.author}<br/>
                {this.props.comment.type}
            </li>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
