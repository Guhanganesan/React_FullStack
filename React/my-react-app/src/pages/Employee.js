function Employee(props){
    const details = props.data;
    console.log(details)

    const sendData = (item) => {

        console.log(item)
        window.sessionStorage.setItem("employee_id", item.id);
        window.sessionStorage.setItem("employee_name", item.name);
        window.sessionStorage.setItem("employee_age", item.age);
        window.sessionStorage.setItem("employee_mobile", item.mobile);
        window.location.href="/view"
      }

    const rowItems = details.map((item) =>
            <tr key={item.key}> 
                <td onClick={() => sendData(item)}>{item.name}</td>
                <td onClick={() => sendData(item)}>{item.age}</td>
                <td onClick={() => sendData(item)}>{item.mobile}</td>
            </tr>
    );
    return (

        <>
            <h2>Employee Details</h2>
            <div className="container">
                <div className="row">

                    <div className="col-sm-6">
                        <table className="table table-bordered">
                            {rowItems}
                        </table>
                    </div>

                </div>

            </div>
           
        </>
        
    ); 
     
}

export default Employee;