/* develblock:start */
import { Meteor as importedMeteor }     from 'meteor/meteor';
import { Mongo as importedMongo } from 'meteor/mongo';
import {Tracker as importedTracker} from  'meteor/tracker'
import { withTracker as importedwithTracker } from 'meteor/react-meteor-data';
/* develblock:end */

let Meteor;
if(typeof importedMeteor === 'undefined') {
    Meteor = {
  users: {
    findOne: ()=>{},
    find: ()=>{},
  },
  methods:()=>{},
};
}
else {
    Meteor = importedMeteor;
}

export {
    Meteor,
};


let Mongo;
if(typeof importedMongo === 'undefined') {
    Mongo = {
        Collection: (() => ({
          _ensureIndex: (()=>{}),
        })),
      };;
}
else {
    Mongo = importedMeteor;
}

export {
    Mongo,
};

let Tracker;
if(typeof importedTracker === 'undefined') {
    Tracker = {};
}
else {
    Tracker = importedTracker;
}

export {
    Tracker,
};

let withTracker;
if(typeof importedwithTracker === 'undefined') {
    withTracker = {};
}
else {
    withTracker = importedwithTracker;
}

export {
    withTracker,
};