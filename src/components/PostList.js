// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
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

    handleSelect(selectedTab) {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
            this.setState({
                activeTab: selectedTab
            });
        }  

      
    render() {
    return (
        <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
            <Tab eventKey='latest' title='Les plus récents'>
                {this.props.posts.map(post => <Post key={post._id} post={post} variant={this.props.variant} />)}
            </Tab>
            <Tab eventKey='popular' title='Les plus populaires'>
                {this.props.posts.map(post => <Post key={post._id} post={post} variant={this.props.variant} />)}
            </Tab>
        </Tabs>
    );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
