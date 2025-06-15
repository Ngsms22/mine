function Message( ) {
    //jsx
    const name ="Sebastien"
    if(name)
        return <h1>This is an {name}</h1>
    return <h1>This is a message</h1>;
}

export default Message;