function Blog(props){

    const shoot = () => {
        alert("Great Shot!");
      }
    
    const display = (blog_data)=>{
        console.log("blog data: ", blog_data)
    }

    const find_event = (x,y)=>{
        console.log("event type: ", y.type)
        console.log("msg: ", x)
    }

    return  <>
            {/* <h1>I am {props.blog_name} </h1> */}
            <button onClick={shoot}>click</button>
            <br></br>
            <button onClick={()=> display(props.blog_data) }>click data</button>
            <br></br>
            <button onClick={(event)=> find_event("Hello", event) }>check event</button>
            </>
}

export default Blog;