import { Component } from 'react'
import './style.css'

class Button extends Component{
render(){
        return (
            <div
            className={this.props.isPurple ? "btn background-button":"btn"}
            onClick={this.rops.handleClick}
            >
              {this.props.text}
            </div>
        );
        }
}

export default Button;
