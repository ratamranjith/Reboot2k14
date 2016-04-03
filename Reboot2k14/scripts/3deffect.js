var origBorderWidth = parseInt($('.example-image').css('border-top-width')),
  win = $(window);

function set3D() {
  var windowHeight = win.height();

  $('.example-image').each(function() {
    var self = $(this),
      scrollHeight = win.scrollTop(),
      elementPosition = self.position(),
      positionPercentTop = Math.round((elementPosition.top - scrollHeight) / windowHeight * 100);
      positionPercentBottom = Math.round((elementPosition.top + self.outerHeight() - scrollHeight) / windowHeight * 100);

    self.css({
      'border-top-width' : origBorderWidth - (origBorderWidth * (positionPercentTop / 100)) + 'px',
      'border-bottom-width' : origBorderWidth * (positionPercentBottom / 100) + 'px'
    });
  });
};

win.on('load scroll resize', function() {
  set3D();
});