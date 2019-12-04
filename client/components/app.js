import React,{Component} from 'react';
import Header from './header'
import Patients_Create from'./patients/patients_create'
import Patients_List from'./patients/patients_list'
import Update_patient from'./patients/update_patient'
import {BrowserRouter, Route,Switch} from 'react-router-dom'

class App extends Component{
  render(){
    return (
      // <div>
      //   <Header />
      //   {/* <Patients_List/> */}
      //   {/* <Patients_Create/> */}
      //   <Update_patient/>
      //   Hello Patient
      // </div>
       <div>
       <BrowserRouter>
         <Header/>
         <Switch>
           <Route exact path="/" component={Patients_List}/>
           <Route exact path="/patient" component={Patients_Create}/>
       <Route exact path="/patients/:patientId" component={Update_patient} />)}/>
   </Switch>
   </BrowserRouter>
     </div>
    );
  }
}
export default App