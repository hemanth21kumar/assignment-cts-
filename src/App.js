import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CustomerDetail from './customer-detail-form/customer-detail-form';
import CustomerSummary from './customer-summary/customer-summary';
import Reports from './reports/reports';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/" component={CustomerDetail} exact />
            <Route path="/customer-summary" component={CustomerSummary} />
            <Route path="/reports" component={Reports} />
        </Switch>
      </Router>
    );
  }
}
export default App;