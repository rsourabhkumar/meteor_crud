import React, { Component,useState,useEffect } from 'react';
import propType from'prop-types'

function Patients_List(props){

  const [isAuthenticated,setuser]=useState(props.currentUser !== null)
  const [patients,setPatients]=useState([{}])

  useEffect(() => {
      if(props.patients.length==0){
        setPatients([{}])
      }else{
        setPatients(props.patients) 
      }
      
}, [props.patients])

  const onPatientRemove=(patient)=> {
    // Meteor.call('patients.remove', patient);
    props.patientRemove(patient);
  }

const renderPatients=()=> {
    return patients.map(patient => {
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
              onClick={() =>onPatientRemove(patient)}>
              Remove
            </button>
            </div>
          </td>
        </tr>
      );
    });
  }
    // if (!this.props.patients) { return <div data-test="loading-div" className="loading">Loading...</div>; }
    return (
      <table data-test="Patient-table" className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Disease</th>
        </tr>
      </thead>
      <tbody>
        {renderPatients()}
        {console.log(patients)}
      </tbody>
    </table>
    );

}
Patients_List.propType={
  patients:propType.array,
  loading:propType.bool,
  patientRemove:propType.func,
  currentUser:propType.object
}

export default Patients_List


