$(document).ready(function() {
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    },
    gallery: {
      enabled: true,
      preload: [0,3], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
    }
  });

  $('.image-popup-fit-width').magnificPopup({
    type: 'image',
    image: {
      verticalFit: false
    },
    gallery: {
      enabled: true,
      preload: [0,3], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
    }
  });

  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    gallery: {
      enabled: true,
      preload: [0,3], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
    }
  });
});
