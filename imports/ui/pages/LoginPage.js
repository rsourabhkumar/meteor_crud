import React, { Component,useState } from 'react'

function LoginPage(props){
 
  const [error, setError] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        setError(err.reason);
      } else {
        props.history.push('/');
      }
    });
  }

    // const error = error;
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                :''}
              <form data-test="login-form"  
                    id="login-form"
                    className="form col-md-12 center-block"
                    onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="email"
                        id="login-email"
                        className="form-control input-lg"
                        placeholder="email"/>
                </div>
                <div className="form-group">
                  <input type="password"
                        id="login-password"
                        className="form-control input-lg"
                        placeholder="password"/>
                </div>
                <div className="form-group text-center">
                  <input type="submit"
                        data-test="login-button"
                        id="login-button"
                        className="btn btn-primary btn-lg btn-block"
                        value="Login" />
                </div>
                <div className="form-group text-center">
                  <p className="text-center">
                    {/* Don't have an account? Register <Link to="/signup">here</Link> */}
                    Don't have an account? Register <a href="/signup">here</a>
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

export default LoginPage