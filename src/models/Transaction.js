

import { collection, where } from 'firebase/firestore';
import db from '../config/firebaseConfig';
import { query } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

class Transaction {

    

    static async getAllTransactionsOfTheDay(){
        const q = query(collection(db, "transactions"), where("created_at",'<',new Date()));
        let querySnapshot = await getDocs(q);
        let querySnapshotArray = querySnapshot.docs;
        const transactionTab = [];
        for(let i = 0; i < querySnapshotArray.length;i++) {
            transactionTab.push(querySnapshotArray[i].data());
        }
        return transactionTab;
    }

}

export default Transaction;