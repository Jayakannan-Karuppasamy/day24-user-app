import * as React from 'react';

// External package Imports 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

//custom module import
import './App.css';
import PrimarySearchAppBar from './userdetails/Layout';
import AddUser from './userdetails/AddUser';
import UserList from './userdetails/UserList';
import User from './userdetails/User';


const customTheme = createTheme({
  palette: {
    primary: {
      main: '#87D9B3',
    },
    secondary: {
      main: '#010101',
    }
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          borderRadius: 0
        },
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      {/**
       * Design an UI to implement the CRUD // CRUD - Create,Read,Update,Delete 
       * // Dashboard 
       * // List Users - /users 
       * // Create User - /create-user 
       * // Edit User - /edit-user/:id 
       * // profile - /profile/:id 
       * // edit-profile – /edit-profile/:id
      */}
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrimarySearchAppBar />}>
              <Route index element={<UserList />} />
              <Route path="/user-app/:userId" element={<User />} />
              <Route path="/user-app/addUser" element={<AddUser />} />
              <Route path="/user-app/editUser/:id" element={<AddUser />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
