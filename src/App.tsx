import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input';
import { Container } from './components/Container'

function App() {
  const personName= {
    first: 'Yae',
    last: 'Miko',
  }

  const nameList=[
    {
      first: 'Ayaka',
      last: 'Kamisato',
    },
    {
      first: 'Yoimiya',
      last: 'Naganohara',
    },
    {
      first: 'Eula',
      last: 'Lawrence',
    }
  ]
  return (
    <div className="App">
      <Greet name="Jomar Granada" isLoggedIn={false} />
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Jomar Granada!</Heading>
      </Oscar>
      <Button handleClick= {(event, id) => {console.log('Button clicked', event, id)}}/>
      <Input value='' handleChange= {(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem'}}/>
    </div>
  );
}

export default App;
