import { Meteor } from 'meteor/meteor';
import {Patients} from '../imports/collections/patient'
import {Tracker} from 'meteor/tracker'

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('patients', function() {
    return Patients.find({ ownerId: this.userId });
  });

  Meteor.publish('patientsWithoutAuth', function() {
    return Patients.find({});
  });


});





