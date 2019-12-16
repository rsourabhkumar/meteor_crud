import React,{useState,useEffect} from 'react'
import propType from'prop-types'

function Update_patient(props){

    const [patient,setPatient]=useState({name:'',age:'',disease:''})

    useEffect(() => {
        if(!props.patient){
            setPatient({ ...patient, name:'', age:'', disease: '' })
        }else{
            setPatient({ ...patient, name: props.patient.name, age: props.patient.age, disease: props.patient.disease }) 
        }
        
	}, [props.patient])

    let nameInput=React.createRef();
   let ageInput=React.createRef();
   let diseaseInput=React.createRef();
     const updatePatient=(e)=>{
        e.preventDefault()
        const name=nameInput.current.value
        const age=ageInput.current.value
        const disease=diseaseInput.current.value
        // Meteor.call('patient.update', props.patient ,name, age,disease);
        props.updatePatient('patient.update', props.patient ,name, age,disease)
        props.history.push('/');
    }
        return(
            <div className="patient-container">
            <div className="item">
            <form onSubmit={updatePatient} className="create-patient">
             <div className="child-item">         
                  Name: <input type="text" defaultValue={patient.name}  name="name" ref={nameInput}></input>
             </div>
             <div className="child-item">         
             Age: <input type="text" defaultValue={patient.age} name="age" ref={ageInput}></input>
             </div>
             <div className="child-item">         
             Disease: <input type="text" defaultValue={patient.disease} name="disease" ref={diseaseInput}></input>
             </div>
             <div className="child-item">         
             <button data-test="update-button" type="submit">Update</button>
                 {console.log(patient)}
             </div>
         </form> 
         {/* <a href="/" style={{backgroundColor:label}} >&times;</a> */}
         </div>
     </div>
        )
}

Update_patient.propType={
    patient:propType.object,
    loading:propType.bool,
    updatePatient:propType.func
  }

export default Update_patient
