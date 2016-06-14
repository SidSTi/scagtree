import Ember from 'ember';
import SessionMixin from '../../mixins/session';

export default Ember.Controller.extend(SessionMixin, {

  sendMeow: function(meow) {
    let user = this.store.peekRecord('user', this.get('model.id'));
    let timeNow = new Date();

    let newMeow = this.store.createRecord('meow', {
      text: meow,
      created: timeNow
    });
    user.get('meows').pushObject(newMeow);

    return newMeow.save()
      .then(() => user.save());
  },

  actions: {
    meow: function(meow) {
      this.sendMeow(meow);
    }
  }
});
