import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Button, Row, Col, Form, FormGroup, Alert, Label, Input } from 'reactstrap';
import './customer-detail-form.scss';
import { FORM_DETAILS } from '../common-components/constants';
import { formAction } from '../customer-summary/actions';
import { reportData } from '../reports/actions';
import NavBar from '../common-components/navBar';
class CustomerDetail extends Component {
  Title = FORM_DETAILS.TITLE;
  
  constructor(props) {
    super(props);
    this.props=props;
    this.state = {
      values:{
        name: '',
        age: '',
        gender: '',
        address: '',
        profilePic: null
      },
      nextbtn: true,
      reportData: null,
      visible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.newdata = this.props.reportData;
    this.formRef = React.createRef();
  }

  //Form Submit
  handleSubmit(event) {
    event.preventDefault();
    this.newdata.push(this.state.values)
    this.props.dispatch(formAction(this.state.values));
    this.props.dispatch(reportData(this.newdata));
    this.formReset();
    this.setState({nextbtn: false, visible: true});
    this.visibleClose();
  }
  
  //On change field event handler
  handleInputChange = (e) => {
    this.setState({
      values: {...this.state.values, [e.target.name]: e.target.value}
    });
  }

  //reset form
  formReset() {
    this.formRef.current.reset()
  }

  //on change image upload handler
  handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    if(e.target.name){
      reader.onloadend = () => {
        this.setState({
          values: {...this.state.values, profilePic: reader.result}
        });
      }
    }
  }

  //on click 'next' navigate to customer-summary 
  summaryRedirect = ()=>{
    this.props.history.push('/customer-summary');
  }

  // timeout for success message
  visibleClose = () => {
    setTimeout(()=>{
      this.setState({visible: false});
    }, 2000)
    
  }

  render() {
    return (
      <div>
        <NavBar/>
        
      <Container className="form-container">  
      <Alert isOpen={this.state.visible} className="alert-notification" color="success"><p>{FORM_DETAILS.SUCCESS}</p></Alert>
        <Row className="justify-content wrapper">
        <Col md="10">
          <h3>{this.Title}</h3>
          <Form innerRef={this.formRef} className="form" onSubmit={e => this.handleSubmit(e)}>
            <FormGroup row>  
              <Label for="name" sm={2}>Name</Label>  
              <Col sm={10}>
                <Input value={this.state.name} name="name" onChange={e => this.handleInputChange(e)} type="text" id="name" placeholder="Enter a name" required/>  
              </Col>
            </FormGroup>
             <FormGroup row>  
              <Label for="age" sm={2}>Age</Label>  
              <Col sm={10}>
                <Input value={this.state.age} name="age" onChange={e => this.handleInputChange(e)} type="number" id="age" placeholder="Enter a name" required/>
              </Col>  
            </FormGroup>
            <FormGroup row>  
              <Label for="gender" sm={2}>Gender</Label>  
              <Col sm={10}>
                <Input value={this.state.gender} name="gender" onChange={e => this.handleInputChange(e)} type="select" id="gender" placeholder="Enter a name" required defaultValue=""> 
                <option value="" disabled>Select</option>
                <option>Male</option>
                <option>Female</option> 
              </Input>
              </Col>
            </FormGroup>
            <FormGroup row>  
              <Label for="address" sm={2}>Address</Label>  
              <Col sm={10}>
                <Input value={this.state.address} name="address" onChange={e => this.handleInputChange(e)} type="textarea" id="address" placeholder="Enter a name" required />  
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>Profile Pic</Label>
              <Col sm={10}>
                <Input type="file" name="profilePic" onChange={e => this.handleImageChange(e)} accept="image/png" id="exampleFile" required/>
              </Col>
            </FormGroup>
            <FormGroup row className="justify-content">
              <Button color="info" type="submit" variant="secondary">Submit</Button>
            </FormGroup> 
          </Form>
          
        </Col>
        </Row>
        <Row>
          <Col>
            <div className="next-btn">
              <Button color="info" onClick={this.summaryRedirect} variant="secondary" disabled={this.state.nextbtn}>Next</Button>
            </div>
          </Col>
        </Row>    
      </Container>
      </div>
    );
  }
}

const mapSubmitStateToProps = (state) => {
  return{
      reportData: state.reportReducer.data
  }
}

export default connect(mapSubmitStateToProps)(CustomerDetail);