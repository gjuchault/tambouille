export const get = () => ({
  type: 'GET',
  method: 'get',
});

export const add = data => ({
  type: 'ADD',
  method: 'add',
  payload: data,
});

export const update = data => ({
  type: 'UPDATE',
  method: 'update',
  payload: data,
});

export const remove = id => ({
  type: 'REMOVE',
  method: 'remove',
  payload: id,
});
