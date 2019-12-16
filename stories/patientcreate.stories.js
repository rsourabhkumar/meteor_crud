import React from 'react';
import { storiesOf } from '@storybook/react';
import PatientCreate from '../client/components/patients/patients_create';

storiesOf('Components', module)
  .add('CreatePatient Component', () => (
    <PatientCreate/>
  ))
 

