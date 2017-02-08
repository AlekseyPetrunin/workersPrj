import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
  let date=String.prototype.split.call(params[0], '-');
  return date.reverse().join('.');
});
