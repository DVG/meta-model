import Ember from 'ember';
import Post from '../models/post';
import Person from '../models/person';

export default Ember.Controller.extend({
  actions: {
    thingie: function() {
      var post, posts, person, people, container;
      post = this.store.createRecord('post', {title: "Hello World"});
      posts = [post]
      person = this.store.createRecord('person', {name: "Bobby"});
      people = [person]
      container = this.store.createRecord('container', {
        posts: posts,
        people: people
      });
      debugger;
    }
  }
});
