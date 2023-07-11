function Blog(props){

    const shoot = () => {
        alert("Great Shot!");
      }

    return  <>

            <h1>I am {props.blog_name} </h1>
            <button onClick={shoot}>Take the shot!</button>
            </>
}

export default Blog;