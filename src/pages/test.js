import React from 'react';

const people = [
  {
    albumId: 1,
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    albumId: 1,
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    albumId: 1,
    name: 'George',
    age: 34,
  }
];

function App() {
  return (
    <div>
      {people.filter(person => person.albumId === 1).map(filteredPerson => (
        <li>
          {filteredPerson.name}
        </li>
      ))}
    </div>
  );
}

export default App;