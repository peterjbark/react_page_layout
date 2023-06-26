import React from 'react'
import EmployeeListItem from './EmployeeListItem';

function EmployeeList(){
    return(
        <div className = "employeeList" style = {{border: "2px purple solid", margin: "4px"}}>
        Employee List
<EmployeeListItem/>

</div>
    )
};

export default EmployeeList;