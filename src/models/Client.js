

import {collection, where } from 'firebase/firestore';
import db from '../config/firebaseConfig';
import { query } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

class Client {

    

     static getFirstDayOfWeek(d) {
        let date = new Date(d);
        const day = date.getDay(); 
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
      }
      

    static async getAll(){
        const q = query(collection(db, "users"));
        let querySnapshot = await getDocs(q);
        let size = querySnapshot.size;
        // const clientTab = [];
        // for(let i = 0; i < querySnapshotArray.length;i++) {
        //     clientTab.push(querySnapshotArray[i].data());
        // }
        // return clientTab;
        return size;
    }

    static async getAgents(){
        const q = query(collection(db, "users"), where('admin_document', '!=', ''));
        let querySnapshot = await getDocs(q);
        let querySnapshotArray = querySnapshot.docs;
        // const agentTab = [];
        // for(let i = 0; i < querySnapshotArray.length;i++) {
        //     agentTab.push(querySnapshotArray[i].data());
        // }
        return querySnapshotArray.length;

    }

    static async getRegisteredInTheWeek(){
        let t = new Date();
        t = t.setHours(0, 0, 0, 0);
        let firstDayOfTheWeek = this.getFirstDayOfWeek(t);
        let lastDayOfTheWeek = new Date(firstDayOfTheWeek);
        lastDayOfTheWeek.setDate(firstDayOfTheWeek.getDate()+6);
        const q = query(collection(db, "users"), where("created_at",'>=',firstDayOfTheWeek), where('created_at', '<=', lastDayOfTheWeek));
        let querySnapshot = await getDocs(q);
        let querySnapshotArray = querySnapshot.docs;
        // const clientTab = [];
        // for(let i = 0; i < querySnapshotArray.length;i++) {
        //     clientTab.push(querySnapshotArray[i].data());
        // }


        return querySnapshotArray.length;


    }

}

export default Client;