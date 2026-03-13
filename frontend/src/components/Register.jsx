import { useState } from "react";

export default function Register({ api }) {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [role,setRole] = useState("USER")

  const submit = async(e)=>{

    e.preventDefault()

    const res = await fetch(api+"/auth/register",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({
        name,
        email,
        password,
        role
      })

    })

    if(res.ok){
      alert("Registered Successfully")
    }else{
      alert("Register failed")
    }

  }

  return(

    <div className="roleCard">

      <h2>Register</h2>

      <button
        className="adminBtn"
        onClick={()=>setRole("ADMIN")}
      >
        Register as Admin
      </button>

      <button
        className="userBtn"
        onClick={()=>setRole("USER")}
      >
        Register as User
      </button>

      <br/><br/>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={submit}>
        Register
      </button>

    </div>

  )

}