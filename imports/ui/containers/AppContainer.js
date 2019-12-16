import React, { Component,useState,useEffect } from 'react';
import MainContainer from './MainContainer';
import ContainpatientListWithoutauth from '../../../client/components/container/containpatientListWithoutauth'
function AppContainer(props) {
  
  const [isAuthenticated,setPatients]=useState(Meteor.userId() !== null)

  useEffect(() => {
          if (!isAuthenticated) {
      // props.history.push('/login');
      // props.history.push('/withoutauth');
          }
}, [props])

  const logout=(e)=>{
    e.preventDefault();
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
            props.history.push('/login');
        }
    });
  }
  
    if(isAuthenticated){
      return (
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
              <a className="navbar-brand" href="/"> <span role="img" aria-lael="house-imoji">&#127968;</span> </a>
                <a className="navbar-brand" href="/patient">Create Patient</a>
                <a className="navbar-brand" href="/withoutauth">See all patient</a>
                {/* <a className="navbar-brand" href="/patient">{isAuthenticated ? 'Create Patient' : ''}</a> */}
              </div>
              <div className="navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#" onClick={logout}>{isAuthenticated ? 'Logout' : 'Login'}</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <MainContainer />
        </div>
      );

    }else{
      return (
        <div>
          <ContainpatientListWithoutauth />
        </div>
      );
    }
}
export default AppContainer