import React, { Component } from 'react'
import { connect } from 'react-redux'

//Component
import ContentLabel from './ContentLabel'

export class PageLabel extends Component {
    render() {
        return (
            <div>
                <ContentLabel 
                    of={'posts'}/>
                {/*
                <ContentLabel
                    of={'comments'}/>
                */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLabel)
