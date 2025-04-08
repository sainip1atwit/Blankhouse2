import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'
import FormData from 'form-data';
import { BASE_URL} from '../config'

export const AuthContext = createContext();

let API_ADDRESS = "http://10.220.35.215:3000";

const apiClient = axios.create({
    baseURL: API_ADDRESS,
    headers: {
        "Content-Type": "application/json"
    }

});

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    // registers
    const [newUsername, setNewUsername] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [newName, setNewName] = useState(null);


    const requestOptions = {
        method: "POST",
        body: FormData,
        redirect: "follow"
    };

    const handleRegister = async (personName, username, password) => {
        setIsLoading(true);

        let data = {
            personName: personName,
            username: username,
            password: password
        }

        await apiClient.post("/register", data).then((res) => {
            console.log(res.data)
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
        });
    }
    
    const handleLogin = async (username, password) => {
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`)
        
        setIsLoading(true);
        let data = {
            username: username, 
            password: password
        }

        await apiClient.post("/login", data).then((res) => {
            console.log(res.data.token);
            setUserToken(res.data.token);
            AsyncStorage.setItem("userToken", res.data.token);
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
        });
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
        <AuthContext.Provider value={{ handleLogin, handleRegister, logout, isLoading, userToken, newUsername, setNewUsername, newPassword, setNewPassword, newName, setNewName }}>
            {children}
        </AuthContext.Provider>
    );
}