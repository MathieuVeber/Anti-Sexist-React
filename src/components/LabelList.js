// React
import React from 'react'
import { connect } from 'react-redux'

// Components
import Label from './Label'

export function LabelList(props){
    return (
        <ul>
            {props.labels.map(label => <Label key={label._id} label={label}/>)}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelList)
