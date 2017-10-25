import React from "react";
import { Button, FormControl, Col, Row } from 'react-bootstrap';

// app component
export default class Todo extends React.Component {
  // render

  onButtonClick() {
    console.log('test click')
  }

  render() {
    return (
      <div className="container">
        <br/>

        <Row>
        <Col xs={3}>
            <FormControl
                type="text"
                placeholder="Enter text"
                bsSize="sm"
            />
        </Col>

        <Col xs={9}>
            <Button bsStyle="default" bsSize="small" onClick={this.onButtonClick}>
                Add
            </Button>
        </Col>
        </Row>
      </div>
    );
  }
}