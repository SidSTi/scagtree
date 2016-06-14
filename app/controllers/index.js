import Ember from 'ember';
import SessionMixin from '../mixins/session';

export default Ember.Controller.extend(SessionMixin, {

  valuesObserver: Ember.observer('username', 'password', function() {
    this.set('errorMessage', false);
  }),

  actions: {
    login: function() {
      var username = this.get('username');
      var password = this.get('password');

      if (!Ember.isEmpty(username) && !Ember.isEmpty(password)) {
        this.store.findAll('user')
          .then((users) => {
            let record = users.findBy('username', username);

            if (record) {
              this.get('sessionService').setProperties({
                username: record.get('username'),
                userid: record.get('id')
              });

              this.transitionToRoute('home');
            } else {
              this.set('errorMessage', 'Wrong username or password!');
            }
            
          })
          .catch(() => {
            this.set('errorMessage', 'Wrong username or password!');
          });
      } 
    }
  }
});
