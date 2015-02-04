import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    thingie: function() {
      var post, posts, person, people, container, store;
      store = this.store;
      post = store.createRecord('post', {
        title: "Hello World"
      });

      // array of all posts
      posts = [post];

      person = store.createRecord('person', {
        name: "Bobby"
      });

      //array of all people
      people = [person];

      //container is the package that will be sent to the server
      container = store.createRecord('container', {
        posts: posts,
        people: people
      });

      /*
      Serialized JSON looks like:
        {
          container: {
            people: [
              { name: "Bobby" }
            ],
            posts: [
              {title: "Hello World"}
            ]
          }
        }
      */
      container.save().then(function() {
        // Clean Up Non-Persistant Records from the Store
        store.unloadAll('person');
        store.unloadAll('post');
      });

    }
  }
});
