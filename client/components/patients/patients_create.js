import React,{Component} from 'react'
import propType from'prop-types'
import { background } from '@storybook/theming';
import { color } from '@storybook/addon-knobs';

function Patients_Create(props){
   let nameInput=React.createRef();
   let ageInput=React.createRef();
   let diseaseInput=React.createRef();
    const cratePatient=(e)=>{
        e.preventDefault()
        const name=nameInput.current.value
        const age=ageInput.current.value
        const disease=diseaseInput.current.value
        // Meteor.call('patients.insert', name, age,disease);
        props.cratePatient('patients.insert', name, age,disease);
    }
   const ClearText=()=>{
        document.getElementsByName("name")[0].value = ''
        document.getElementsByName("age")[0].value = ''
        document.getElementsByName("disease")[0].value = ''
    }
        return(
            <div className="patient-container">
           <div className="item">
           <form onSubmit={cratePatient} className="create-patient">
            <div className="child-item">         
                 Name: <input type="text"  name="name" ref={nameInput}></input>
            </div>
            <div className="child-item">         
            Age: <input type="text" name="age" ref={ageInput}></input>
            </div>
            <div className="child-item">         
            Disease: <input type="text" name="disease" ref={diseaseInput}></input>
            </div>
            <div className="child-item">         
            <button data-test="create-button" type="submit">Create</button>
            </div>
        </form> 
        <button data-test="clear-button" type="submit" onClick={ClearText}>Clear</button>
        <a href="/" style={{ backgroundColor:"lightred"}} >Close</a>
        </div>
    </div>
        )
}

Patients_Create.propType={
    cratePatient:propType.func
  }

export default Patients_Create