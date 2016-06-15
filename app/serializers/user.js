import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({

  /**
   * Serialize the data back to what the server expects.
   *
   * @public
   * @override
   * @method serialize
   * @param {DS.Snapshot} snapshot
   * @param {Object} options
   * @return {Object} json
   */
  serialize: function(snapshot, options) {
    let json = snapshot.record.toJSON();
    
    json.cats = snapshot.hasMany('cats').map((item) => {
      return item.id;
    });

    json.meows = snapshot.hasMany('meows').map((item) => {
      return item.id;
    });

    // this, in theory, should always be false.
    if (options && options.includeId) {
      json.id = snapshot.id;
    }    

    return json;
  }
});
