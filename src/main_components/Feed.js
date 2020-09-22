import React, {useState, useEffect} from 'react'
import './Feed.css'
import StoryReel from'./StoryReel'
import MessageSender from './MessageSender';
import Post from './Post'
import db from '../firebase/firebase'



function Feed() {
    const[posts, setPosts] = useState([]);
    useEffect(() =>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data : doc.data()})))
        ))
    }, [])
    return (
        <div className= "feed">
     
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (

                <Post 
                    key = {post.id}
                    profilePic= {post.data.profilePic} 
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

            {/* profilePic = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ricky_Ponting_2015.jpg/260px-Ricky_Ponting_2015.jpg"
                message = "Woah This is Amazing!"
                timestamp = 'This is a timestamp'
                username = "Rickey Ponting"
                image = "https://imageresizer.static9.net.au/XG9_mjTwXTjfVtDzQX23SdWccMM=/0x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F6a06edcb-2c41-4e12-825e-211c087ab2f5"
            />
            <Post  
                profilePic = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ricky_Ponting_2015.jpg/260px-Ricky_Ponting_2015.jpg"
                message = "Woah This is Amazing!"
                timestamp = 'This is a timestamp'
                username = "Rickey Ponting"
                image = "https://imageresizer.static9.net.au/XG9_mjTwXTjfVtDzQX23SdWccMM=/0x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F6a06edcb-2c41-4e12-825e-211c087ab2f5"
            />
            <Post  
                profilePic = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ricky_Ponting_2015.jpg/260px-Ricky_Ponting_2015.jpg"
                message = "Woah This is Amazing!"
                timestamp = 'This is a timestamp'
                username = "Rickey Ponting"
                image = "https://imageresizer.static9.net.au/XG9_mjTwXTjfVtDzQX23SdWccMM=/0x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F6a06edcb-2c41-4e12-825e-211c087ab2f5"
            /> <Post  */}
                
         

    
        </div>
    )
}

export default Feed
