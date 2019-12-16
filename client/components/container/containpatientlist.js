import React,{Component,useState} from 'react'
import Patients_List from '../patients/patients_list'
import {Tracker} from  'meteor/tracker'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import  {Patients}  from '../../../imports/collections/patient';


export default withTracker((props) => {
  const [isAuthenticated,setuser]=useState(props.currentUser!== null)
    // const patientsHandle = Meteor.subscribe('patients');
    const patientsHandle = isAuthenticated? Meteor.subscribe('patients'): Meteor.subscribe('patientsWithoutAuth');
    const loading = !patientsHandle.ready();
    const list = Patients.find({}).fetch();
    const listExists = !loading && !!list;
    const currentUser=props.currentUser;
    const patientRemove=(patient)=> {
      Meteor.call('patients.remove', patient);
    this.props.PatientRemove(patient)
    }
    return {
      currentUser,
      loading,
      patients: listExists ? list: [{}],
      patientRemove,
    };
  })(Patients_List);