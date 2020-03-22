import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/contentAction'
import Post from './Post'
import { Tabs, Tab } from 'react-bootstrap'

export class PostList extends Component {

    constructor(props) {
        super();
        this.state = {
          // Takes active tab from props if it is defined there
          activeTab: props.activeTab || "latest"
        };
        
        // Bind the handleSelect function already here (not in the render function)
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount = () => {
        this.props.getPosts()
    }

      
    render() {
    return (
        <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
            <Tab eventKey='latest' title='Les plus récents'>
                {this.props.posts.map(post => <Post key={post._id} post={post}/>)}
            </Tab>
            <Tab eventKey='popular' title='Les plus populaires'>
                {this.props.posts.map(post => <Post key={post._id} post={post}/>)}
            </Tab>
        </Tabs>
    );
    }
    
    handleSelect(selectedTab) {
    // The active tab must be set into the state so that
    // the Tabs component knows about the change and re-renders.
        this.setState({
            activeTab: selectedTab
        });
    }  
}

const mapStateToProps = (state) => ({
    posts: state.content.posts,
})

const mapDispatchToProps = {
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
