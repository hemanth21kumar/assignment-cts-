import React, { Component } from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import ModalComponent from '../common-components/modal/modal';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            summaryData: null
        };
        this.reportsRoute = this.reportsRoute.bind(this);
    }

    // show modal if route item is not report
    showModal = () => {
        if(this.props.report !== 'report'){
            this.setState({modal: true});
        }
    }

    // child to parent props handler
    reportsRoute = () => {
        if(this.state.modal){
            this.setState({modal: !this.state.modal});
        }
    }

    render() {
        const {report} = this.props;
        return (
            <Nav className="navigation">
            <div>Demo</div>
            <NavItem>
            <NavLink onClick={this.showModal}>{report === 'report' ? <Link to="/">Home</Link>: 'Report' }</NavLink>
            </NavItem>
            <ModalComponent report={report} closeModal={this.reportsRoute} initialModalState={this.state.modal} />
            </Nav>
        );
    }
}

export default connect(null)(NavBar);