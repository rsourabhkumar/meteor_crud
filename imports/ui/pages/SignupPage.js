import React, { Component, useState } from 'react';
import propType from'prop-types'

 function SignupPage(props){

  const [error, setError] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    setError("test");
   
    props.createuser(email,name,password);
        if(props.err){
        setError(props.err.reason);
      } else {
        props.history.push('/login');
      }
  }

    // const error = this.state.error;
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Sign up</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                :''}
              <form  id="login-form"
                     data-test="signup-form"
                    className="form col-md-12 center-block"
                    onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" id="signup-name"
                        className="form-control input-lg" placeholder="name"/>
                </div>
                <div className="form-group">
                  <input type="email" id="signup-email"
                        className="form-control input-lg" placeholder="email"/>
                </div>
                <div className="form-group">
                  <input type="password" id="signup-password"
                        className="form-control input-lg"
                        placeholder="password"/>
                </div>
                <div className="form-group">
                  <input type="submit" 
                        data-test="signup-button"
                        id="login-button"
                        className="btn btn-lg btn-primary btn-block"
                        value="Sign Up" />
                </div>
                <div className="form-group">
                  <p className="text-center">
                    {/* Already have an account? Login <Link to="/login">here</Link> */}
                    Already have an account? Login <a href="/login">here</a>
                  </p>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{borderTop: 0}}></div>
          </div>
        </div>
      </div>
    );
}

SignupPage.propType={
  createuser:propType.func
}

export default SignupPage