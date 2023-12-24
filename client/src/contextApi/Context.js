import React, { useContext } from 'react';
import jwt_decode from 'jwt-decode';
const AppContext = React.createContext();
const token = localStorage.getItem("blog_token") ? localStorage.getItem("blog_token") : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const userid = jwt_decode(token);
const data = {
    currentuserid: userid?.id
}
const AppProvider = ({ children }) => {
    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
}

const useGlobalContextApi = () => {
    return useContext(AppContext);

}
export { AppContext, AppProvider, useGlobalContextApi };