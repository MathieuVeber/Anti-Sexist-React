// React
import React from 'react'
import { connect } from 'react-redux'

// Actions
import { getLabels } from '../actions/contentAction'

export function ContentLabels(props){
    return
}

const mapStateToProps = (state) => ({
    labels: state.content.labels,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentLabels)
