// React
import React from 'react'
import { connect } from 'react-redux'

//Component
import AdminDelete from './AdminDelete'

//Bootstrap
import Card from 'react-bootstrap/Card'


export function Label(props) {
    return (
        <Card className="m-4" bg={props.variant} text={props.variant === 'light' ? 'dark' : 'white'}> 
            <Card.Body>
                {props.admin.pseudo}
            </Card.Body>
            <Card.Footer>
                <AdminDelete _id={props.admin._id}/>
            </Card.Footer>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Label)
