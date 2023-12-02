import { useRef, useState } from "react"

export const Inputs = (props) => {
    const [username, setUsername] = useState()
    const [message, setMessage] = useState()
    let fileRef = useRef()

    const ndate = () => {
        const ndate = new Date()
        return(ndate.getHours() + ":" + ndate.getMinutes() + " | ")
    }

    return(
        <form
        onSubmit={(event) => {
            event.preventDefault()
            if (!username || !message) {
                return;
            } else if (fileRef.current.files.length >= 1) {
                props.push({username: username, message: message, time: ndate(), file: fileRef.current.files[0].name})
            } else {
                props.push({username: username, message: message, time: ndate()})
            }
            


            setMessage("")
        }}
        >
            <input
                placeholder="Ім'я"
                name="username"
                value={username}
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />
            <input
                placeholder="Повідомлення"
                name="message"
                value={message}
                onChange={(event) => {
                    setMessage(event.target.value)
                }}
            />
            <input type="file" ref={fileRef}/>
            <button type="submit">Send</button>
        </form>
    )
}