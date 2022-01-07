import { useState } from 'react'

const Home = () =>{
   const [blogs, seTblogs] = useState([
       {title:'My new website', body:"global wraming in the world" , author:'Joeboy', id:1},
       {title:'let talk food', body:"fufu and eru is good" , author:'jordan', id:2},
       {title:'My new documetary', body:"the changes in the economy" , author:'karen', id:3},
   ])

    return(
     <div className="home">
      {
          blogs.map((blog) => (
              <div className="blog-preview" key={blog.id}>
                  <h2>{blog.title}</h2>
                  <p>Wriiten by {blog.author}</p>
              </div>
          ))
      }  
        
      
     </div>
    );
}

export default Home