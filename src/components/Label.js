// React
import React from 'react'
import { connect } from 'react-redux'

//Component
import {LabelDelete} from "./LabelDelete"

export function Label(props) {
    return (
        <li>
            <LabelDelete 
                name={props.label.name}
                of={props.label.of}
            />
            {props.label.name}
        </li>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Label)
