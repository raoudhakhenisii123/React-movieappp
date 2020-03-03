import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {connect } from 'react-redux'
import {addMovie} from './actions/MovieActions'
import { v4 as uuidv4 } from 'uuid';


class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  addNewMovie = () => {
    this.props.add({...this.state  , id : uuidv4() })
  }
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          +
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" name="title" onChange={this.handleChange}/>
              </div>
              <div>
                <label>Image:</label>
                <input type="text" name="image" onChange={this.handleChange}/>
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" name="rating" onChange={this.handleChange}/>
              </div>
              <div>
                <label>Year:</label>
                <input type="text" name="year" onChange={this.handleChange}/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.addNewMovie}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add : movie => dispatch(addMovie(movie))
  }
}
export default connect(null , mapDispatchToProps)(AddModal);