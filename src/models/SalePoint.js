

import { collection } from 'firebase/firestore';
import db from '../config/firebaseConfig';
import { query } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

class SalePoint {

    

    static async getAll(){
        const q = query(collection(db, "sale_points"));
        let querySnapshot = await getDocs(q);
        let querySnapshotArray = querySnapshot.docs;
        const salePointsTab = [];
        for(let i = 0; i < querySnapshotArray.length;i++) {
            salePointsTab.push(querySnapshotArray[i].data());
        }
        return salePointsTab;
    }

}

export default SalePoint;