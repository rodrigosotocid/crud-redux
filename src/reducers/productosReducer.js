// Cada Reducer tiene su propio STATE
const initialState = {
  productos: [],
  error: null,
  loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}