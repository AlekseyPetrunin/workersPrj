import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
  let [sal]=params;
  return `${sal}$`;
});
