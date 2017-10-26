import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, FormControl, Col, Row } from 'react-bootstrap';
import todoActions from '../actions/todoActions';
import TodoList from './component/TodoList';

class Todo extends Component {

  constructor (props, context) {
    super(props, context);
  }

  onButtonClick = () => {
    this.props.todoActions.addTodoItem();
  }

  handleChange = (event) => {
    const text = event.target.value;
    this.props.todoActions.setTodoText(text);
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
              onChange={this.handleChange}
              value={this.props.todo.text}
            />
          </Col>
          <Col xs={9}>
            <Button bsStyle="default" bsSize="small" onClick={this.onButtonClick}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <br/>
            <TodoList />
          </Col>
        </Row>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
