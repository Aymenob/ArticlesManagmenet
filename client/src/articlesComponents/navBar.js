import React from 'react'

const NavBar = ({navBar,Research}) => {
  return (
    <nav class="navbar navbar-light bg-light justify-content-between">
   {navBar}
    <form className='navBarr'>
        
      <input onChange={(e) => Research(e.target.value)} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="">Search</button>
    </form>
  </nav>
  )
}

export default NavBar
