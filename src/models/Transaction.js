

import { collection, where } from 'firebase/firestore';
import db from '../config/firebaseConfig';
import { query } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

class Transaction {

    

    static async getAllTransactionsOfTheDay(){
        var startOfToday = new Date(); 
        startOfToday.setHours(0,0,0,0);
        var endOfToday = new Date(); 
        endOfToday.setHours(23,59,59,999);
        const q = query(collection(db, "transactions"), where("created_at",'>=',startOfToday), where('created_at', '<=', endOfToday));
        let querySnapshot = await getDocs(q);
        let querySnapshotArray = querySnapshot.size;
        // const transactionTab = [];
        // for(let i = 0; i < querySnapshotArray.length;i++) {
        //     transactionTab.push(querySnapshotArray[i].data());
        // }
        return querySnapshotArray;
    }

}

export default Transaction;