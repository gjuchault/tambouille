import firebase from 'firebase/app';
import 'firebase/database';
import uuid from 'uuid';

firebase.initializeApp({
  apiKey: 'AIzaSyCL1QCLlTfJVlfnILETo2HZ5Hv8YEo3Aqg',
  authDomain: 'tambouille-af68c.firebaseapp.com',
  databaseURL: 'https://tambouille-af68c.firebaseio.com',
  projectId: 'tambouille-af68c',
  storageBucket: 'tambouille-af68c.appspot.com',
  messagingSenderId: '626971325552',
});
const db = firebase.database();

export default () => next => (action) => {
  if (!action.method) {
    return next(action);
  }

  if (action.method === 'set') {
    const id = uuid.v4();
    return db.ref(id).set({ ...action.payload, id });
  }

  return false;
};
