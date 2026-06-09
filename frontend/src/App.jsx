import { useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import Leaves from "./components/Leaves";
import AdminDashboard from "./components/AdminDashboard";

import "./App.css";

// const API = "http://localhost:8086/api";
const API = "https://leave-management-system-2-51ku.onrender.com/api";

function App(){

const[token,setToken] = useState(null);
const[user,setUser] = useState(null);
const[page,setPage] = useState("home");

const logout = ()=>{
setToken(null)
setUser(null)
setPage("home")
}

if(token){

return(

<div>

<div className="topBar">

<h2>Welcome {user?.name}</h2>

<button className="logoutBtn" onClick={logout}>
Logout
</button>

</div>

{user?.role==="ADMIN"
? <AdminDashboard api={API} token={token}/>
: <Leaves api={API} token={token} user={user}/>
}

</div>

)

}

return(

<div className="container">

<div className="left">

<div className="title">

LEAVE<br/>
MANAGEMENT<br/>
SYSTEM

</div>

<button
className="mainBtn"
onClick={()=>setPage("login")}
>
Login
</button>

<button
className="mainBtn"
onClick={()=>setPage("register")}
>
Register
</button>

</div>

<div className="right">

{page==="login" &&
<Login
api={API}
onLogin={(t,u)=>{
setToken(t)
setUser(u)
}}
/>
}

{page==="register" &&
<Register api={API}/>
}

</div>

</div>

)

}

export default App;