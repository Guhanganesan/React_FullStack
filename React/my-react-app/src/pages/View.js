
function View(){

    const emp_id = window.sessionStorage.getItem("employee_id");
    const emp_name = window.sessionStorage.getItem("employee_name");
    const emp_age = window.sessionStorage.getItem("employee_age");
    const emp_mobile = window.sessionStorage.getItem("employee_mobile");
    console.log(emp_id);
    console.log(emp_name);
    console.log(emp_age);
    console.log(emp_mobile);

    return (
        <>
            <p>Id: {emp_id}</p>
            <p>Name: {emp_name}</p>
            <p>Age: {emp_age}</p>
            <p>Mobile: {emp_mobile}</p>
        </>
    )
}

export default View;