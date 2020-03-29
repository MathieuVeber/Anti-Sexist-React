// React
import React, {Component} from 'react'
import { connect } from 'react-redux'

//Component
import LabelList from './LabelList'
import LabelNew from './LabelNew'

//Action
import {getLabels} from'../actions/contentAction'

//Bootstrap
import Col from 'react-bootstrap/Col'



export class ContentLabel extends Component{
    
    componentDidMount(){
        this.props.getLabels(this.props.of);
    };

    render(){
        return (
            <Col md="6">
            <h2>{this.props.title}</h2>
            <LabelList
                of={this.props.of}
            />
            <LabelNew 
                of={this.props.of}
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
    getLabels
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContentLabel)