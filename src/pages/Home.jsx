import React from 'react'
import { useState, useEffect } from "react";
import Client from './../models/Client';
import SalePoint from './../models/SalePoint';
import Transaction from './../models/Transaction';
import {  Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from './../context/UserAuthContextProvider';
import Nav from './../components/Nav';



function Home() {

    const [clients, setClients] = useState(0);
    const [salePoints, setSalePoints] = useState(0);
    const [agents, setAgents] = useState(0);
    const [transactions, setTransactions] = useState(0);
    const [registeredInTheWeek, setRegisteredInTheWeek] = useState(0);
    
    
    useEffect(()=>{
      // Client.getAll()
      // .then((results)=>
      // {
      //   setClients(results)
      //   console.log(results)
      // } );
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
      // );

      

      return ()=>{
        
      }
      
  
  
      
    }, [])
  return (
   <div>
    
    {/* //     <a href="#empty" onClick={handleLogout} >Logout</a> 
    //   <h2>nombre de client  : {clients}</h2>
    //   <h2>nombre de point de vente : {salePoints }</h2>
    //   <h2>nombre d'agents : {agents }</h2>
    //   <h2>nombre de transactions du jour : {transactions }</h2>
    //   <h2>nombre d'inscrits de la semaine : {registeredInTheWeek }</h2> */}






     <Nav/>

      <main className="main-content">
        <div className="container-fluid">
            <div className="section--title">
                <div>
                    <h2>BO Cash ECO</h2>
                    <p>Bienvenue sur le dashboard, Cash ECO.</p>
                </div>

                <div>
                    <a href="#empty">
                        <button className="btn--form">
                            <i className="fas fa-users"></i> &nbsp;
                            Voir la liste des clients
                        </button>
                    </a>
                </div>
            </div>
        
            <div className="section-owl">
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="card--owl">
                            <p>Nombre total de clients</p>
                            <h2>15.000</h2>

                         
                            <span>-15%</span>
                        </div>
                    </div>

                    <div className="item">
                        <div className="card--owl">
                            <p>Nombre total de clients</p>
                            <h2>15.000</h2>
                        </div>
                    </div>
                </div>
            </div>
       
            <p>Liste des 10 Derniers transactions : 12 Mars 2022</p>
      
            <div className="table-responsive" >
                <table className="table table-striped table-borderless tableAllVersement" id="example">
                    <thead>
                      <tr>
                        <th scope="col">ID Transaction</th>
                        <th scope="col">Point de vente</th>
                        <th scope="col">Agent</th>
                        <th scope="col">Type de transaction</th>
                        <th scope="col">Montant</th>
                        <th scope="col">Commission générée</th>
                        <th scope="col">Date & heure</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CE-155</td>
                            <td>Treichville</td>
                            <td>Karim Allou</td>
                            <td>Orange Mobile Money</td>
                            <td>25 000 Fcfa</td>
                            <td>250 Fcfa</td>
                            <td>10-03-2022 11 : 05 : 25</td>
                        </tr>
                   
                        <tr>
                            <td>CE-155</td>
                            <td>Treichville</td>
                            <td>Karim Allou</td>
                            <td>Orange Mobile Money</td>
                            <td>25 000 Fcfa</td>
                            <td>250 Fcfa</td>
                            <td>10-03-2022 11 : 05 : 25</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>

    
    </div>
  )
}

export default Home