export const SET = 'USER/SET';
export const REMOVE = 'USER/REMOVE';

export const setUser = (name) => {
  return {
    type: SET,
    payload: name
  }
}

export const removeUser = () => {
  return {
    type: REMOVE
  }
}

