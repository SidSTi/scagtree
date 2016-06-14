import Ember from 'ember';
import SessionMixin from '../mixins/session';

export default Ember.Route.extend(SessionMixin, {

  beforeModel: function(transition) {
    let isAuthenticated = this.get('isAuthenticated');

    if (!isAuthenticated) {
      if (transition.targetName !== 'index') {
        this.transitionTo('index');
      }
    }
  }
});
