import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('worker', params.model_id);
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      var model = controller.get('model');

      model.rollbackAttributes();
      }
    }
});
