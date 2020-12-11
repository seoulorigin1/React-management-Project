import logo from './logo.svg';
import './App.css';
import React from 'react'
import Customer from './components/Customer';

const customerData = [
  {
    id: 1,
    name: 'Kim',
    date: '19/10/22',
    coment: 'Hello!'
  },
  {
    id: 2,
    name: 'Lee',
    date: '20/04/21',
    coment: 'World!'
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        {
          customerData.map(people => {
            return (
              <Customer 
                id={people.id}
                name={people.name}
                date={people.date}
                coment={people.coment}
              />
            );
          })
        }
      </div>
      );
  }
}

export default App;
