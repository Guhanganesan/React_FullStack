function Example({name, courses, data}){

    const list_items = courses.map( (course) => <li> {course} </li>)
    
    return (

        <>
            <h2>Example</h2>
            <h3>Name: {name}</h3>
            <h3>Courses: </h3>
            <ul>
                  {/* {list_items} */}
                  {courses.map( (course) => <li> {course} </li>)}
            </ul>

            <h3>Data: </h3>

            <table>
                {
                    data.map(
                        el => <tr><td>{el.id}</td> <td>{el.name}</td><t>{el.mobile}</t></tr>
                    )
                }
            </table>
           
        </>
        
    ); 
     
}

export default Example;