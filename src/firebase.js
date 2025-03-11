import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAH0v3TJoExpgUJ_UorypxAbdiA-xbbYQM",
    authDomain: "tafattan.firebaseapp.com",
    projectId: "tafattan",
    storageBucket: "tafattan.firebasestorage.app",
    messagingSenderId: "602705105283",
    appId: "1:602705105283:web:60b5e7148e9b6d07c7a6b6",
    measurementId: "G-XKCY265283"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
