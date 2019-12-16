import React from 'react';
import { storiesOf } from '@storybook/react';
import { text,array,object } from '@storybook/addon-knobs';
import PatientUpdate from '../client/components/patients/update_patient';
import {props} from '../.meteorMocks/PatientUpdatedefaultprops'

storiesOf('Components', module)
 
  .add('PatientUpdate Component', () => {
    const name = text('Name', props.patient.name);
    const age = text('Age', props.patient.age);
    const disease = text('Disease', props.patient.disease);
    const prop1={loading: false, patient:{name,age,disease}}
    return (
      <PatientUpdate
        {...prop1}
      />
    );
  });