if (Meteor.isServer) {

}

if (Meteor.isClient) {
  // counter starts at 0
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}
