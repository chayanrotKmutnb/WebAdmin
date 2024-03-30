import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import db from './src/pages/firebase-config';

// Read
export const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map(doc => doc.data());
};

// Create
export const addData = async (collectionName, data) => {
  await addDoc(collection(db, collectionName), data);
};

// Update
export const updateData = async (collectionName, id, data) => {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, data);
};

// Delete
export const deleteData = async (collectionName, id) => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};
