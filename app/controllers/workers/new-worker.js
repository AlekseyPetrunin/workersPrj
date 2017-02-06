import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      this.transitionToRoute('workers.index');
    },
    cancel() {
      this.transitionToRoute('workers.index');
    }
  }
});
