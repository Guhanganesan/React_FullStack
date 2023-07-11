function Blog(props){

    const shoot = () => {
        alert("Great Shot!");
      }
    
    const display = (blog_data)=>{
        console.log("blog data: ", blog_data)
    }

    return  <>

            {/* <h1>I am {props.blog_name} </h1> */}
            <button onClick={shoot}>click</button>
            <br></br>
            <button onClick={()=> display(props.blog_data) }>click data</button>

            </>
}

export default Blog;