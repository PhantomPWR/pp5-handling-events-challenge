import React from 'react'

function NavBarChild(props) {
  return (
    <div>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NavBarChild