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
                <Container fluid>
                    <Row className="d-flex justify-content-center" >
                        <Col xs="12" md="10" lg="8" xl="6" className="">
                            <PostList posts={this.props.reports} variant="dark" />
                        </Col>
                    </Row>
                </Container>
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
