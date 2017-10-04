(function (){

  function initSidenav() {
    var width = document.body.clientWidth;

    var sideNavContainer = $('.nav-side-container')

    if (!Modernizr.touch && width > 992) {
      sideNavContainer.slimScroll({
        height: $('.nav-side-menu').outerHeight() - $('.navbar-header').outerHeight(),
        color: '#cdcdcd',
        size: '4px',
        opacity: 0.9,
        wheelStep: 15,
        distance: '0',
        railVisible: false,
        railOpacity: 1
      });

      sideNavContainer.mouseover();
    } else {
      sideNavContainer.slimScroll({ destroy: 'true' });

      sideNavContainer.mouseover();
    }

    $(window).on('resize', Dresssed.debounce(function() {
      console.log('resizing')
      if (Modernizr.touch) return;

      width = document.body.clientWidth;

      if (width < 992) {
        sideNavContainer.slimScroll({ destroy: 'true' });
        sideNavContainer.height('auto')

        sideNavContainer.mouseover();
      } else {
        sideNavContainer.slimScroll({ destroy: 'true' });
        sideNavContainer.slimScroll({
          height: $('.nav-side-menu').outerHeight() - $('.navbar-header').outerHeight(),
        });

        sideNavContainer.mouseover();
      }
    }, 250));
  }

  Dresssed.hookOnPageLoad( function() {
    Dresssed.jsLibIsActive('sidenav') && initSidenav.call(this)
  })
})()

