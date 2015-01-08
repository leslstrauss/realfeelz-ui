import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$('.slideshow.bg-image').flickerplate({
        auto_flick: true,
        flick_animation: 'transform-slide',
        auto_flick_delay: "5",
        flick_position: "1",
        theme: "dark",
        arrows: "false"
      });
    });
  }
});
