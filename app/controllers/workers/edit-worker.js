import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(model) {
      this.transitionToRoute('workers.show', model);
    },
    cancel(model) {
      this.transitionToRoute('workers.show', model);
    }
  }
});
