import React from 'react';
import Header from './Header';
import DataContainer from './DataContainer';
import DataTable from './DataTable';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header title="Dog Breeds" />
      <DataContainer />
      <DataTable />

    </div>
  );
}

export default App;
