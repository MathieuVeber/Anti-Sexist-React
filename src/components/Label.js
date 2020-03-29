// React
import React from 'react'
import { connect } from 'react-redux'

//Component
import LabelDelete from "./LabelDelete"
import LabelEdit from "./LabelEdit"

//Bootstrap
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export function Label(props) {
    return (
        <Card className="m-4" bg={props.variant} text={props.variant === 'light' ? 'dark' : 'white'}> 
            <Card.Body>
                {props.label.name}
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                <LabelDelete 
                    name={props.label.name}
                    posts={props.posts}
                />
                </Col>
                <Col>
                <LabelEdit
                    name={props.label.name}
                    posts={props.posts}
                    id={props.label.id}
                />
                </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Label)
