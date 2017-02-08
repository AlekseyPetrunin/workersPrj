import Ember from 'ember';

export default Ember.Component.extend({
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName: Ember.computed.notEmpty('model.lastName'),
  hasAge: Ember.computed.notEmpty('model.age'),
  hasPosition: Ember.computed.notEmpty('model.position'),
  hasSalary: Ember.computed.notEmpty('model.salary'),

  isValid: Ember.computed.and(
    'hasFirstName',
    'hasLastName',
    'hasAge',
    'hasPosition',
    'hasSalary'
  ),


  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((model)=> {
        return this.save(model)
      });
    }else {
      this.set('errorMessage', 'Заполните все поля');
    }
  },

    cancel() {
      this.cancel(this.get('model'));
    }
  }
});
