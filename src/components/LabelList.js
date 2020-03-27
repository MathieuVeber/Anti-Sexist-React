// React
import React from 'react'
import { connect } from 'react-redux'

// Components
import Label from './Label'


export function LabelList(props){
    return (
        <div className="LabelList">
                {props.labels.map(label => <Label key={label._id} label={label} variant="dark"/>)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelList)
