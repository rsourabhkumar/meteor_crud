import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

// if (Meteor.isServer) {
//   // This code only runs on the server
//   Meteor.publish('patients', function patientPublication() {
//     return Patients.find({});
//   });
// }

Meteor.methods({
  'patients.insert': function(name,age,disease) {
    return Patients.insert({
      createdAt: new Date(),
      name: name,
      age: age,
      disease: disease,
      ownerId: this.userId
    });
  },
  
  'patient.update': function(patient,name,age,disease) {
    return Patients.update(patient._id,{$set:{name:name,age:age,disease:disease}});
  },
 
  'patients.remove': function(patient) {
    return Patients.remove(patient);
  }

});

export const Patients = new Mongo.Collection('patients');
