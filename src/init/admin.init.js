require('dotenv').config();

const PositionType = require('../constants/position.type');
const RoleType = require('../constants/role.type');

const { db, auth } = require('../library/firebase');
const {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
} = require('firebase/firestore');

const { createUserWithEmailAndPassword } = require('firebase/auth');

const adminName = process.env.ADMIN_NAME;
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;
const adminMobile = process.env.ADMIN_MOBILE;

async function adminInit() {
  const userRef = collection(db, 'users');
  const q = query(userRef, where('email', '==', adminEmail));

  try {
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log('Admin user does not exist. Creating admin user...');
      const res = await createUserWithEmailAndPassword(
        auth,
        adminEmail,
        adminPassword
      );

      await setDoc(doc(userRef, res.user.uid), {
        id: res.user.uid,
        name: adminName,
        email: adminEmail,
        mobile: adminMobile,
        role: RoleType.ADMIN,
        responsibleDivision: PositionType.ADMIN,
      });
      console.log('Admin user created successfully.');
    } else {
      console.log('Admin user already exists.');
    }
  } catch (error) {
    console.error('Error adding admin user: ', error);
  }
}

module.exports = adminInit;
