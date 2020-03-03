import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {connect } from 'react-redux'
import {edit_movie} from './actions/MovieActions'
import { v4 as uuidv4 } from 'uuid';


class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title : this.props.movie.title,
      image : this.props.movie.image,
      rating : this.props.movie.rating,
      year : this.props.movie.year

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
  edit_movie = () => {
    this.props.edit({...this.state  , id : this.props.movie.id} , this.props.movie.id)
    this.setState({show : false})
  }
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>Edit</Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modification</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
              </div>
              <div>
                <label>Image:</label>
                <input type="text" name="image" onChange={this.handleChange} value={this.state.image}/>
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" name="rating" onChange={this.handleChange} value={this.state.rating}/>
              </div>
              <div>
                <label>Year:</label>
                <input type="text" name="year" onChange={this.handleChange} value={this.state.year}/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.edit_movie}>
              EDIT Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    edit : (movie , id) => dispatch(edit_movie(movie , id))
  }
}
export default connect(null , mapDispatchToProps)(EditModal);