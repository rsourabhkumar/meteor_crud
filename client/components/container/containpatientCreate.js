import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import CreatePatient from '../patients/patients_create'

export default signupContainer = withTracker((params) => {
    const cratePatient=(fnNane, name, age,disease)=>{
        Meteor.call(fnNane, name, age,disease);
    } 
    return {
        cratePatient,    
    };
  })(CreatePatient);