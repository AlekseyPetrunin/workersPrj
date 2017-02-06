import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('workers/edit-worker', 'Integration | Component | workers/edit worker', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{workers/edit-worker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#workers/edit-worker}}
      template block text
    {{/workers/edit-worker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
