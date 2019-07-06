import React, { useState } from 'react';
import './App.css';
import Form from "./Form";
import Quotation from "./Quotation";
import Counters from './Counters';
import DataDisplay from './DataDisplay';
import Todos from './Reducer';
import AppRouter from './AppRouter';

const App = () => {
  const [showQuotation, setShowQuotation] = useState(true);
  return (
    <div className="App" >
      <AppRouter />
      <br/>
      <hr/>
      <br/>
      <Form />
      <hr />
      <br />
      <button onClick={() => setShowQuotation(!showQuotation)} >Toggle Quotation</button>
      <br />
      {showQuotation && <Quotation />}
      <hr />
      <br />
      <Counters />
      <hr />
      <br />
      <DataDisplay />
      <hr />
      <br />
      <Todos />      
    </div>
  );
}

export default App;