$(function() {
  var $container = $("#collage-container"),
      $overlay = $('#overlay'),
      $gallery = $('#gallery'),
      $leftNav = $('#left'),
      $rightNav = $('#right'),
      $body = $('body'),
      dir = "/images/collage/",
      open = -1,
      imgWidth = $container.width() * (window.innerWidth > 599 ? .30 : .47),
      start = {x: -1, y: -1},
      end = {x: -1, y: -1};

  var createEl = function(count) {
    var $el = $('<div></div>'),
        img = imgs[count],
        $img,
        src = dir + img.src;

    $el.addClass(img.big ? "item big" : "item")
       .append($img = $('<img>')
          .addClass('img')
          .attr("data-id", count)
          .attr("data-original", dir + img.src)
       )
       .append($('<p></p>')
          .addClass('desc')
          .attr("data-id", count)
          .text(img.desc)
       );

    $img.height(img.height / img.width * imgWidth);

    $container.append($el);

    $img.lazyload({
      effect: "fadeIn",
      load: function() {
        $el.addClass("loaded");
      }
    });
  }

  for (var i = 0; i < imgs.length; i++) {
    createEl(i);
  }

  $container.masonry({
    itemSelector: ".item",
    gutter: 12
  });

  var setGalleryHeight = function() {
    var galHeight = 0,
        padding = window.innerWidth > 599 ? 20 : 10;

    $('.gal-el').each(function() {
      var $this = $(this);

      //bad iframe hack
      if ($this.children('iframe').length > 0)
        galHeight += $this.children('iframe').height();
      else
        galHeight += $this.height();

      galHeight += padding;
    });

    $gallery.height(galHeight);

    if (galHeight > $overlay.height()) {
      $gallery.css("margin", "0 auto");
    } else {
      $gallery.css("margin", "auto");
    }
  };

  var loadPic = function(count) {
    var img = imgs[count],
        $p;

    $gallery.empty();

    var appendRest = function() {
      $gallery.append($p = $('<p></p>')
         .addClass('gal-el')
         .attr("data-id", count)
       );

      if (img.link) {
        $p.append($('<a></a>')
            .attr("href", img.link)
            .attr("target", "_blank")
            .text(img.desc)
          );

        $p.click(function(e) {
          e.stopPropagation();
        });
      } else {
        $p.text(img.desc);
      }

      setGalleryHeight();
    };

    if (img.video === undefined) {
      var $img;
      $gallery.append($img = $('<img>')
          .addClass('gal-el')
          .attr("src", dir + img.src)
       );

      $img.load(appendRest);
    } else {
      var $iframe;
      $gallery.append($('<div></div>')
          .addClass('gal-el')
          .addClass('video')
          .append($iframe = $('<iframe></iframe>')
            .attr("src", 'http://www.youtube.com/embed/' + img.video)
            .attr("frameborder", 0)
          )
       );

      $iframe.load(appendRest);
    }

    open = count;
  };

  var navPic = function(num) {
    var newCount = open + num;
    if (newCount < 0)
      newCount = imgs.length + newCount;
    else if (newCount >= imgs.length)
      newCount = newCount % imgs.length;

    loadPic(newCount);
  };

  var closeOverlay = function() {
    $overlay.css("display", "none");
    $body.removeClass('noscroll');

    //remove scrollprevention
    $body.off('touchmove');
  };

  $container.click(function(e) {
   var id = e.target.getAttribute('data-id');

    $overlay.css("display", "block")
            .css("top", scrollY + "px");
    $body.addClass('noscroll');

    loadPic(parseInt(id, 10));

    //prevent stupid scrolling on iphone
    if (window.innerWidth <= 599) {
      $body.on('touchmove', function(e) {
        var touches = e.originalEvent.touches,
            $el = $(e.target);

        if (touches && touches.length) {
          end = {x: touches[0].pageX, y: touches[0].pageY};
        }

        //TODO: replace true with detection for when it scrolls to bottom of div
        if (($el.attr("id") !== "gallery" && $el.parents("#gallery").length === 0) || true) {
          e.preventDefault();
        }
      });
    }
  });

  $body.on('touchstart', function(e) {
    var touches = e.originalEvent.touches;
    if (touches && touches.length) {
      start = {x: touches[0].pageX, y: touches[0].pageY};
    }
  });

  $body.on('touchend', function(e) {
    if (end.x) {
      var deltaX = end.x - start.x;

      if (Math.abs(deltaX) > 50) {
        if (deltaX < 0) {
          navPic(1);
        } else {
          navPic(-1);
        }

        end.x = -1;
      }
    }
  });

  $overlay.click(function(e) {
    closeOverlay();
  });

  $leftNav.click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    navPic(-1);
  });

  $rightNav.click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    navPic(1);
  });

  document.onkeydown = function(evt) {
      evt = evt || window.event;
      switch (evt.keyCode) {
          case 37:
              navPic(-1);
              break;
          case 39:
              navPic(1);
              break;
          case 27:
              closeOverlay();
              break;
      }
  };

  //TODO: add animation when navigate
  //TODO: fix resizing
});
