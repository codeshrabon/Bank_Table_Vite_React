import axios from 'axios';

const ALL_USER_REST_API_URL = 'http://localhost:8080/api/bank/all';

class UserServises{
    getAllUsers(){
        return axios.get(ALL_USER_REST_API_URL);
    }

}

export default new UserServises();