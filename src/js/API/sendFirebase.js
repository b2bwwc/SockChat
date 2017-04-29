export const sendLine = ({firebase, user, message})=>{
  var date = (new Date()).toString();
  firebase.child('messages').push({user, message, date});
}

export const sendStatus = ({firebase, user, status}) => {
  var date = (new Date()).toString();
  firebase.child(`users/${user}/status`).push({status, date});
}
