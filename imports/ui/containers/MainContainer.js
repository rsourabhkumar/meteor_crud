import { withTracker } from 'meteor/react-meteor-data';
import patientList from '../../../client/components/patients/patients_list'
import containpatientlist from '../../../client/components/container/containpatientlist'


export default MainContainer = withTracker((params) => {
    const currentUser = Meteor.user();
    return {
        currentUser,
    };
  })(containpatientlist);