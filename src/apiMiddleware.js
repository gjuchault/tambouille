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

export default ({ dispatch }) => next => (action) => {
  if (!action.method) {
    return next(action);
  }

  dispatch({
    type: `${action.type}_REQUEST`,
  });

  if (action.method === 'get') {
    return db.ref().once('value').then((snap) => {
      dispatch({
        type: `${action.type}_SUCCESS`,
        payload: snap.val(),
      });
    });
  }

  if (action.method === 'set') {
    const id = uuid.v4();
    return db.ref(id).set({ ...action.payload, id }).then(() => {
      dispatch({
        type: `${action.type}_SUCCESS`,
        payload: { ...action.payload, id },
      });
    });
  }

  return false;
};
