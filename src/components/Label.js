// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Label extends Component {
    render() {
        return (
            <li>
                {this.props.label.name}<br/>
                {this.props.label.of}<br/>
                {this.props.label._id}
            </li>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Label)
