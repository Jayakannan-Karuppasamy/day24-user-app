import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Box
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AddUser() {

    const { id } = useParams();

    console.log('User ID', id);

    const [UserData, setUserData] = useState({
        id: '',
        username: '',
        photo: '',
        country: 'India',
        contactnumber: '',
        gender: 'Male',
        emailId: ''
    });


    // single function to handle all the states
    const handleState = (name, value) => {
        setUserData({
            ...UserData,
            [name]: value
        })
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(UserData);
        if (id) {
            fetch('https://6427e972161067a83b032ea6.mockapi.io/online-user/onlineuser/' + id, {
                method: 'PUT',
                body: JSON.stringify(UserData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        } else {
            fetch('https://6427e972161067a83b032ea6.mockapi.io/online-user/onlineuser', {
                method: 'POST',
                body: JSON.stringify(UserData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        setUserData({
            id: '',
            username: '',
            photo: '',
            country: 'India',
            contactnumber: '',
            gender: 'Male',
            emailId: ''
        });
    }

    useEffect(() => {
        if (id)
            fetch('https://6427e972161067a83b032ea6.mockapi.io/online-user/onlineuser/' + id)
                .then(response => response.json())
                .then(userData => {
                    setUserData(userData);
                });
    }, [id]);

    return (

        <Box
            m={3} // 3 * (1rem/2)
            display={'flex'}
        >
            {console.log(UserData)}
            <form onSubmit={handleSubmit} >
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    name="username"
                    label="User Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    color='secondary'
                    required
                    size='small'
                    // defaultValue={currMovie?.title || ''}
                    value={UserData.username}
                    onChange={(e) => {
                        handleState('username', e.target.value)
                    }}
                />
                <TextField
                    id="photo"
                    name="photo"
                    label="User photo"
                    type="text"
                    fullWidth
                    variant="standard"
                    color='secondary'
                    required
                    size='small'
                    value={UserData.photo}
                    onChange={(e) => {
                        handleState('photo', e.target.value)
                    }}
                />

                <TextField
                    id="emailId"
                    name="emailId"
                    label="Email Id"
                    type="text"
                    fullWidth
                    variant="standard"
                    color='secondary'
                    required
                    size='small'
                    value={UserData.emailId}
                    onChange={(e) => {
                        handleState('emailId', e.target.value)
                    }}
                />

                <TextField
                    id="contactnumber"
                    name="contactnumber"
                    label="Contact Number"
                    type="text"
                    fullWidth
                    variant="standard"
                    color='secondary'
                    required
                    size='small'
                    value={UserData.contactnumber}
                    onChange={(e) => {
                        handleState('contactnumber', e.target.value)
                    }}
                />
                <FormControl
                    variant="standard"
                    fullWidth
                    color="secondary"
                    sx={{
                        mt: 1
                    }}
                >
                    <InputLabel id="country">Country</InputLabel>
                    <Select
                        labelId="country"
                        id="country"
                        value={UserData.country}
                        onChange={(e) => {
                            handleState('country', e.target.value)
                        }}
                        label="Country"
                        name='country'
                        required
                        fullWidth
                    >
                        <MenuItem value={'India'}>India</MenuItem>
                        <MenuItem value={'Canada'}>Canada</MenuItem>
                        <MenuItem value={'Australia'}>Australia</MenuItem>
                    </Select>
                </FormControl>
                <FormControl
                    required
                    color="secondary"
                    sx={{
                        mt: 1
                    }}
                >
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="gender"
                        name="gender"
                        row
                        value={UserData.gender}
                        onChange={(e) => {
                            handleState('gender', e.target.value)
                        }}
                    >
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    </RadioGroup>
                </FormControl>

                <div style={{
                    display: 'flex', flex: 'row',
                    alignContent: 'center',
                    justifyItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Button
                        type="submit"
                        variant='contained'
                        color='primary'
                        sx={{
                            m: 2
                        }}
                    >{UserData.id ? 'Edit' : 'Add'}</Button>

                    <Link
                        to={'/'}
                        style={{ textDecoration: 'none', position: 'relative', margin: '16px' }}
                    >

                        <Button
                            variant='contained'
                            // component attribute/props
                            color='primary'
                            fullWidth

                        >
                            Back
                        </Button>
                    </Link>

                </div>

            </form>
        </Box >
    );


}