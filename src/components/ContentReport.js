// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { getReports } from '../actions/contentAction'

// Components
import PostList from './PostList'

export class ContentReport extends Component {

    componentDidMount = () => {
        this.props.getReports("posts",this.props.token);
    }
    
    render() {
        return (
            <div className="report" >
                <PostList posts={this.props.reports} variant="outline-danger" />
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

export default connect(mapStateToProps, mapDispatchToProps)(ContentReport)
