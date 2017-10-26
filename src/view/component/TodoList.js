import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, FormControl, Col, Row } from 'react-bootstrap';
import todoActions from '../../actions/todoActions';

export default class TodoList extends Component {
  render() {
    return (<div> Todo List </div>);
  }
}