import { useState,useEffect } from "react";

export default function Leaves({api,user}){

const[fromDate,setFromDate]=useState("")
const[toDate,setToDate]=useState("")
const[reason,setReason]=useState("")
const[leaves,setLeaves]=useState([])

const loadLeaves=async()=>{

const res=await fetch(api+"/leaves/all")

const data=await res.json()

const myLeaves=data.filter(l=>l.userId===user._id)

setLeaves(myLeaves)

}

// useEffect(()=>{
// loadLeaves()
// },[])

useEffect(() => {
  loadLeaves();
}, [api, user]);

const apply=async()=>{

await fetch(api+"/leaves/apply",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
userId:user._id,
fromDate,
toDate,
reason
})

})

setFromDate("")
setToDate("")
setReason("")

loadLeaves()

}

return(

<div className="dashboard">

<h2>Apply Leave</h2>

<input
placeholder="From Date"
value={fromDate}
onChange={e=>setFromDate(e.target.value)}
/>

<input
placeholder="To Date"
value={toDate}
onChange={e=>setToDate(e.target.value)}
/>

<input
placeholder="Reason"
value={reason}
onChange={e=>setReason(e.target.value)}
/>

<button onClick={apply}>
Apply
</button>

<h3>Leave History</h3>

<table>

<thead>
<tr>
<th>From</th>
<th>To</th>
<th>Reason</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{leaves.map(l=>(

<tr key={l._id}>

<td>{l.fromDate}</td>
<td>{l.toDate}</td>
<td>{l.reason}</td>
<td>{l.status}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}