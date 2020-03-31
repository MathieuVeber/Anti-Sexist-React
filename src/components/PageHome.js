// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { getPosts, getLabels } from '../actions/contentAction'

// Components
import PostFilter from './PostFilter'
import PostNew from './PostNew'
import PostList from './PostList'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Collapse from 'react-bootstrap/Collapse'

export class PageHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label:"all",
            sort:"latest",
            displayFilter: false,
            displayNewPost: false,
        }
    }


    handleFilter = () => {
        this.setState({displayFilter:!this.state.displayFilter});
        this.setState({displayNewPost:false});
    }

    handleNewPost = () => {
        this.setState({displayNewPost:!this.state.displayNewPost});
        this.setState({displayFilter:false});
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
        this.props.getLabels("posts");
        this.props.getLabels("comments");
        this.props.getPosts();
    }

    render() {
        return (
            <div className="home">
                <Container fluid>
                    <Row className="d-flex justify-content-center" >
                        <Col xs="12" md="10" lg="8" xl="6" className="">
                            <ButtonToolbar className=" d-flex justify-content-between" >
                                <Button onClick={this.handleFilter} variant="dark" active={this.state.displayFilter} >Filtrer</Button>
                                <Button onClick={this.handleNewPost} variant="dark" active={this.state.displayNewPost} >Ecrire un post</Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>

                    <Collapse in={this.state.displayNewPost} >
                        <div>
                            <Row className="mt-4 justify-content-center" >
                                <Col xs="12" md="10" lg="8" xl="6">
                                    <PostNew />
                                </Col>
                            </Row>
                        </div>
                    </Collapse>

                    <Collapse in={this.state.displayFilter} >
                        <div>
                            <Row className="mt-4 justify-content-center" >
                                <Col xs="12" md="10" lg="8" xl="6">
                                    <PostFilter
                                        labels={this.props.labels}
                                        current={{sort:this.state.sort, label:this.state.label}}
                                        onSortChange={this.onSortChange}
                                        onLabelChange={this.onLabelChange}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Collapse>

                    <Row className="mb-4 justify-content-center">
                        <Col xs="12" md="10" lg="8" xl="6">
                            <PostList
                                posts={this.props.posts}
                                variant="dark"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.content.posts,
    labels: state.content.labels.posts,
})

const mapDispatchToProps = {
    getPosts,
    getLabels,
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHome)
