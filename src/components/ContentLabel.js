// React
import React, {Component} from 'react'
import { connect } from 'react-redux'

//Component
import LabelList from './LabelList'
import LabelNew from './LabelNew'

//Action
import {getLabelsPost, getLabelsComments} from'../actions/contentAction'

//Bootstrap
import Col from 'react-bootstrap/Col'



export class ContentLabel extends Component{
    
    componentDidMount(){
        this.props.posts ? (
            this.props.getLabelsPost()
        ) : (
            this.props.getLabelsComments()
        )
        
    };

    render(){
        return (
            <Col md="6">
            <h2>{this.props.title}</h2>
            <LabelList
                posts={this.props.posts}
            />
            <LabelNew 
                posts={this.props.posts}
            />
            </Col>

        )
    }
    
}

function mapStateToProps (state) {
    return{
    }
}



const mapDispatchToProps = {
    getLabelsPost,
    getLabelsComments
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContentLabel)