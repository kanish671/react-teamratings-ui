import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default function teamReducer(state = initialState.teams, action){
  switch (action.type) {
	  case types.LOAD_TEAMS_SUCCESS:
	  return action.teams;

	  case types.CREATE_TEAMS_SUCCESS:
	  return[
	      ...state, Object.assign({}, action.team)
	  ];
	  case types.UPDATE_TEAMS_SUCCESS:
	  return[
	      ...state.filter(team => team. id !== action.team.id ), Object.assign({}, action.team)
	  ];

	  default: 
	  return state;
  }
}