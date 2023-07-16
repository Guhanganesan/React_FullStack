import SendData from './Page1';

function Example({name, courses, data}){

    const list_items = courses.map( (course) => <li> {course} </li>)

    const items = [
        {id: 1, name: 'bread'},
        {id: 2, name: 'milk'},
        {id: 3, name: 'eggs'}
      ];
    
      
    return (

        <>
            <h2>Example</h2>
            <h3>Name: {name}</h3>
            <h3>Courses: </h3>
            <ul>
                  {/* {list_items} */}
                  {courses.map( (course, index) => <li key={index}> {course} </li>)}
            </ul>

            <h3>Data: </h3>

            <table>
                {
                    data.map(
                        el => <tr><td>{el.id}</td> <td>{el.name}</td><t>{el.mobile}</t></tr>
                    )
                }
            </table>

            <h1>Grocery List</h1>
            <ul>
                {items.map((item) => <li key={item.id}>{item.name}</li>)}
            </ul>

            <ul>
                {list_items}
            </ul>

            <div>

            {/* <SendData ></SendData>
            <SendData ></SendData> */}

            {
                items.map( (item) => <div> <SendData item={item} /> </div> )
            }
            </div>
            
            
        </>
        
    ); 
     
}

export default Example;