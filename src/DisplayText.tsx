import React from 'react'

interface Props {
    firstName: string;
    lastName: string;
    nickName: string;
    age: number;
}

const DisplayText: React.FC<Props> = (props) => {

const {firstName, lastName, nickName, age} = props
const consoleThis = () => {
    console.log(`I'm ${firstName} ${lastName}...some people call me ${nickName}. I'm ${age} years old.`)
}
return (
    <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{nickName}</p>
        <p>{age}</p>
        <button onClick={consoleThis}>Click Me!</button>
    </div>
)
}

export default DisplayText;