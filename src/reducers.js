import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { createSelector } from 'reselect';

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SUCCESS':
      return action.payload;
    case 'ADD_SUCCESS':
      return { ...state,
        [action.payload.id]: { ...action.payload },
      };
    case 'REMOVE_SUCCESS': {
      const { [action.payload]: removed, ...newState } = state;
      return newState;
    }
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'GET_SUCCESS':
      return Object.keys(action.payload);
    case 'ADD_SUCCESS':
      return [...state, action.payload.id];
    case 'REMOVE_SUCCESS':
      return state.filter(id => id !== action.payload);
    default:
      return state;
  }
};

const tambouilles = combineReducers({
  byId,
  allIds,
});

const app = combineReducers({
  tambouilles,
  form,
});

export default app;

export const getAll = createSelector(
  state => state.tambouilles.byId,
  state => state.tambouilles.allIds,
  (memById, memAllIds) => memAllIds.map(id => memById[id]),
);
