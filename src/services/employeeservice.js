import config from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/ReactJs/employeepayrollapp/src/config/config.js';
import AxiosService from './axiosService';

const axios = require('axios').default;

export default class EmployeeService{
    baseUrl = config.baseUrl;
    
    addEmployee(data){
        return AxiosService.postService(`${this.baseUrl}employee`,data);
    }
}