import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'

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
      <Greet name="Jomar Granada" messageCount={30} isLoggedIn={false} />
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
