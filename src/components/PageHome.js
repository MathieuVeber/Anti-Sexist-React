// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { getPosts, getLabelsPost } from '../actions/contentAction'

// Components
import PostFilter from './PostFilter'
import PostNew from './PostNew'
import PostList from './PostList'

export class PageHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label:"all",
            sort:"latest",
        }
    }

    onSortChange = () => {
        if (this.state.sort === "latest") {
            this.props.getPosts(1,"popular",this.state.label)
            this.setState({sort:"popular"})
        }
        else {
            this.props.getPosts(1,"latest",this.state.label)
            this.setState({sort:"latest"})
        }
    }

    onLabelChange = (newLabel) => {
        this.props.getPosts(1,this.state.sort,newLabel)
        this.setState({label:newLabel})
    }

    componentDidMount = () => {
        this.props.getLabels();
        this.props.getPosts();
    }

    render() {
        return (
            <div className="home">
                <PostFilter
                    labels={this.props.labels}
                    current={{sort:this.state.sort, label:this.state.label}}
                    onSortChange={this.onSortChange}
                    onLabelChange={this.onLabelChange}
                />

                <PostList
                    posts={this.props.posts}
                    variant="dark"
                />

                <PostNew/>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.content.posts,
    labels: state.content.labelsPost,
})

const mapDispatchToProps = (dispatch) => {
    return{
        getPosts,
        getLabels: ()=> dispatch(getLabelsPost()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHome)
