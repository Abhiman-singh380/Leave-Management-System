import { useState,useEffect } from "react";

export default function AdminDashboard({api}){

const[leaves,setLeaves]=useState([])

const loadLeaves=async()=>{

const res=await fetch(api+"/leaves/all")

const data=await res.json()

setLeaves(data)

}

useEffect(()=>{
loadLeaves()
},[])

const approve=async(id)=>{

await fetch(api+"/leaves/approve/"+id,{
method:"PUT"
})

loadLeaves()

}

const reject=async(id)=>{

await fetch(api+"/leaves/reject/"+id,{
method:"PUT"
})

loadLeaves()

}

return(

<div className="dashboard">

<h2>Admin Dashboard</h2>

<table>

<thead>

<tr>
<th>User</th>
<th>From</th>
<th>To</th>
<th>Reason</th>
<th>Status</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{leaves.map(l=>(

<tr key={l._id}>

<td>{l.userId}</td>
<td>{l.fromDate}</td>
<td>{l.toDate}</td>
<td>{l.reason}</td>
<td>{l.status}</td>

<td>

<button
className="approveBtn"
onClick={()=>approve(l._id)}
>
Approve
</button>

<button
className="rejectBtn"
onClick={()=>reject(l._id)}
>
Reject
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}