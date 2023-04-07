import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const UserCard = ({ id, username, photo, country, contactnumber, gender, emailId, removeUser }) => {

    const theme = useTheme();

    return (
        <div style={{
            width: '300px',
            margin: 8,
            textAlign: 'center',
            border: '1px solid grey',
            position: 'relative',
            fontFamily: 'sans-serif',
            fontSize: 2
        }}>

            <Link to={`/user-app/editUser/${id}`} >
                <span
                    style={{
                        position: 'absolute',
                        top: '40px',
                        right: '10px',
                        cursor: 'pointer'
                    }}
                    onClick={() => undefined}
                >
                    <EditIcon
                        color="primary"
                    />
                </span>
            </Link>

            <span
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer'
                }}
                onClick={() => removeUser(emailId)}
            >
                <DeleteIcon
                    color="primary"
                />
            </span>


            <img src={photo} alt={username} style={{ height: '278px', width: '230px' }} />

            <Typography variant="h5" noWrap sx={{
                color: theme.palette.secondary.main,
                textAlign: 'center'
            }}>{username}</Typography>

            <Typography variant="h5" sx={{
                color: '#6bafa0',
                textAlign: 'left',
                padding: '4px'
            }}>{gender}</Typography>

            <Typography variant="h5" sx={{
                color: '#6bafa0',
                textAlign: 'left',
                padding: '4px'
            }}>{country}</Typography>

            <Typography variant='h5' sx={{
                color: '#6bafa0',
                textAlign: 'left',
                padding: '4px'
            }}> {emailId}</Typography>
            <Typography variant='h5' sx={{
                color: '#6bafa0',
                textAlign: 'left',
                padding: '4px'
            }}> {contactnumber} </Typography>
            <Link
                to={`/user-app/${id}`}
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
                    View
                </Button>
            </Link>

        </div>
    )
}


export default UserCard;