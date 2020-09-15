import React, {useState} from 'react';
import DisplayText from './DisplayText'
import './App.css';



const App: React.FC = () => {
  const [first, setFirst] = useState<string>('')
  const [last, setLast] = useState<string>('')
  const [nick, setNick] = useState<string>('')
  const [age, setAge] = useState<number>(0)

  return (
    <div className="App">
      <input placeholder='First Name' value={first} onChange={(e) => setFirst(e.target.value)} />
      <input placeholder='Last Name' value={last} onChange={(e) => setLast(e.target.value)} />
      <input placeholder='Nickname' value={nick} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNick(event.target.value)} />
      <input placeholder='Age' value={age} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAge(parseInt(event.target.value))} />
      <DisplayText age={age} firstName={first} lastName={last} nickName={nick} />
    </div>
  )
}

export default App;
