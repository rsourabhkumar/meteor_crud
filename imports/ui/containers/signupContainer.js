import { Accounts } from 'meteor/accounts-base';
import { withTracker } from 'meteor/react-meteor-data';
import SignupPage from '../pages/SignupPage'

export default signupContainer = withTracker((params) => {
    let Err;
    const createuser=(email,name,password)=>{
        Accounts.createUser({email: email, username: name, password: password}, (err) => {
             Err=err
          });
    } 
    return {
        createuser,
         Err,
    };
  })(SignupPage);