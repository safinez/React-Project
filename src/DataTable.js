import React, { useState } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function DataTable({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Vérifier si data est défini avant de filtrer les données
  const filteredData = data ? data.filter(breed =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Life Span</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(breed => (
            <tr key={breed.id}>
              <td>{breed.name}</td>
              <td>{breed.life_span}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
