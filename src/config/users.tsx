import firebaseDataProvider from '../services/firebaseDataProvider';

interface UserData {
    id: string;
    firstName: string;
    // และ properties อื่น ๆ ที่ต้องการใช้
  }
  
  interface ParamsType {
    page: number;
    perPage: number;
    sortField?: string;
    sortOrder?: string;
    filter?: { [key: string]: any };
  }
async function loadUsers() {
  const params = {}; // ตั้งค่า params ตามต้องการ
  const result = await firebaseDataProvider.getList('users', params);
  return result;
}

async function loadUserDetails(userId: string) {
  const user = await firebaseDataProvider.getOne('users', { id: userId });
  return user;
}

async function createUser(userId: string,userData: UserData) {
  const newUser = await firebaseDataProvider.create('users', { data: userData });
  return newUser;
}

async function updateUser(userId: string, userData: UserData) {
  const updatedUser = await firebaseDataProvider.update('users', { id: userId, data: userData });
  return updatedUser;
}

async function deleteUser(userId: string) {
  const deletedUser = await firebaseDataProvider.delete('users', { id: userId });
  return deletedUser;
}

const params = {
    pagination: { page: 1, perPage: 10 }, // ตั้งค่า pagination ตามที่ต้องการ
    sort: { field: 'firstName', order: 'ASC' }, // ตั้งค่าการเรียงลำดับตาม field ที่ต้องการ
    filter: { gender: 'male' } // ตั้งค่าการกรองข้อมูลตามเงื่อนไขที่ต้องการ
  };
  
  const result = await firebaseDataProvider.getList('users', params);

