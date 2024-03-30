import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import db from '../config/firebase-config.js';

// Read
// services/firestoreService.js

export const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};



// Create
export const addData = async (collectionName: string, data: any): Promise<void> => {
  await addDoc(collection(db, collectionName), data);
};

// Update
export const updateData = async (collectionName: string, id: string, data: any): Promise<void> => {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, data);
};

// Delete
export const deleteData = async (collectionName: string, id: string): Promise<void> => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};
