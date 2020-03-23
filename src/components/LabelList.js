// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Label from './Label'

export class LabelList extends Component {
    render() {
        return (
            <ul>
                {this.props.labels.map(label => <Label key={label._id} label={label}/>)}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelList)
