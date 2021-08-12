import React from 'react';
import logo from '../../assests/images/headerlogo.png';
import addIcon from '../../assests/images/add-24px.svg';
import './home-page.scss';
import {Link} from 'react-router-dom';
import EmployeeService from '../../services/employeeservice.js';
import Display from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/ReactJs/employeepayrollapp/src/components/display/main-page.jsx';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          allEmployeeArray: [],
          employeeArray: [],
        };
        this.employeeService = new EmployeeService();    
}
componentDidMount() {
    this.getEmployeeList();
  }
  getEmployeeList = () => {
    this.employeeService.getAllEmployees()
    .then(responseData => {
      console.log("Data received after GET Call :\n" + responseData.data);
      this.setState({allEmployeeArray: responseData.data});
      this.setState({employeeArray: responseData.data});
    }).catch(errror => {
      console.log("Error while fetching Employee List\nError : " + JSON.stringify(errror));
    })
  }
  render () {
    return (
      <div className="body">
        <header className="header-content">
            <div className="logo-content">
                <img src={logo} alt="Logo" />
                <div>
                    <span className="emp-text">EMPLOYEE</span><br />
                    <span className="emp-text emp-payroll">PAYROLL</span>
                </div>
            </div>
        </header>
        <div className="main-content">
            <div className="main-header">
                <div className="emp-detail-text">
                    Employee Details
                </div>
                <Link to="payroll-form" className="add-button">
                  <img src={addIcon} alt="Add Button" />Add User
                </Link>
            </div>
            <div className="table-main">
                <Display employeeArray = {this.state.employeeArray} />
            </div>
        </div>
      </div>
    );
  }
}

export default HomePage; 