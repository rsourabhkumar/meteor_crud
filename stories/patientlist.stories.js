import React from 'react';
import { storiesOf } from '@storybook/react';
import { text,array,object } from '@storybook/addon-knobs';
import PatientList from '../client/components/patients/patients_list';
import {props} from '../.meteorMocks/PatientListdefaultprops'

storiesOf('Components', module)
  // .add('PatientList Component', () => (
  //   <PatientList {...props}/>
  // ))

  .add('PatientList Component', () => {
    // let prop1,name,age,disease;
    // for(let i=0; i<props.patients.length; i++){
    //    name = text('Name', props.patients[i].name);
    //    age = text('Age', props.patients[i].age);
    //    disease = text('Disease', props.patients[i].disease); 
    //    prop1={ loading: false, patients:[{name,age,disease}]}
    // }
    return (
      <PatientList
        {...props}
      />
    );
  });
 

