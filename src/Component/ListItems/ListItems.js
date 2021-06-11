// import { render } from "@testing-library/react";
// import { Component } from "react";
import { Component } from "react"
import Button from "../Button/Button"
import './style.css'

class ListItems extends Component {
render(){
    return (
    <div className="list-items">
    <span className="task-title"> {this.props.task} </span> 
       
        <Button 
        text="Delete"
        isPurple={true}
        handleClick={props.handleDelete}
        
        />
   
    </div>
    );
        
    }
  
}
export default ListItems