import React,{useState,useEffect} from 'react';
const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout:()=>{},
    inLogin:(email,password) => {}
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    
  useEffect(()=>{
    const storeData = localStorage.getItem('isLoggedIn');
    if(storeData === '1'){
      setIsLoggedIn(true)
    }
      },[])

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    };

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn','1')
        setIsLoggedIn(true)
    }

    return<AuthContext.Provider value={{isLoggedIn:isLoggedIn,onLogout:logoutHandler,onLogin:loginHandler}}>{props.children}</AuthContext.Provider>
}
export default AuthContext;