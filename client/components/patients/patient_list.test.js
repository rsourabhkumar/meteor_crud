import React from 'react';
import { shallow, mount } from 'enzyme';
import PatientList from './patients_list'
import {props} from '../../../.meteorMocks/PatientListdefaultprops'


// console.log(props);

describe('<PatientList />', () => {


    let wrapper;

    beforeEach(() => {
        //  wrapper = shallow(<PatientList {...props} />) ;
         wrapper = mount(<PatientList {...props}  />) ;
    });

    const findByTestAttr = (wrapper, val) => {
      return wrapper.find({ "data-test": val });
    };

    test("renders with a table", () => {

      const Patietnlisttable = findByTestAttr(wrapper, "Patient-table");
      expect(Patietnlisttable.length).toBe(1);
    });

    it('render patientList component correctly with patients and loading props', () => {  
        
// console.log(wrapper.prop('patients'));
expect(wrapper.prop('patients')).toHaveLength(2);
expect(wrapper.prop('loading')).toBe(false);
});

});

  
  