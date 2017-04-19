export const sendLine = ({firebase, user, message})=>{
  var date = (new Date()).toString();
  console.log(user, message, date);
  firebase.child('messages').push({user, message, date});
}

export const sendStatus = () => {
  console.log('sendstatus');
}
