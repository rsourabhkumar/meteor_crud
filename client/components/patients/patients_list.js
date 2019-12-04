import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import  {Patients}  from '../../../imports/collections/patient';
import { Link } from 'react-router-dom';
import {Tracker} from  'meteor/tracker'

class Patients_List extends Component {
  onPatientRemove(patient) {
    Meteor.call('patients.remove', patient);
  }

renderPatients() {
    return this.props.patients.map(patient => {
      const url = `/patients/${patient._id}`;

      return (
        <tr key={patient._id}>
          <td><a href={url}>{patient.name}</a></td>
          <td>
            {patient.age}
          </td>
          <td>
            {patient.disease}
          </td>
          <td>
            <div className="pull-right">
            <button
              className="btn btn-danger"
              onClick={() => this.onPatientRemove(patient)}>
              Remove
            </button>
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    if (!this.props.patients) { return <div>Loading...</div>; }
    return (
      <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Disease</th>
        </tr>
      </thead>
      <tbody>
        {this.renderPatients()}
        {/* {console.log(this.props.patients)} */}
        {console.log(this.props.patients)}
      </tbody>
    </table>
    );

   
  }
}

// export default withTracker(() => {
//   Meteor.subscribe('patients');
//     return {
//       patients: Patients.find({}).fetch(),
//     };
//   })(Patients_List);

  export default withTracker(() => {
    const patientsHandle = Meteor.subscribe('patients');
    const loading = !patientsHandle.ready();
    const list = Patients.find({}).fetch();
    const listExists = !loading && !!list;
    return {
      loading,
      list,
      listExists,
      patients: listExists ? list: [],
    };
  })(Patients_List);


  // export default withTracker(() => {
  //   Meteor.subscribe('patients');
  //     return Tracker.autorun(()=>{Patients.find({}).fetch() })
  //   })(Patients_List);

    // export default withTracker(() => {
    //     return Tracker.autorun(()=>{
    //       Meteor.subscribe('patients');
    //     return Patients.find({}).fetch() })
    //   })(Patients_List);
