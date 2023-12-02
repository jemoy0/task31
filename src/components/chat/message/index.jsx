export const Message = (props) => {

    return(
        <p>
            <span>{props.time}</span>
            <span>{props.username}: </span>
            <span>{props.message} </span>
            <div>{props.file}</div>
        </p>
    )
}