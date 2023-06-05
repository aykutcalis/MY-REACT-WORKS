import React from 'react'
import {useState} from 'react'
type UserType={
    name:string,
    email:string,
    phone:string,
}


function LoginCheck() {
    const [user, setUser] = useState<UserType | null>({} as UserType)

    const handleLogin=()=>{
setUser({
    name:'Can',
    email:'cc@hotmail.com',
    phone:'5555555555',
})
    }
    const handleLogout=()=>{
        setUser({} as UserType);
    };
  return (
    <div>
        <button onClick={handleLogin}>Giriş yap</button>
        <button onClick={handleLogout}>Çkış yap</button>
    <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
    </div>
    
    </div>
  )
}

export default LoginCheck