import React from 'react'
import EmployeeListItem from './EmployeeListItem';

function EmployeeList(){
    return(
        <div className = "employeeList" style = {{backgroundColor: "purple"}}>
<EmployeeListItem/>
<EmployeeListItem/>
<EmployeeListItem/>
<EmployeeListItem/>
<EmployeeListItem/>

</div>
    )
};

export default EmployeeList;