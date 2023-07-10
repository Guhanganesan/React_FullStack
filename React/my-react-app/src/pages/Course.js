function Course(props){
    const courses = props.courses;
    console.log(courses)
    const listItems = courses.map((course) =>
        <li>{course}</li>
    );
    return (

        <>
            <h2>Courses</h2>
            <ul>{listItems}</ul>
        </>
        
    ); 
     
}

export default Course;