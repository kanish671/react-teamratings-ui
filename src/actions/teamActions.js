import * as types from './actionTypes';
import teamService from '../services/teamService';
import { beginAjaxCall } from './ajaxStatusActions';


export function loadTeamsSuccess(teams) {
  return {
    type: types.LOAD_TEAMS_SUCCESS,
    teams
  };

}

export function loadTeams() {
    return function (dispatch) {
      dispatch(beginAjaxCall());
      return teamService.getAllTeams()
        .then(teams => {
          dispatch(loadTeamsSuccess(teams));
        }).catch(error => {
          throw (error);
        });
    };

}

export function updateTeamSuccess(team) {
    return {
      type: types.UPDATE_TEAMS_SUCCESS,
      team
    };
  
  }

  export function createTeamSuccess(team) {
    return {
      type: types.CREATE_TEAMS_SUCCESS,
      team
    };
  
  }


export function saveTeam(team){
   return function(dispatch, getState){
    dispatch(beginAjaxCall());
       return teamService.saveTeam(team).then(savedTeam => {
          team.id  ? dispatch(updateTeamSuccess(savedTeam)) : dispatch(createTeamSuccess(savedTeam));
       }).catch(error => {
           throw(error);
       });
   };
}