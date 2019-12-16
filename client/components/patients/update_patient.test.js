import React from 'react';
import { shallow,mount } from 'enzyme';
import UpdatePatient from './update_patient'
import {props} from '../../../.meteorMocks/PatientUpdatedefaultprops'


describe('<Updatepatient />', () => {


  let wrapper;
  beforeEach(() => {
    //  wrapper = shallow(<PatientList {...props} />) ;
     wrapper = mount(<UpdatePatient {...props}  />) ;
});

const findByTestAttr = (wrapper, val) => {
  return wrapper.find({ "data-test": val });
};

  test("renders with a update button", () => {
    const button = findByTestAttr(wrapper, "update-button");
    expect(button.length).toBe(1);
  });

  test("Update button has a click event", () => {
    const button = findByTestAttr(wrapper, "update-button");
    button.simulate('click');
    
  });

  it('render updatePatient component correctly with patient and loading props', () => {  
      
// console.log(wrapper.prop('patients'));
// expect(wrapper.prop('patient')).toHaveLength(2);
expect(wrapper.prop('loading')).toBe(false);
});

});


  