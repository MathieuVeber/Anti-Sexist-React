// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { getPosts, getLabels } from '../actions/contentAction'

// Components
import LabelList from './LabelList'
import PostList from './PostList'

export class ContentSort extends Component {

    componentDidMount = () => {
        this.props.getLabels("posts");
        this.props.getPosts(1,"latest","all");
    }
    
    render() {
        return (
            <div className="sort" >
                <LabelList labels={this.props.labels} />
                <PostList posts={this.props.posts} variant="outline-warning" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.content.posts,
    labels: state.content.labels,
})

const mapDispatchToProps = {
    getLabels,
    getPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentSort)
