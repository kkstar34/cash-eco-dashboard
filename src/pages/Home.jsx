import React from 'react'
import { useState, useEffect } from "react";
import Client from './../models/Client';
import SalePoint from './../models/SalePoint';
import Transaction from './../models/Transaction';



function Home() {

    const [clients, setClients] = useState(0);
    const [salePoints, setSalePoints] = useState(0);
    const [agents, setAgents] = useState(0);
    const [transactions, setTransactions] = useState(0);
    const [registeredInTheWeek, setRegisteredInTheWeek] = useState(0);
    
    useEffect(()=>{
      Client.getAll()
      .then((results)=>
      {
        setClients(results)
        console.log(results)
      } 
      
      // );
      // Client.getAgents()
      //     .then((results)=> setAgents(results));
      
      // SalePoint.getAll()
      // .then((results)=> setSalePoints(results));
  
      // Transaction.getAllTransactionsOfTheDay()
      // .then((results)=>
      
      // { setTransactions(results);  console.log(results) }
      
      // );

      
      // Client.getRegisteredInTheWeek()
      // .then((results)=> 
      // {
      //   setRegisteredInTheWeek(results) 
      //   console.log(results)
      // }   
      );

      return ()=>{
        
      }
      
  
  
      
    }, [])
  return (
    <div>Home
      <h2>nombre de client  : {clients}</h2>
      <h2>nombre de point de vente : {salePoints }</h2>
      <h2>nombre d'agents : {agents }</h2>
      <h2>nombre de transactions du jour : {transactions }</h2>
      <h2>nombre d'inscrits de la semaine : {registeredInTheWeek }</h2>
    </div>
  )
}

export default Home