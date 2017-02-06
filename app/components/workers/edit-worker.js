import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.get('model').save().then((model)=> {
        return this.save(model)
      });
    },
    cancel() {
      this.cancel(this.get('model'));
    }
  }
});
