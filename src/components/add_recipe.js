import React, {Component} from 'react';
import {Button, Modal } from 'react-bootstrap';


export default class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({showModal: false});
  }

  open() {
    this.setState({showModal: true});
  }

  render() {
    return (
      <div>
        <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.open.bind(this)}
          >
            Add Recipe
          </Button>
        <div className="static-modal">
          <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}
