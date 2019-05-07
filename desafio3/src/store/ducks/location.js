/**
 * Types
 */

export const Types = {
  ADD_GEOLOCAL_REQUEST: 'geolocal/ADD_REQUEST',
  ADD_GEOLOCAL_SUCCESS: 'geolocal/ADD_REQUEST',
  ADD_GEOLOCAL_FAILURE: 'geolocal/ADD_REQUEST',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  lat: null,
  long: null,
  loading: false,
  error: null,
};

export default function geoLocal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_GEOLOCAL_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_GEOLOCAL_SUCCESS:
      return {
        ...state,
        loading: false,
        lat: action.payload.lat,
        long: action.payload.long,
        error: null,
      };
    case Types.ADD_GEOLOCAL_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addGeolocalRequest: local => ({
    type: Types.ADD_GEOLOCAL_REQUEST,
    payload: { local },
  }),
  addGeolocalSuccess: data => ({
    type: Types.ADD_GEOLOCAL_SUCCESS,
    payload: { data },
  }),
  addGeolocalFailure: error => ({
    type: Types.ADD_GEOLOCAL_FAILURE,
    payload: { error },
  }),
};
