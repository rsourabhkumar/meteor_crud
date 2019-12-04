import React,{Component} from 'react'
import {Link} from  'react-router-dom'
class Header extends Component{
    render(){
        return(
            <header>
            <React.Fragment>
                <a >
                    <span role="img" aria-lael="house-imoji">&#127968;</span>
                </a>
                <h1>Patient</h1>
                <div className="user-area">
        {/* <li><Link to="/patient">Craete patient</Link>Craete patient</li> */}
        <li><a href="/patient">Craete patient</a></li>
        </div>      
            </React.Fragment>
      
</header>
        )
    }
}
export default Header