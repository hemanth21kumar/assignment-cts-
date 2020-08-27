import React, { Component } from "react";
import './customer-summary.scss';
import { connect } from 'react-redux';
import { CUSTOMER_DETAILS } from '../common-components/constants';
import { Container, Button, Row, Col, Label,ButtonGroup } from 'reactstrap';
import NavBar from '../common-components/navBar';


class CustomerSummary extends Component {
    Title = CUSTOMER_DETAILS.TITLE;
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            summaryData: null
        };
    }

    // go to previous page
    previous = () =>{
        this.props.history.push('/');
    }

    render() {
        const {summaryData} = this.props;
        return (
            <div>
                <NavBar/>
                <Container className="details-container">
                    <h3>{this.Title}</h3>
                    <Row className="row-center">
                        <Col md="8">
                        <Row>
                            <Col md="3">
                                <div>
                                    <img className="pic-style" src={summaryData.profilePic} alt="" />
                                    <Label md={2}></Label>
                                </div>
                            </Col>
                            <Col md="9">
                            { Object.entries(summaryData).map(([key, value]) => (
                                <Row key={key}>   
                                <Label md={2}>{key !== 'profilePic'? key: null}</Label>
                                <Col md={10}>
                                    {
                                        key !== 'profilePic' ? <p>{value}</p>:null
                                    }
                                </Col>   
                            </Row>
                            ))}
                            </Col>
                        </Row>            
                        </Col>
                    </Row>  
                    <ButtonGroup className="btn-group">
                     <Button color="info" onClick={this.previous} variant="secondary">Previous</Button>
                    </ButtonGroup>  
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        summaryData: state.summaryReducer.data
    }
}

export default connect(mapStateToProps)(CustomerSummary);