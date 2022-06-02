

import {collection, where } from 'firebase/firestore';
import db from '../config/firebaseConfig';
import { query } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

class Client {

    

    static async getAll(){
        const q = query(collection(db, "users"));
        let querySnapshot = await getDocs(q);
        let querySnapshotArray = querySnapshot.docs;
        const clientTab = [];
        for(let i = 0; i < querySnapshotArray.length;i++) {
            clientTab.push(querySnapshotArray[i].data());
        }
        return clientTab;
    }

    static async getAgents(){
        const q = query(collection(db, "users"), where('admin_document', '!=', ''));
        let querySnapshot = await getDocs(q);
        let querySnapshotArray = querySnapshot.docs;
        const agentTab = [];
        for(let i = 0; i < querySnapshotArray.length;i++) {
            agentTab.push(querySnapshotArray[i].data());
        }
        return agentTab;

    }

}

export default Client;