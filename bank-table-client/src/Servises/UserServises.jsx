import axios from 'axios';

const ALL_USER_REST_API_URL = 'http://localhost:8080/api/bank/all';

class UserServises{
    getAllUsers(){ 

        var response= axios.get(ALL_USER_REST_API_URL);
        console.log(response);
        return response.data;
    }

}

export default new UserServises();