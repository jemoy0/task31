import { useState } from "react"
import { Inputs } from "./inputs"
import { Message } from "./message"
import "./index.css"

export const Chat = () => {
    const [messageArr, setMessageArr] = useState([])

    const push = (obj) => {
        setMessageArr((pv) => [...pv, obj]);
    };

    return(
        <>    
            <div className="chatWindow">
                {messageArr.map((item, index) => (
                    <Message key={index} time={item.time} username={item.username} message={item.message} file={item.file}/>
                ))} 
            </div>
            <Inputs push={push}></Inputs>
        </>
    )
}