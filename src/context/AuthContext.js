import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'
import FormData from 'form-data';

export const AuthContext = createContext();

const API_ADDRESS = "http://192.168.4.149:3000";

const apiClient = axios.create({
    baseURL: API_ADDRESS,
    headers: {
        "Content-Type": "application/json"
    }

});

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    // registers
    const [newUsername, setNewUsername] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [newName, setNewName] = useState(null);
    const [newProfilePic, setNewProfilePic] = useState(null);
    const [newBio, setNewBio] = useState(null);
    const [newInstagream, setNewInstagram] = useState(null);


    const requestOptions = {
        method: "POST",
        body: FormData,
        redirect: "follow"
    };

    // check for duplicate username
    const checkUsername = async (username) => {
        let isValid = true;
        const data = {
            username
        };
        try {
            const res = await apiClient.post("/check-users", data);
            const message = res.data.message;
            if (message === 'User already exists!') {
                isValid = false;
            } 
        } catch (err) {
            console.error(err);
        }
        return isValid;
    }

    // create a user
    const handleRegister = async (personName, username, password) => {
        setIsLoading(true);
      
        const data = {
          personName,
          username,
          password
        };
      
        try {
          const res = await apiClient.post("/register", data);
          setIsLoading(false);
          return true;
        } catch (err) {
          console.log(err);
          setIsLoading(false);
          return false;
        }
      };
      
    
    const handleLogin = async (username, password) => {
        let response = '';

        setIsLoading(true);
        let data = {
            username: username, 
            password: password
        }

        await apiClient.post("/login", data).then((res) => {
            if (res.data.token) {
                response = 'valid';
                setUserToken(res.data.token);
                AsyncStorage.setItem("userToken", res.data.token);
            } else {
                response = res.data.message;
            }
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
        });
        return response;
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            setIsLoading(false);
        } catch (err) {
            console.log(`Login error: ${err}`);
        }
    }

    useEffect(() => {

    }, []);

    return (
        <AuthContext.Provider value={{ 
            checkUsername, 
            handleLogin, 
            handleRegister, 
            logout, 
            isLoading, 
            userToken, 
            newUsername, 
            setNewUsername, 
            newPassword, 
            setNewPassword, 
            newName, 
            setNewName }}>
            {children}
        </AuthContext.Provider>
    );
}