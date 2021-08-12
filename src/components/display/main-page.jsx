import React from 'react';
import './main-page.scss';
import deleteIcon from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/ReactJs/employeepayrollapp/src/assests/images/delete-black-18dp.svg';
import updateIcon from '../../assests/images/create-black-18dp.svg';
import profile1 from '../../assests/images/Ellipse -1.png';
import profile2 from '../../assests/images/Ellipse -3.png';
import profile3 from '../../assests/images/Ellipse -7.png';
import profile4 from '../..//assests/images/Ellipse -8.png';
import {withRouter} from 'react-router-dom';

const Display =(props) => {
    return(
        <table id ="display" className="table">
        <tbody>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Startdate</th>
                <th>Actions</th>
            </tr>
                {
                props.employeeArray.map((employee) => (
                <tr>
                    <td><img src={profilePicture(employee.profilePic)} alt="" /></td>
                    <td>{employee.name}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.department.map(dept => (<div className="dept-label">{dept}</div>))}</td>
                    <td> ₹ {employee.salary}</td>
                    <td>{employee.startDate}</td>
                    <td><img src={deleteIcon} onClick={() => remove(employee.id)} alt="delete" />
                    <img src={updateIcon} onClick={() => edit(employee.id)} alt="edit" /></td>
                </tr>
            ))
        }
        </tbody>
    </table>
    );
}

const remove = (id) => {
}
const edit = (id) => {
}
const profiles = ["../../assests/images/Ellipse -1.png","../../assests/images/Ellipse -3.png","../../assests/images/Ellipse -7.png",
            "../../assests/images/Ellipse -8.png"];

const profilePicture = (profilePath) => {
    let index ;
    for(let i = 0; i < profiles.length; i++){
        if(profiles[i] === profilePath){
            index = i;
        }
    }
    switch(index){
        case 0:
            return profile1;
        case 1:
            return profile2;
        case 2:
            return profile3;
        case 3:
            return profile4;
        default:
            return null; 
    }
}
export default withRouter(Display); 
