import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
  storage:storageFor('workers'),

  actions: {

    clearStorage() {
      this.get('store').findAll('worker').then(function(workers){

          workers.forEach(function(worker) {
            Ember.run.once(this, function() {
              worker.deleteRecord();
              worker.save();
            });
          });

      });
    },

    deleteRecord(worker) {
      worker.destroyRecord();
    }
  }
});
