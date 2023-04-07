import React, { useEffect, useState } from 'react';

//import EditIcon from '@mui/icons-material/Edit';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
const User = () => {

    const theme = useTheme();

    const [UserData, setUserData] = useState({
        id: '',
        username: '',
        photo: '',
        country: 'India',
        contactnumber: '',
        gender: 'M',
        emailId: ''
    });

    const { userId } = useParams(); // will always be string

    useEffect(() => {
        console.log('userId :', userId);
        if (UserData.id !== userId)
            fetch('https://6427e972161067a83b032ea6.mockapi.io/online-user/onlineuser/' + userId)
                .then(response => response.json())
                .then(UserData => setUserData(UserData))
    })

    return (
        <div style={{
            // width: '100%',
            margin: 8,
            textAlign: 'left',
            border: '1px solid grey',
            position: 'relative',
            fontFamily: 'sans-serif',
            fontSize: 4,
            padding: 4
        }} >
            <img src={UserData.photo} alt={UserData.username} style={{ height: '300px', width: '100%', objectFit: 'contain' }} />
            <Typography variant="h5" noWrap style={{
                textAlign: 'center'
            }}>{UserData.username}</Typography>

            <Typography variant="h5" sx={{
                color: theme.palette.primary.main
            }}>Gender:{UserData.gender}</Typography>

            <Typography variant="h5" sx={{
                color: theme.palette.primary.main
            }}>Country:{UserData.country}</Typography>

            <Typography variant='h5' sx={{
                color: theme.palette.primary.main
            }}> Email Id: {UserData.emailId}</Typography>
            <Typography variant='h5' sx={{
                color: theme.palette.primary.main
            }}>Contact Number: {UserData.contactnumber} </Typography>


            <Link
                to={'/'}
                style={{ textDecoration: 'none' }}
            >

                <Button
                    variant='contained'
                    // component attribute/props
                    color='primary'
                    fullWidth
                    sx={{
                        // css property color
                        color: 'white',
                    }}
                >
                    Back
                </Button>
            </Link>
        </div >


    )
}

export default User;