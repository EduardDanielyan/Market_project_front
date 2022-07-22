import { useEffect } from 'react';
import socketIOClient from 'socket.io-client'


function Chat() {
    useEffect(() => {
        const socket = socketIOClient("http://localhost:3000")
        socket.on("FromAPI", (data) => {
            console.log(data);
        })
        socket.emit('H1', { data: "Edo" })
    }, [])
    //emit uxarkum e harcum , on vercnum e harcum@//
    return (
        <>
            <div
                className="chat">
                <h1
                    className="prodH1">Chat</h1>
            </div>

        </>
    )
}

export default Chat