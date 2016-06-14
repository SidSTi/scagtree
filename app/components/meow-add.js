import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['meow-add'],

  actions: {
    meow: function(){
      let meow = this.$('.meow-input').val();
      
      return this.attrs.onMeow(meow)
        .then(() => {
          this.$('.meow-input').val('');
        });;
    }
  }
});
