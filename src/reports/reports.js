import React, { Component } from "react";
import './reports.scss';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { AgGridReact } from 'ag-grid-react';  
import { CUSTOMER_REPORT_DATA } from '../common-components/constants';
import NavBar from '../common-components/navBar';
class Reports extends Component {
    Title = CUSTOMER_REPORT_DATA.TITLE;
    
    constructor(props) {
        super(props);
        this.state = {
            reportData: null,
        };
    }

    // for ag-grid initail params set
    onGridReady = (params) => {
        this.api = params.api;
        this.columnApi = params.columnApi;
        this.api.sizeColumnsToFit();
    };
    render() {
       const {reportData} = this.props;
        return (
            <div>
                <NavBar report={'report'}/>
            <Container className="reports-container">
                <h3>{this.Title}</h3>
                <Row className="row-item">
                    <Col md="10">
                        <div className="ag-theme-balham" style={{height: '400px'}}>
                        <AgGridReact
                            onGridReady={this.onGridReady}
                            columnDefs={CUSTOMER_REPORT_DATA.COLUMN_DEF}
                            rowData={reportData}
                            headerHeight='30'
                            rowHeight='50'
                            enableColResize enableSorting 
                        >   
                        </AgGridReact>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

const mapReportsStateToProps = (state) => {
    return{
        reportData: state.reportReducer.data
    }
}

export default connect(mapReportsStateToProps)(Reports);