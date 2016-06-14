import Mirage from 'ember-cli-mirage';

export default function() {
  this.namespace = 'api';

  this.get('/cats/:id');
  this.put('/cats/:id');
  this.put('/meows/:id');
  this.get('/meows');
  this.get('/meows/:id');
  this.get('/users');
  this.get('/users/:id');
}