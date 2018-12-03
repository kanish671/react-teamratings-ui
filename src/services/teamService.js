import axios from 'axios';

class teamService {
	static getAllTeams = () => {
		return axios.get('http://localhost:8080/service/ratings/team/getrating?teamId=1&matchId=1');
	}
}

export default teamService;