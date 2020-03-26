// React
import React, {Component} from 'react'
import { connect } from 'react-redux'

//Component
import {LabelList} from './LabelList'
import {LabelNew} from './LabelNew'

//Action
import {getLabels} from'../actions/contentAction'

export class ContentLabel extends Component{
    componentDidMount(){
        this.props.getLabels(this.props.of)
    };

    render(){
        return (
            <div>
                <LabelList 
                    labels={this.props.labels}/>
                <LabelNew labels={this.props.labels}/>
            </div>
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