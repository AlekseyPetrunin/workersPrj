import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(worker) {
      worker.destroyRecord().then(() => {
        this.transitionToRoute('workers.index');
      });
    }
  }
});
