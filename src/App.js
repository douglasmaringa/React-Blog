import React, { useState,useEffect} from "react";
import Post from "./Post"
import Side from "./Side"
import Bar from './Bar'
import Head from './Head'
import Image from './Image'
import Error from './Error'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { db } from "./Firebase";
import "./App.css"


function App(){
const[posts,setPosts]=useState([])
const[input,setInput]= useState("")
  const[code,setCode]=useState(["1234", "0000", "2468"])

  var valid = false;

  for (var i=0; i <code.length; i++)
  {
    if ((input == code[i]))
  {
        valid = true;
  }

}

useEffect(()=>{
  db.collection('posts').onSnapshot((snapshot)=>{
    setPosts(snapshot.docs.map((doc)=>doc.data()))
  
})
},[])
  return (
    <div className="App">
   <Head/>
   <Grid container spacing={4}>
     <Grid item xs={3}>
          <Paper ><Side/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper >{posts.map((post,id)=>(
  <Post name={post.name} text={post.caption} image={post.imgUrl} time={post.serverTimestamp}/>
))}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper ><Bar/></Paper>
        </Grid>
        </Grid>
        <br/>
        <br/>
        <br/>
        <p>Enter code to post article</p>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="Place"
          placeholder="ENTER SECRET CODE"
        />
        {valid ? <Image/> : <Error/>}
     </div>
  );
}

export default App;
