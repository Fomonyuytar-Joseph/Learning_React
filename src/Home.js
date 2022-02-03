import { useState } from 'react'
import BlogList from './BlogList';

const Home = () =>{
   const [blogs, setBlogs] = useState([
       {title:'My new website', body:"global wraming in the world" , author:'Joeboy', id:1},
       {title:'let talk food', body:"fufu and eru is good" , author:'jordan', id:2},
       {title:'My new documetary', body:"the changes in the economy" , author:'joeboy', id:3},
   ])
      const handleDelete=(id)=>{
          const newBlogs= blogs.filter((blog)=> blog.id !==id);
          setBlogs(newBlogs)
      }

    return(
     <div className="home">
      <BlogList  blogs={blogs} title="All Blogs " handleDelete={handleDelete}/>
      
        
      
     </div>
    );
}

export default Home