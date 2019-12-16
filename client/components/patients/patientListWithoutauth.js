import React, { Component,useState,useEffect } from 'react';

function Patients_List(props){

  const [patients,setPatients]=useState([{}])

  useEffect(() => {
      if(!props.patients){
        setPatients([{}])
      }else{
        setPatients(props.patients) 
      }
      
}, [props.patients])

const renderPatients=()=> {
    return patients.map(patient => {
    //   const url = `/patients/${patient._id}`;

      return (
        <tr key={patient._id}>
          <td>{patient.name}</td>
          <td>
            {patient.age}
          </td>
          <td>
            {patient.disease}
          </td>
          <td>
            <div className="pull-right">
            <button disabled
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
      <div>
                  <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
              <a className="navbar-brand" href="/"> <span role="img" aria-lael="house-imoji">&#127968;</span> </a>
                {/* <a className="navbar-brand" href="/patient">Create Patient</a> */}
              </div>
              <div className="navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
    <a href="/login">{props.currentUser?'':'Login'}</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
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
    </div>
    );

}
export default Patients_List


