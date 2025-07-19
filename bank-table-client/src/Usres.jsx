/* import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/bank/all')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {{users.map(user => (

                    <li key={user.id}>{user.account_name}</li>
                ))}}
            </ul>
        </div>
    );
};

export default Users;
 */