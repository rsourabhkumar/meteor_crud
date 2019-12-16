import React,{Component} from 'react'
import {Link} from  'react-router-dom'
function Header(props){
        
        return(
    //         <header>
    //         <React.Fragment>
    //             <a >
    //                 <span role="img" aria-lael="house-imoji">&#127968;</span>
    //             </a>
    //             <h1>Patient</h1>
    //             <div className="user-area">
    //     <li><a href="/patient">Craete patient</a></li>
    //     </div>   
    //                 </React.Fragment>
      
    //   </header>

        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
            <a className="navbar-brand" href="/"> <span role="img" aria-lael="house-imoji">&#127968;</span> </a>
              <a className="navbar-brand" href="/patient">Create Patient</a>
            </div>
            <div className="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={this.logout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> 
          
        )
}
export default Header