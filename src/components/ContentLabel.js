// React
import React from 'react'
import { connect } from 'react-redux'

//Component
import {LabelList} from './LabelList'
import {LabelNew} from './LabelNew'

export function ContentLabel(props){
    return (
        <div>
            <LabelList/>
            <LabelNew/>
        </div>
    )
    
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentLabel)