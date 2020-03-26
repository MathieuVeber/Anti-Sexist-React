// React
import React from 'react'
import { connect } from 'react-redux'

export function Label(props) {
    return (
        <li>
            {props.label.name}<br/>
            {props.label.of}<br/>
            {props.label._id}
        </li>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Label)
