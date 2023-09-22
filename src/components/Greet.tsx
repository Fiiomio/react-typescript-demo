type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return (
        <div>
            {
                props.isLoggedIn ? <h1>Hello ${props.name} you currently have ${props.messageCount} unread messages.</h1> :
                <h1>Hello World</h1>
            }

        </div>
    )
}