import Ember from 'ember';

var NewRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('statement');
  },

  actions: {
    postStatement: function(newPost) {
      var post = this.store.createRecord('statement', {
        body: newPost
      });
      post.save();
    }
  }
});

export default NewRoute;