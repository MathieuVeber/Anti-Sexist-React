// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { getReports } from '../actions/contentAction'

// Components
import PostList from './PostList'

export class PageReport extends Component {

    componentDidMount = () => {
        this.props.getReports("posts",this.props.token);
    }
    
    render() {
        return (
            <div className="report" >
                <PostList posts={this.props.reports} variant="dark" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    reports: state.content.reports,
    token: state.user.token,
})

const mapDispatchToProps = {
    getReports
}

export default connect(mapStateToProps, mapDispatchToProps)(PageReport)
