import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, FormControl, Col, Row } from 'react-bootstrap';

export default class Todo extends Component {
  constructor (props, context) {
    super(props, context);
  }

  onButtonClick = () => {
    console.log('new test click')
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