import React from 'react'

function EmployeeListItem(){
    return(
        <div className = "employeeItem" style = {{border: "2px red solid", margin: "2px",}}>
        <ul className = "list" style = {{listStyleType: "none"}}>
            <li style = {{border: "1px red solid", paddingLeft: "2px" }}> James King 
            <br></br>
            President and CEO</li>
            <li style = {{border: "1px red solid", paddingLeft: "2px"}}> Julie Taylor
            <br></br>
            VP of Marketing</li>
            
            <li style = {{border: "1px red solid", paddingLeft: "2px"}}> Eugene Lee
            <br></br>
            CFO</li>
            <li style = {{border: "1px red solid", paddingLeft: "2px"}}> John Williams
            <br></br>
            VP of Engineering</li>
            <li style = {{border: "1px red solid", paddingLeft: "2px"}}> Ray Moore
            <br></br>
            VP of Sales</li>
            <li style = {{border: "1px red solid", paddingLeft: "2px"}}> Paul Jones
            <br></br>
            QA Manager</li>


        </ul>
       
        </div>
    )
};

export default EmployeeListItem;