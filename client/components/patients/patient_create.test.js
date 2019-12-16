import React from 'react';
import { shallow,mount } from 'enzyme';
import PatientCreate from './patients_create'
// import { mockFn } from '../../../.meteorMocks';


// console.log(props);

describe('<PatientCreate />', () => {


  let wrapper;

  beforeEach(() => {
      //  wrapper = shallow(<PatientList {...props} />) ;
       wrapper = mount(<PatientCreate/>) ;
  });

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find({ "data-test": val });
  };

  test("renders with a create button", () => {
    const button = findByTestAttr(wrapper, "create-button");
    expect(button.length).toBe(1);
  });

  test("create button has a click event", () => {
    const button = findByTestAttr(wrapper, "create-button");
    button.simulate('click');
});

  });
