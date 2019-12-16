import React,{Component} from 'react'
import patientListWithoutauth from '../patients/patientListWithoutauth'
import {Tracker} from  'meteor/tracker'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import  {Patients}  from '../../../imports/collections/patient';

export default withTracker(() => {
    const patientsHandle = Meteor.subscribe('patientsWithoutAuth');
    const loading = !patientsHandle.ready();
    const list = Patients.find({}).fetch();
    const listExists = !loading && !!list;
    const currentUser = Meteor.user();

    return {
      loading,
      list,
      currentUser,
      patients: listExists ? list: [],
      
    };
  })(patientListWithoutauth);