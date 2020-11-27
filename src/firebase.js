import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDfSlyhi8ylSkuGAs7_WqG5WBwKnb7T6TI",
  authDomain: "whatsapp-clone-7fff4.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-7fff4.firebaseio.com",
  projectId: "whatsapp-clone-7fff4",
  storageBucket: "whatsapp-clone-7fff4.appspot.com",
  messagingSenderId: "139200687905",
  appId: "1:139200687905:web:b398a279c99a48efb21860",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
