import React, { Component} from 'react';
import { FormGroup,  Col, Input, Form, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import './modal.scss';
class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: props.initialModalState,
            password: '',
            routeBtn: false,
        };
        this.formRef = React.createRef();
    }

    // input filed change handler
    handleInputChange = (e) => {
      this.setState({password : e.target.value});
      if(e.target.value === ''){
        this.setState({routeBtn : false});
      }
    }

    // for submit handler
    handleModalSubmit(event) {
      event.preventDefault();
      if(this.state.password === 'report'){
        this.props.history.push('/reports');
        this.formReset();
      }
      else{
        this.setState({routeBtn : true});
      }
    }

    // on cancel click close modal and clear value
    closeModal = () => {
      this.setState({password : '', routeBtn: false});
    }

    //reset form
    formReset() {
      this.formRef.current.reset()
    }
    
    render() {
    const {initialModalState} = this.props;
    return (
      <div className="modal-container">
        <Modal isOpen={initialModalState} >
          <ModalHeader>Password Required</ModalHeader>

          <Form innerRef={this.formRef} className="form" onSubmit={e => this.handleModalSubmit(e)}>
          <ModalBody>
          <FormGroup row>  
              <Col>
                <Input value={this.state.password} name="password" onChange={e => this.handleInputChange(e)} type="password" id="password" placeholder="Enter a password" required/> 
                <span className="error">{this.state.routeBtn ? 'Entered Password is incorrect': ''}</span> 
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
          <FormGroup className="modal-footer">
              <Button type="submit" variant="secondary">Submit</Button>
              <Button color="secondary" onClick={ () => {this.props.closeModal(); this.closeModal()}}>Cancel</Button>
            </FormGroup>
            </ModalFooter>
            </Form>
        </Modal>
      </div>
    );
  }
}
  
  export default connect(null)(withRouter(ModalComponent));