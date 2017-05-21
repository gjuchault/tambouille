export const get = () => ({
  type: 'GET',
  method: 'get',
});

export const add = data => ({
  type: 'ADD',
  method: 'set',
  payload: data,
});

export const remove = id => ({
  type: 'REMOVE',
  method: 'remove',
  payload: id,
});
