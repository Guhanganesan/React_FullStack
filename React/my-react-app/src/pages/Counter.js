
function CountValue({ setCount, count }){

    return (
        <>
        <h3>Count Values:</h3>
        <p>Count: {count} </p>
        <button onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

export default CountValue;