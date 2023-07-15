function SendData(props){
    console.log(props.item)
    const item = props.item;
    return (
        <>
        <h3>Iterate more elements</h3>
        <div>
            id: {item.id} &nbsp; name: {item.name}
        </div>
        </>
    )
}

export default SendData;