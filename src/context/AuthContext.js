import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useState, useEffect } from 'react';
import formdata from 'form-data'
import { BASE_URL} from '../config'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
        };

    const handleRegister = async (personName, username, password) => {
        
        console.log(`personName ${personName}`);
        console.log(`username ${username}`);
        console.log(`password ${password}`);

        const formdata = new FormData();
        formdata.append("personName", personName);
        formdata.append("username", username);
        formdata.append("password", password);

        fetch("http://192.168.4.149:3000/register", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }
    
    const handleLogin = async (username, password) => {
        setIsLoading(true);
        const formdata = new FormData();
        formdata.append("username", username);
        formdata.append("password", password);

        fetch("http://192.168.4.149:3000/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            let resultToken = result.token;
            if(resultToken) {
                setUserToken(result.token);
            }
            console.log(result.token);
        })
        .catch((error) => console.error(error));
        AsyncStorage.setItem('userToken', userToken);
        setIsLoading(false); 
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
        <AuthContext.Provider value={{ handleLogin, handleRegister, logout, isLoading, userToken }}>
            {children}
        </AuthContext.Provider>
    );
}