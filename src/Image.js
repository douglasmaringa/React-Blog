import React,{useState} from 'react'
import { db,storage } from "./Firebase";
import firebase from "firebase"

function Image() {

const allInputs={imgUrl:''}
const[imageAsFile,setImageAsFile]= useState("")
const[imageAsUrl,setImageAsUrl]= useState(allInputs)
const[caption,setCaption]= useState("")
const[name,setName]= useState("")

const handleImageAsFile=(e)=>{
    const image = e.target.files[0]
    setImageAsFile(imageFile=>(image))
}
const handleFireBaseUpload=e=>{
    e.preventDefault()
    console.log('start of upload')
    if(imageAsFile==''){
        console.error("not an image")
    }
    const uploadTask =storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    uploadTask.on('state_changed',(snapShot)=>{
        console.log(snapShot)
    },(err)=>{
        console.log(err)
    },()=>{
        storage.ref('images').child(imageAsFile.name).getDownloadURL().then(firebaseUrl=>{
            db.collection('posts').add({
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                caption,
                name,
                imgUrl:firebaseUrl,
            })
            setImageAsUrl(prevObject=>({prevObject,imgUrl:firebaseUrl}))
        })
    })
}


    return (
        <div>
            <textarea cols="10" rows="5" placeholder="name" value={name} onChange={(e)=> setName(e.target.value)}></textarea>
            <textarea cols="40" rows="5" placeholder="caption" value={caption} onChange={(e)=> setCaption(e.target.value)}></textarea>
            <form onSubmit={handleFireBaseUpload}>
                <input type="file" onChange={handleImageAsFile}/>
                <button>upload</button>
            </form>
        </div>
    )
}

export default Image
