// React
import React from 'react'
import { connect } from 'react-redux'

//Component

//Bootstrap
import Card from 'react-bootstrap/Card'


export function Label(props) {
    return (
        <Card className="m-4" bg={props.variant} text={props.variant === 'light' ? 'dark' : 'white'}> 
            <Card.Body>
                {props.admin.name}
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Label)
