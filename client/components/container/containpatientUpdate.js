import React,{Component} from 'react'
import Update_patient from '../patients/update_patient'
import {Tracker} from  'meteor/tracker'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import  {Patients}  from '../../../imports/collections/patient';



export default withTracker((props) => {
    const updatePatient=(functionname, patient ,name, age, disease)=>{
        Meteor.call(functionname, patient ,name, age,disease)
    };

    const patientId =props.match.params.patientId
    const patientsHandle = Meteor.subscribe('patients');
    const loading = !patientsHandle.ready();
    const list = Patients.findOne(patientId);
    const listExists = !loading && !!list;
    return {
        updatePatient,
      loading,
      patient: listExists ? list: [],
    };
  })(Update_patient);