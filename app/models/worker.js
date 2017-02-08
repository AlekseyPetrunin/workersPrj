import DS from 'ember-data';

export default DS.Model.extend({
  firstName:DS.attr('string'),
  lastName:DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', {
    get() {
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  }),
  age:DS.attr('string'),
  position:DS.attr('string'),
  salary:DS.attr('string')
});
