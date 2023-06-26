import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

function Homepage(){
    return(
        <div classname = "homePage" style = {{border: "2px orange solid"}}>
        <h1>Home Page</h1>

        <Header/>
        <SearchBar/>
        <EmployeeList/>

        </div>
    )
}

export default Homepage;