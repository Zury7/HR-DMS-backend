const User = require('../models/user.model');
const { db, auth } = require('../library/firebase');
const {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  getDoc,
  updateDoc,
} = require('firebase/firestore');
const { createUserWithEmailAndPassword } = require('firebase/auth');

class UserService {
  async addUser(userData) {
    const userRef = collection(db, 'users');
    const q = query(userRef, where('email', '==', userData.email));

    try {
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log('User does not exist. Creating user...');
        const res = await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );

        await setDoc(doc(userRef, res.user.uid), {
          id: res.user.uid,
          name: userData.name,
          email: userData.email,
          mobile: userData.mobile,
          role: userData.role,
          responsibleDivision: userData.responsibleDivision,
        });
        console.log('User created successfully.');
        return {
          status: 200,
          message: 'User created successfully.',
        };
      } else {
        console.log('User already exists.');
        return {
          status: 200,
          message: 'User already exists.',
        };
      }
    } catch (error) {
      console.error('Error adding admin user: ', error);
      return {
        status: 500,
        message: 'Error adding user: ' + error.message,
      };
    }
  }

  async getAllUsers() {
    const userRef = collection(db, 'users');
    const users = [];

    try {
      const querySnapshot = await getDocs(userRef);
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      return {
        status: 200,
        message: users,
      };
    } catch (error) {
      return {
        status: 500,
        message: 'Error fetching users: ' + error.message,
      };
    }
  }

  async deleteUser(id) {
    try {
      const userRef = doc(db, 'users', id);
      await deleteDoc(userRef);

      await admin.auth().deleteUser(id);

      return {
        status: 204,
        message: 'User deleted successfully.',
      };
    } catch (error) {
      console.error('Error deleting user: ', error);
      return {
        status: 404,
        message: 'Error deleting user: ' + error.message,
      };
    }
  }

  async getUser(id) {
    try {
      const userRef = doc(db, 'users', id);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        throw new Error('User not found');
      }
      return {
        status: 200,
        message: userSnap.data(),
      };
    } catch (error) {
      console.error('Error fetching user: ', error);
      return {
        status: 404,
        message: 'Error fetching user: ' + error.message,
      };
    }
  }

  async updateUser(id, updateData) {
    try {
      const userRef = doc(db, 'users', id);
      await updateDoc(userRef, updateData);

      // Update user in Firebase Auth
      const user = await admin.auth().getUser(id);
      await admin.auth().updateUser(user.uid, {
        email: updateData.email,
        password: updateData.password,
      });

      return {
        status: 200,
        message: 'User updated successfully.',
      };
    } catch (error) {
      console.error('Error updating user: ', error);
      return {
        status: 404,
        message: 'Error updating user: ' + error.message,
      };
    }
  }
}

module.exports = new UserService();
