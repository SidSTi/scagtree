import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'ul',
  classNames: ['card', 'meow-list'],

  meowList: Ember.computed.sort('meows', 'sortDefinition'),

  sortDefinition: ['created:desc'],

});
