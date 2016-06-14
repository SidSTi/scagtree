export default function() {
  this.namespace = 'api';

  this.get('/cats/:id');
  this.put('/cats/:id');
  this.get('/dogs/:id');
  this.put('/dogs/:id');
  this.post('/meows', function({ meows }, request) {
    let attrs = JSON.parse(request.requestBody).meow;

    return meows.create(attrs);
  });
  this.get('/meows');
  this.get('/meows/:id');
  this.get('/users');
  this.get('/users/:id');
  this.put('/users/:id', function({ users }, request) {
    let attrs = JSON.parse(request.requestBody).user;

    return users.find(request.params.id).update(attrs);
  });
}