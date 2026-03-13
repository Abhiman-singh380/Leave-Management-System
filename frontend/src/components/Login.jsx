import { useState } from "react";

export default function Login({api,onLogin}){

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[role,setRole]=useState("USER")

const submit=async(e)=>{

e.preventDefault()

const res=await fetch(api+"/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password,
role
})

})

if(res.ok){

const data=await res.json()

onLogin(data.token,data.user)

}else{

alert("Login failed")

}

}

return(

<div className="roleCard">

<h2>Choose Login Role</h2>

<button
className="adminBtn"
onClick={()=>setRole("ADMIN")}
>

Admin Login

</button>

<button
className="userBtn"
onClick={()=>setRole("USER")}
>

User Login

</button>

<br/><br/>

<input
placeholder="Email"
value={email}
onChange={e=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={e=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={submit}>
Login
</button>

</div>

)

}