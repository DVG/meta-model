import DS from 'ember-data';

export default DS.Model.extend({
  people: DS.attr(),
  posts: DS.attr()
});
