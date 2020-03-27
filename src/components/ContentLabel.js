// React
import React, {Component} from 'react'
import { connect } from 'react-redux'

//Component
import LabelList from './LabelList'
import LabelNew from './LabelNew'

//Action
import {getLabels} from'../actions/contentAction'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

export class ContentLabel extends Component{
    componentDidMount(){
        this.props.getLabels(this.props.of)
    };

    render(){
        return (
            <Container Container>
                <Col md="4">
                <LabelList 
                    labels={this.props.labels}
                />
                <LabelNew />
                </Col>

            </Container>
        )
    }
    
}

const mapStateToProps = (state) => ({
    labels: state.content.labels
})

const mapDispatchToProps = {
    getLabels
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentLabel)