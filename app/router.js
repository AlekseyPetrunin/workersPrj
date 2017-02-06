import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('workers', function() {
    this.route('show', {path:':worker_id'});
    this.route('new-worker');
    this.route('edit-worker', {path:':model_id/edit'});
  });
});

export default Router;
