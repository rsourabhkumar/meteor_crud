import { Meteor } from 'meteor/meteor';
import {Patients} from '../imports/collections/patient'
import {Tracker} from 'meteor/tracker'

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('patients', function() {
    return Patients.find({});

    // return Tracker.autorun(()=>Patients.find({}));
  });



  // Meteor.publish('patients', function() {
  //   // var self=this;
  //   // Patients.find({}).map((data) => this.added('patients',data._id,{...data}));
  //   Patients.find({}).map((data) => console.log(data));

  //   // this.ready();
  //   // console.log(self);
  //   // this.auto('patients',{})
  //   // return Patients.find({});

  //   // return Tracker.autorun(()=>Patients.find({}));
  // });



});





