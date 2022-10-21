const firebase = require("firebase-admin");
var serviceAccount = require("../rapid-resume-firebase-adminsdk-2rdrr-96854195ad.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
});

module.exports = firebase;
