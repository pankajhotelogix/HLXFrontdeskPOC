import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
  AngularFirestore,
  DocumentData,
  Query,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
interface Booking {
  room_id: string;
  checkin_date: string;
  
}
@Injectable({
  providedIn: 'root',
})

export class FirestoreService {
  private collectionName = 'bookings';
  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
  ) {}
  getItemsByDateRange(startDate?: string, endDate?: string): Observable<Booking[]> {
    let itemsRef = this.firestore.collection<Booking>('bookings', (ref: any) => {
      let query: Query<DocumentData> = ref;
      
      
      if (startDate) {
        query = query.where('checkin_date', '>=', startDate);
      }

      if (endDate) {
        query = query.where('checkin_date', '<=', endDate);
      }
      console.log(query);
      return query;
    });

    let values = itemsRef.valueChanges();
    console.log(values);
    
    return values;
  }

  async saveData(path: string, data: any) {
    try {
      await this.db.object(path).set(data);
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  getData(path: string): Observable<any> {
    return this.db.object(path).valueChanges();
  }

  getCollection(collection: string): Observable<any[]> {
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
    if (!Array.isArray(data) || data.length === 0) {
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
  uploadReservationsToFirestore(reservations: any[]): void {
    if (reservations.length === 0) {
        console.error("❌ No reservations to upload.");
        return;
    }

    const batchSize = 500; // ✅ Firestore batch limit
    const bookingsRef = this.firestore.collection("bookings").ref; // Firestore collection reference
    const totalBatches = Math.ceil(reservations.length / batchSize); // Calculate total batches

    console.log(`📦 Uploading ${reservations.length} reservations in ${totalBatches} batch(es)...`);

    let batchPromises: Promise<void>[] = [];

    for (let i = 0; i < totalBatches; i++) {
        const batch = this.firestore.firestore.batch();
        const batchReservations = reservations.slice(i * batchSize, (i + 1) * batchSize);

        batchReservations.forEach(reservation => {
            const newDocRef = bookingsRef.doc(); // Generate a new Firestore document reference
            batch.set(newDocRef, reservation); // Add to batch
        });

        // ✅ Push batch to promise array
        batchPromises.push(
            batch.commit()
                .then(() => console.log(`✅ Batch ${i + 1}/${totalBatches} uploaded successfully.`))
                .catch(error => console.error(`❌ Error in batch ${i + 1}:`, error))
        );
    }

    // ✅ Wait for all batch uploads to complete
    Promise.all(batchPromises)
        .then(() => console.log("🚀 All reservations successfully uploaded to Firestore!"))
        .catch(error => console.error("❌ Error uploading reservations:", error));
}

async addDocumentsInBatch(collectionName: string, dataArray: any[]): Promise<void> {
  const batch = this.firestore.firestore.batch();
  const collectionRef = this.firestore.collection(collectionName);

  dataArray.forEach((data) => {
      const docRef = collectionRef.doc().ref; // Create a new document reference
      batch.set(docRef, data);
  });

  return batch.commit().then(() => {
      console.log("✅ Batch write completed successfully.");
  }).catch((error) => {
      console.error("❌ Error in batch write:", error);
      throw error;
  });
}
async getDocument(docId: string): Promise<any> {
  try {
    if (!docId) {
      console.warn('⚠️ Invalid document ID.');
      return null;
    }

    const docRef = this.firestore.collection('bookings').doc(docId);
    const docSnapshot = await docRef.get();

    console.log(`✅ Document ${docId} fetched successfully.`);
    return 1;
  } catch (error) {
    console.error(`❌ Error fetching document ${docId}:`, error);
    return null;
  }
}
getBooking(documentId: string): Observable<any> {
  if (!documentId || documentId.includes(',')) {
    console.error(`⚠️ Invalid document ID requested: ${documentId}`);
    return new Observable(); // Return an empty observable
  }

  return this.firestore.collection(this.collectionName).doc(documentId).valueChanges();
}

/**
 * Update a document in Firestore
 */
// async updateBooking(documentId: string, updateData: any): Promise<void> {
//   if (!documentId || documentId.includes(',')) {
//     console.error(`⚠️ Skipping update. Invalid document ID: ${documentId}`);
//     return;
//   }

//   try {
//     const docRef = this.firestore.collection(this.collectionName).doc(documentId);
//     const docSnapshot = await docRef.get().toPromise();

//     await docRef.update(updateData);
//     console.log(`✅ Successfully updated booking: ${documentId}`);
//   } catch (error) {
//     console.error(`❌ Firestore update failed for ${documentId}:`, error);
//   }
// }
async uploadReservationsInBatches(reservations: any[], collectionName: string) {
  const batchSize = 500; // Firestore allows max 500 operations per batch
  const totalBatches = Math.ceil(reservations.length / batchSize);
  const batchPromises = [];

  for (let i = 0; i < totalBatches; i++) {
      const batch = this.firestore.firestore.batch();
      const batchItems = reservations.slice(i * batchSize, (i + 1) * batchSize);
      const collectionRef = this.firestore.collection(collectionName);

      batchItems.forEach((reservation) => {
          const docRef = collectionRef.doc().ref; // Auto-generate ID
          batch.set(docRef, reservation);
      });

      batchPromises.push(batch.commit());
  }

  try {
      await Promise.all(batchPromises);
      console.log("✅ All reservations uploaded successfully in batches.");
  } catch (error) {
      console.error("❌ Error uploading reservations:", error);
  }
}
moveEventToNewRoom(event: any, previousRoomId: string, newRoomId: string) {
  const batch = this.firestore.firestore.batch();
  const eventRef = this.firestore.collection('bookings').doc(event.id).ref;

  this.firestore.collection('bookings', ref => ref.where('isAvailable', '==', true))
    .get()
    .subscribe(snapshot => {
      if (!snapshot.empty) {
        const emptyRoom = snapshot.docs[0]; 
        const emptyRoomId = emptyRoom.id;

        batch.update(eventRef, { RoomId: newRoomId });

        const previousRoomRef = this.firestore.collection('bookings').doc(previousRoomId).ref;
        batch.update(previousRoomRef, { isAvailable: true });

        const newRoomRef = this.firestore.collection('bookings').doc(newRoomId).ref;
        batch.update(newRoomRef, { isAvailable: false });

        batch.commit()
          .then(() => console.log('Room updated successfully!'))
          .catch(error => console.error('Error updating room:', error));
      }
    });
}
deleteDocument(docId: string) {
  return this.firestore.collection('bookings').doc(docId).delete();
}
updateDocument(collection: string, docId: string, updatedData: any): Promise<void> {
  return this.firestore.collection('bookings').doc(docId).update(updatedData)
      .then(() => {
          console.log(`Document ${docId} in ${collection} updated successfully!`);
      })
      .catch((error) => {
          console.error(`Error updating document ${docId} in ${collection}:`, error);
          throw error;
      });
}
deleteDocumentByDoctorId(fid: any): Promise<void> {
  return new Promise<void>((resolve, reject) => {
      return this.firestore
          .collection('bookings', ref => ref.where('fId', "==", fid)) // Changed from `fId` to `fid`
          .get()
          .toPromise()
          .then(querySnapshot => {
              if (!querySnapshot || querySnapshot.empty) {
                  console.warn(`⚠️ No bookings found for fId: ${fid}. Skipping deletion.`);
                  return;
              }

              const batch = this.firestore.firestore.batch();
              querySnapshot.forEach(doc => {
                  console.log(`🗑 Deleting document ID: ${doc.id} for fId: ${fid}`);
                  batch.delete(doc.ref);
              });

              return batch.commit().then(() => {
                  console.log(`✅ Successfully deleted booking(s) for fId: ${fid}`);
                  resolve();
              });
          })
          .catch(error => {
              console.error('❌ Error deleting document:', error);
              reject(error);
          });
  });
}


async deleteAllBookings(fid:any): Promise<void> {
  
  
  console.log(`🗑 Deleting outdated bookings from Firestore...`);

  return this.firestore
      .collection('bookings', ref => ref.where('fid', "==", fid))
      .get()
      .toPromise()
      .then(querySnapshot => {
          if (!querySnapshot || querySnapshot.empty) {
              console.warn('⚠️ No outdated bookings found.');
              return;
          }

          const batch = this.firestore.firestore.batch();
          querySnapshot.forEach(doc => {
              console.log(`🗑 Deleting outdated document ID: ${doc.id}`);
              batch.delete(doc.ref);
          });

          return batch.commit().then(() => {
              console.log(`✅ Successfully deleted outdated bookings.`);
          });
      })
      .catch(error => {
          console.error('❌ Error deleting bookings:', error);
      });
}


getAllBookings(): Observable<any[]> {
  return this.firestore.collection(this.collectionName).valueChanges({ idField: 'Id' });
}

getBookingById(id: string): Observable<any> {
  return this.firestore.collection(this.collectionName).doc(id).valueChanges();
}

updateBooking(id: string, data: any): Promise<void> {
  return this.firestore.collection(this.collectionName).doc(id).update(data);
}



async updateDocumentByFId(fId: any, updatedData: any): Promise<void> {
  try {
    console.log(`🔄 Updating document(s) with fId: ${fId}...`);
    return  new Promise<void>(async (resolve, reject) => {
    // Query Firestore for documents where fId matches
    const snapshot = await this.firestore.collection('bookings', ref => ref.where('fId', '==', fId)).get().toPromise();
console.log('jahul',snapshot);
    // if (!snapshot || snapshot.empty) {
    //   console.error('No matching document found in Firestore.');
    //   return;
    // }

    // Loop through all matching documents and update them
    const batch = this.firestore.firestore.batch();
    snapshot?.forEach(doc => {
      const docRef = this.firestore.collection('bookings').doc(doc.id).ref;
      batch.update(docRef, updatedData);
    });

    await batch.commit();
    console.log('Document(s) updated successfully.');
    resolve();
  });
    
  } catch (error) {
    console.error('Error updating document:', error);
  }
}


async documentExists(collection: string, docId: string): Promise<boolean> {
  try {
      const docRef = this.firestore.collection(collection).doc(docId);
      const docSnapshot = await docRef.get().toPromise();
      return docSnapshot?.exists ?? false;
  } catch (error) {
      console.error(`❌ Error checking document existence for ${docId}:`, error);
      return false;
  }
}



getBookingsByDoctorId(previousRoomId: string): void {
  this.firestore.collection('bookings', ref => ref.where('DoctorId', '==', previousRoomId))
    .get().subscribe(snapshot => {
      if (snapshot.empty) {
        console.error("No bookings found for DoctorId:", previousRoomId);
      } else {
        snapshot.forEach(doc => console.log("Found booking:", doc.id, doc.data()));
      }
    }, error => {
      console.error("Error fetching bookings:", error);
    });
}
updateBookingRoom(fId: string, newRoomId: string): Promise<void> {
  console.log(`🔄 Updating Booking fId: ${fId} to new Room ID: ${newRoomId}`);

  return this.firestore.collection('bookings').doc(fId)
    .update({ 'room_stay.0.room_id': newRoomId })
    .then(() => {
      console.log(`✅ Successfully updated booking ${fId} to new room ${newRoomId}`);
    })
    .catch(error => {
      console.error('❌ Error updating booking:', error);
      return Promise.reject(error);
    });
}

}