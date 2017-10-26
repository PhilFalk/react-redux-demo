import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, FormControl, Col, Row, Checkbox } from 'react-bootstrap';
import todoActions from '../../actions/todoActions';

class TodoList extends Component {

  getListItems() {
    return this.props.todo.listItems.map((item, index) => {
      const textDec = (item.isDone) ? { 'textDecoration': 'line-through' } : {};
      return (
        <div key={index}> <Checkbox> <div style={textDec}> {item.itemText} </div> </Checkbox> </div>
      )
    });
  }

  render() {
    return (
      <div> 
        { this.getListItems() }
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);