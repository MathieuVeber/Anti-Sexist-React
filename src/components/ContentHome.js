// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { getPosts } from '../actions/contentAction'

// Components
import PostList from './PostList'

export class ContentHome extends Component {

    componentDidMount = () => {
        this.props.getPosts();
    }

    render() {
        return (
            <div className="home" >
                <PostList posts={this.props.posts} variant="outline-info" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.content.posts
})

const mapDispatchToProps = {
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentHome)
