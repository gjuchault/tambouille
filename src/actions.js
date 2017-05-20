export const get = () => ({
  type: 'GET',
  method: 'get',
});

export const add = data => ({
  type: 'ADD',
  method: 'set',
  payload: data,
});
