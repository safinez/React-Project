import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function DataContainer() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => setBreeds(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Search for Dog Breeds</h2>
      {breeds && <DataTable data={breeds} />}
    </div>
  );
}

export default DataContainer;
