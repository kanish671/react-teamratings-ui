import axios from 'axios';
import apiConfig from '../config/apiConfig';

class teamService {
	static getAllTeams = () => {
		return axios.get(apiConfig.getAllTeams);
	}
}

export default teamService;