import './App.css';
import { useState, useEffect } from "react";
import Client from './models/Client';
import SalePoint from './models/SalePoint';
import Transaction from './models/Transaction';
import { Timestamp } from 'firebase/firestore';
function App() {

  const [clients, setClients] = useState([]);
  const [salePoints, setSalePoints] = useState([]);
  const [agents, setAgents] = useState([]);
  const [transactions, setTransactions] = useState([]);
  
  useEffect(()=>{
    Client.getAll()
    .then((results)=> setClients(results));

    Client.getAgents()
    .then((results)=> setAgents(results));

    SalePoint.getAll()
    .then((results)=> setSalePoints(results));

    // Transaction.getAllTransactionsOfTheDay()
    // .then((results)=> setTransactions(results));


    let date = new Date();
    

    var startOfToday = new Date(); 
    startOfToday.setHours(0,0,0,0);
    var endOfToday = new Date(); 
    endOfToday.setHours(23,59,59,999);
    ref.where('created_at','>=',startOfToday).where('created_at', '<=', endOfToday)
    
  }, [])

  return (
    <div className="App">
      <div>
        nombre de clients : {clients && clients.length} <br />
        nombre de pdv : {salePoints && salePoints.length} <br />
        nombre d'agent : {agents && agents.length} <br />
        {/* nombre de transaction du jour : {transactions && transactions.length} <br /> */}
     
      </div>
    </div>
  );
}

export default App;
