import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick = () => {
        this.setState({
            isLoggedIn: false,
        });
        console.log(this);
  };
  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        
        {this.state.isLoggedIn ? (
            <button onClick={this.handleClick}>Login</button>
        ) : (
            <NavBarChild />
        )}
      </div>
    )
  }
}

export default NavBarForm