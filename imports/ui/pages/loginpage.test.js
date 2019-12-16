import React from 'react';
import { shallow,mount } from 'enzyme';
import LoginPage from './LoginPage'

// console.log(props);

describe('<LoginPage />', () => {


  let wrapper;

  beforeEach(() => {
      //  wrapper = shallow(<PatientList {...props} />) ;
       wrapper = mount(<LoginPage />) ;
  });

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find({ "data-test": val });
  };

  test("renders with a Login form", () => {
    const loginFrom = findByTestAttr(wrapper, "login-form");
    expect(loginFrom.length).toBe(1);
  });

  test("renders with a login button", () => {
    const button = findByTestAttr(wrapper, "login-button");
    expect(button.length).toBe(1);
  });

  test("login button has a click event", () => {
    const button = findByTestAttr(wrapper, "login-button");
    button.simulate('click');
    
  });


});

  
 