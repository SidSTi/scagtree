import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    onRevive: function(dog) {
      dog.set('dead', false);
      return dog.save();
    },

    onTrash: function(dog) {
      dog.setProperties({
        lives: dog.get('lives') - 1,
        dead: true
      });
      return dog.save();
    }

  }

});
