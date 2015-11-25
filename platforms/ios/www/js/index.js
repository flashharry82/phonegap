
var app = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    $('#draggable').on('mousedown', touchIt); // bind mouse event here as device won't ever be ready for browser
    $(document).on('deviceready', this.onDeviceReady);
  },
  onDeviceReady: function() {
    $('#draggable').on('touchstart', touchIt)
  }
};

$(document).ready(function(){
  app.initialize();
});
