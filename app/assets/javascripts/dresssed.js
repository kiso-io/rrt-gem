//= require ./dresssed/fastclick
//= require ./dresssed/slimscroll
//= require ./dresssed/metis_menu
//= require ./dresssed/header
//= require ./dresssed/popper
//= require ./dresssed/bootstrap
//= require ./dresssed/sheets
//= require ./dresssed/maps
//= require ./dresssed/flot
//= require ./dresssed/rickshaw
//= require ./dresssed/fastclick
//= require ./dresssed/prettify
//= require ./dresssed/morris
//= require ./dresssed/chartjs
//= require ./dresssed/countTo

//= require_tree ./generators
//= require_tree ./demo
//
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;

$(document).ready(function() {
  if (Modernizr.touch) {
    FastClick.attach(document.body);
  }

  $('[data-toggle="popover"]').popover({
    container: 'body'
  });

  $('[data-toggle="tooltip"]').tooltip({
    container: 'body'
  });

  $('.form-control')
  .on('focus', function() {
    $(this).parent('.input-group').addClass('input-group-focus');
  })
  .on('blur', function() {
    $(this).parent('.input-group').removeClass('input-group-focus');
  });

  var width = document.body.clientWidth;

  if (!Modernizr.touch && width > 1025) {
    $('#menu-content').slimScroll({
      height: $('#menu-content').outerHeight(),
      color: '#cdcdcd',
      size: '4px',
      opacity: 0.9,
      wheelStep: 15,
      distance: '0',
      railVisible: false,
      railOpacity: 1
    });

    $('#menu-content').mouseover();
  } else {
    $('#menu-content').height(0);
    $('#menu-content').slimScroll({
      destroy: 'true'
    });

    $('#menu-content').mouseover();
  }

  // Required for the SideNav dropdown nav-side-menu
  $('.nav-side-menu').metisMenu({
    triggerElement: '.nav-link', // bootstrap 4
    parentTrigger: '.nav-item', // bootstrap 4
    collapseInClass: 'show'
  });

  // AHOY THERE!
  //
  // This code exists purely for the situation of when the demo
  // app hosts the Ives theme. Slimscroll will prevent the sidenav
  // bar from collapsing correctly ONLY in the circumstance that
  // someone is wanking the browser window back and forth.
  //
  // It is safe to delete this code yourself.
  $(window).on('resize', function() {
    if (Modernizr.touch) return;

    width = document.body.clientWidth;

    if (width < 1025) {
      $('#menu-content').height(0);
      $('#menu-content').slimScroll({
        destroy: 'true'
      });
    } else {
      $('#menu-content').slimScroll({
        destroy: 'true'
      });
      $('#menu-content').slimScroll({
        height: '100%'
      });

      $('#menu-content').mouseover();
    }

    try {
      sizeiframe(width);
    } catch (e) {}
  });

  flotMetric($('#metric-monthly-earnings'), [
             [0, 4],
             [1, 8],
             [2, 14],
             [3, 16],
             [4, 12],
             [5, 26],
             [6, 29],
             [7, 32]
  ]);

  flotMetric($('#metric-cancellations'), [
             [0, 10],
             [1, 10],
             [2, 11],
             [3, 20],
             [4, 12],
             [5, 11],
             [6, 10],
             [7, 10]
  ]);

  flotRealtime();
  salesVsRefunds();

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
  }

  $('.counter').data('countToOptions', {
    onComplete: function (value) {
      var timeout = setTimeout(function() {
        count.call(this, {
          from: value,
          to: value + (Math.floor(value * (1/20)))
        });
        clearTimeout(timeout)
      }.bind(this), 5000 + Math.floor(Math.random() * 10000))
    },
    formatter: function (value, options) {
      return value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    }
  });

  $('.cash-counter').data('countToOptions', {
    onComplete: function (value) {
      var timeout = setTimeout(function() {
        count.call(this, {
          from: value,
          to: value + (Math.floor(value * (1/50)))
        });
        clearTimeout(timeout)
      }.bind(this), 5550 + Math.floor(Math.random() * 10000))
    },
    formatter: function (value, options) {
      return '$' + value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    }
  });

  $('.counter').each(count)
  $('.cash-counter').each(count)
});
