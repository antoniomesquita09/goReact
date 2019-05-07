/**
 * Types
 */

export const Types = {
  ADD_USER_REQUEST: 'user/ADD_REQUEST',
  ADD_USER_SUCCESS: 'user/ADD_SUCCESS',
  ADD_USER_FAILURE: 'user/ADD_FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
        error: null,
      };
    case Types.ADD_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addUserRequest: user => ({
    type: Types.ADD_USER_REQUEST,
    payload: { user },
  }),
  addUserSuccess: data => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { data },
  }),
  addUserFailure: error => ({
    type: Types.ADD_USER_FAILURE,
    payload: { error },
  }),
};
