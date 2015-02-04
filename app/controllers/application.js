import Ember from 'ember';
import Post from '../models/post';
import Person from '../models/person';

export default Ember.Controller.extend({
  actions: {
    thingie: function() {
      var post, posts, person, people, container;
      post = this.store.createRecord('post', {
        title: "Hello World"
      });

      // array of all posts
      posts = [post]

      person = this.store.createRecord('person', {
        name: "Bobby"
      });

      //array of all people
      people = [person]

      //container is the package that will be sent to the server
      container = this.store.createRecord('container', {
        posts: posts,
        people: people
      });
      container.save()
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
    }
  }
});
