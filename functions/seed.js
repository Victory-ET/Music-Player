const admin = require("firebase-admin");

const serviceAccount = require("./music-application-1d155-1da0b1c17ab9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://music-application-1d155-default-rtdb.firebaseio.com"
});

const faker = require("faker");
const db = admin.firestore();

const fakeIt = () => {
  return db.collection("Music").add({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
  });
};

Array(5).fill(0).forEach(fakeIt);
