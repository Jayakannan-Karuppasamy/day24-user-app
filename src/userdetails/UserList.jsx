import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
//import { useTheme } from '@emotion/react';
import { Fab } from '@mui/material';

import UserCard from './UserCard';

const UserList = () => {

    const [users, setUsers] = useState([]);
    //   const theme = useTheme();

    const removeUser = (userEmailId) => {
        const id = users.find(({ emailId }) => emailId === userEmailId).id;
        console.log('remove id ::' + id)
        setUsers(users.filter(({ emailId }) => emailId !== userEmailId));

        fetch(`https://6427e972161067a83b032ea6.mockapi.io/online-user/onlineuser/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    useEffect(() => {
        fetch('https://6427e972161067a83b032ea6.mockapi.io/online-user/onlineuser')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((e) => { console.log('Error in API call ::', e) });
        console.log('Mounting Called');
    }, []);

    return (
        <>
            {console.log('User List', users)}
            <Link to={'/user-app/addUser'}>
                <Fab
                    color="primary"
                    aria-label="add"
                    style={{
                        position: 'absolute',
                        top: '80px',
                        right: '10px'
                    }}
                    onClick={() => undefined}
                >
                    <AddIcon color="secondary" />
                </Fab>
            </Link>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                {
                    users.map(({ id, username, photo, country, contactnumber, gender, emailId }) => (
                        <UserCard
                            id={id}
                            username={username}
                            country={country}
                            emailId={emailId}
                            gender={gender}
                            contactnumber={contactnumber}
                            photo={photo}
                            key={id}
                            removeUser={removeUser}
                        />
                    ))
                }
            </div>
        </>

    )
}

export default UserList;