var App;

module('Acceptances - Post', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index renders', function(){
  expect(2);

  visit('/post/1').then(function(){
    var title = find('h2#post-title');
    var user = find('.author');

    equal(title.text(), 'Rails is omakase');
    equal(user.text(), 'dhh');

  });
});
