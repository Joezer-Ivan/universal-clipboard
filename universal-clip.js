Snippets = new Mongo.Collection("snippets");

if (Meteor.isServer) {

}

if (Meteor.isClient) {
  // counter starts at 0
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  Template.afterLogIn.events({
    "submit #new-snippet":function (event){
      event.preventDefault();
      var text = event.target.text.value;
      Meteor.call("addSnip",text);
      event.target.text.value = '';
    }
  });
}

Meteor.methods({
  addSnip: function(text){
      Snippets.insert({
        text: text,
        owner: Meteor.userId(),
        createdAt: new Date()
      });

  }
});
