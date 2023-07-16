import { useState } from 'react';
function SendData(props){

    const item = props.item;
    const [count, setCount] = useState(0);

    return (
        <>
        <h3>Iterate more elements</h3>
        <div>
            id: {item.id} &nbsp; name: {item.name}
        </div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

export default SendData;