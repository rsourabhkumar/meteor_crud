import React,{Component} from 'react'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import  {Patients}  from '../../../imports/collections/patient';
class Update_patient extends Component{
    nameInput=React.createRef();
    ageInput=React.createRef();
    diseaseInput=React.createRef();
    updatePatient=(e)=>{
        e.preventDefault()
        const name=this.nameInput.current.value
        const age=this.ageInput.current.value
        const disease=this.diseaseInput.current.value
        Meteor.call('patients.upadate', this.props.patient ,name, age,disease);
    }
    render(){
        if (!this.props.patient) { return <div>Loading...</div>; }
        return(
            <div>
        <form onSubmit={this.updatePatient} className="update-patient">
            <div>
            <br/>
                 Name: <input type="text" value={this.props.patient.name} name="name" ref={this.nameInput}></input><br/>
                 Age: <input type="text" name="age" value={this.props.patient.age} ref={this.ageInput}></input><br/>
                 Disease: <input type="text" name="disease" value={this.props.patient.disease} ref={this.diseaseInput}></input><br/>
                 <button type="submit">Update</button>
            </div>
        </form> 
            </div>
        )
    }
}
// export default Update_patient

export default withTracker((props) => {
    const patientId =props.match.params.patientId
    const patientsHandle = Meteor.subscribe('patients');
    const loading = !patientsHandle.ready();
    const list = Patients.findOne(patientId);
    const listExists = !loading && !!list;
    return {
      loading,
      list,
      listExists,
      patient: listExists ? list: [],
    };
  })(Update_patient);