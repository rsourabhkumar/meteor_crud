import React from 'react';
import { shallow,mount } from 'enzyme';
import SignupPage from './SignupPage'


// console.log(props);

describe('<SignupPage />', () => {


  let wrapper;

  beforeEach(() => {
      //  wrapper = shallow(<PatientList {...props} />) ;
       wrapper = mount(<SignupPage/>) ;
  });

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find({ "data-test": val });
  };

  test("renders with a signup form", () => {
    const loginFrom = findByTestAttr(wrapper, "signup-form");
    expect(loginFrom.length).toBe(1);
  });

  test("renders with a signup button", () => {
    const button = findByTestAttr(wrapper, "signup-button");
    expect(button.length).toBe(1);
  });

  test("signup button has a click event", () => {
    const button = findByTestAttr(wrapper, "signup-button");
    button.simulate('click');
    
  });

});

  
  