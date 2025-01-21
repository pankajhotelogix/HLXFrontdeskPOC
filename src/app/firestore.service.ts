import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
  AngularFirestore,
  DocumentData,
  Query,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
  ) {}
  getItemsByDateRange(startDate?: string, endDate?: string): Observable<any[]> {
    let itemsRef = this.firestore.collection('bookings', (ref: any) => {
      let query: Query<DocumentData> = ref;
      if (startDate) {
        query = query.where('checkin_date', '>=', startDate);
      }

      if (endDate) {
        query = query.where('checkin_date', '<=', endDate);
      }

      return query;
    });

    return itemsRef.valueChanges();
  }
  saveData(path: string, data: any) {
    return this.db.object(path).set(data);
  }
  getData(path: string): Observable<any> {
    return this.db.object(path).valueChanges();
  }
  getCollection(collection: string) {
    return this.firestore.collection(collection).valueChanges();
  }
  addDocument(collectionName: string, data: any): Promise<any> {
    return this.firestore
      .collection(collectionName)
      .add(data)
      .then((docRef: any) => {
        console.log('Document written with ID: ', docRef.id);
        return docRef;
      })
      .catch((error: any) => {
        console.error('Error adding document: ', error);
        throw error;
      });
  }
  async importData(collectionPath: string, data: any[]): Promise<void> {
    if (!data || !Array.isArray(data)) {
      console.error('Invalid or missing data:', data);
      return;
    }
    const batch = this.firestore.firestore.batch();
    data.forEach((item, index) => {
      const id = item.room_id
        ? `${item.room_id}_${Date.now()}_${index}`
        : this.firestore.createId();

      if (!id) {
        console.error('Failed to generate a unique id for item:', item);
        return;
      }

      const docRef = this.firestore.firestore.doc(`${collectionPath}/${id}`);
      batch.set(docRef, { ...item, id });
    });

    try {
      await batch.commit();
      console.log('Data successfully imported into Firestore!');
    } catch (error) {
      console.error('Error committing batch to Firestore:', error);
    }
  }
}
