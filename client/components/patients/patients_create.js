import React,{Component} from 'react'
// import Patients from '../../../imports/collections/patient'
class Patients_Create extends Component{
    nameInput=React.createRef();
    ageInput=React.createRef();
    diseaseInput=React.createRef();
    cratePatient=(e)=>{
        e.preventDefault()
        // Patients.insert({
        //     createdAt:new Date(),
        //     name:this.nameInput.current.value,
        //     age:this.ageInput.current.value,
        // disease:this.diseaseInput.current.value})
        const name=this.nameInput.current.value
        const age=this.ageInput.current.value
        const disease=this.diseaseInput.current.value
        Meteor.call('patients.insert', name, age,disease);
    }
    render(){
        return(
            <div>
        <form onSubmit={this.cratePatient} className="create-patient">
            <div>
            <br/>
                 Name: <input type="text" name="name" ref={this.nameInput}></input><br/>
                 Age: <input type="text" name="age" ref={this.ageInput}></input><br/>
                 Disease: <input type="text" name="disease" ref={this.diseaseInput}></input><br/>
                 <button type="submit">Create</button>
            </div>
        </form> 
            </div>
        )
    }
}
export default Patients_Create