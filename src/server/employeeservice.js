import config from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/ReactJs/employeepayrollapp/src/config/config.js';

const axios = require('axios').default;

export default class EmployeeService{
    baseUrl = config.baseUrl;
    addEmployee(data){
        return axios.post(`${this.baseUrl}employee`,data)
    }
}