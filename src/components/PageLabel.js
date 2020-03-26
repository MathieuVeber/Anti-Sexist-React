import React, { Component } from 'react'
import { connect } from 'react-redux'

//Component
import ContentLabel from './ContentLabel'

export class PageLabel extends Component {
    render() {
        return (
            <div>
                <ContentLabel/>
                <ContentLabel/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLabel)
