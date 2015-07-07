'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia(

  // constraints
  {
    video: true
  },

  // successCallback
  function (localMediaStream) {
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(localMediaStream);

    var target = document.querySelector('.target');
    target.src = window.URL.createObjectURL(localMediaStream);
    // Do something with the video here, e.g. video.play()
  },

  // errorCallback
  function (err) {
    console.log('The following error occured: ' + err);
  });
} else {
  console.log('getUserMedia not supported');
}

// range script
var ctx = document.body;
var uTarget = document.querySelector('.target');
var target = document.body.querySelector('.target');

/// ####################################
///
/// VIDEO OPACITY
///
/// ####################################
var range_opacity = document.getElementById('opacity');

var Opacity = (function () {
  function Opacity(args) {
    _classCallCheck(this, Opacity);

    this.target = args.target || null;
    // opacity
    this.opacity = args.opacity || 1;
  }

  _createClass(Opacity, [{
    key: 'apply',
    // / constructor

    value: function apply() {
      // Reset the filter
      this.target.style.opacity = '0.' + this.opacity;
    }
  }]);

  return Opacity;
})();

// / opacity

var opacityChange = new Opacity({ target: target });

range_opacity.addEventListener('input', function () {
  // Update the opacity value with the value of the input element
  opacityChange.opacity = this.value;
  // Apply the filter to the target element
  opacityChange.apply();
}, false);

/// ####################################
///
/// CSS FILTERS
///
/// ####################################

var range_blur = document.getElementById('blur');
var range_contrast = document.getElementById('contrast');
var range_sepia = document.getElementById('sepia');
var range_grayscale = document.getElementById('grayscale');
var range_hue = document.getElementById('hue');
var range_brightness = document.getElementById('brightness');

var Filter = (function () {
  function Filter(args) {
    _classCallCheck(this, Filter);

    // The target element which gets all the filter
    this.target = args.target || null;

    // filter effects values
    this.blur = args.blur || 0;
    this.contrast = args.contrast || 1;
    this.sepia = args.sepia || 0;
    this.grayscale = args.grayscale || 0;
    this.brightness = args.brightness || 1;
    this.hue = args.hue * 3 || 0;

    // colors effect value
    this.red = args.red || 1;
    this.blue = args.blue || 1;
    this.green = args.green || 1;

    // blend mode values
    this.lighten = args.lighten || 1;
    this.darken = args.darken || 1;
    this.colorBurn = args.colorBurn || 1;
    this.screenLight = args.screenLight || 1;
    this.softLight = args.softLight || 1;
    this.hardLight = args.hardLight || 1;
  }

  _createClass(Filter, [{
    key: 'apply',

    // Apply all filters to the target
    value: function apply() {
      // Reset the filter
      this.target.style.webkitFilter = '';

      // Create a list of filters by using an array
      this.filterList = ['blur(' + this.blur + 'px)', 'contrast(' + this.contrast + ')', 'sepia(' + this.sepia + '%)', 'grayscale(' + this.grayscale + '%)', 'hue-rotate(' + this.hue + 'deg)', 'brightness(' + this.brightness + ')'];

      // Join the filterList to create a String to be used as the webkitFilter
      this.target.style.webkitFilter = this.filterList.join(' ');
    }
  }]);

  return Filter;
})();

// Create an instance of Filter
var superAwesomeFilter = new Filter({ target: target });

// Filters
range_blur.addEventListener('input', function () {
  // Update the blur value with the value of the input element
  superAwesomeFilter.blur = this.value;
  // Apply the filter to the target element
  superAwesomeFilter.apply();
}, false);

range_contrast.addEventListener('input', function () {
  // Update the contrast value with the value of the input element
  superAwesomeFilter.contrast = this.value;
  // Apply the filter to the target element
  superAwesomeFilter.apply();
}, false);

range_sepia.addEventListener('input', function () {
  // Update the sepia value with the value of the input element
  superAwesomeFilter.sepia = this.value;
  // Apply the filter to the target element
  superAwesomeFilter.apply();
}, false);

range_grayscale.addEventListener('input', function () {
  // Update the grayscale value with the value of the input element
  superAwesomeFilter.grayscale = this.value;
  // Apply the filter to the target element
  superAwesomeFilter.apply();
}, false);

range_hue.addEventListener('input', function () {
  // Update the hue value with the value of the input element
  superAwesomeFilter.hue = this.value;
  // Apply the filter to the target element
  superAwesomeFilter.apply();
}, false);

range_brightness.addEventListener('input', function () {
  // Update the brightness value with the value of the input element
  superAwesomeFilter.brightness = this.value;
  // Apply the filter to the target element
  superAwesomeFilter.apply();
}, false);

/// ####################################
///
/// ENABLE BLEND MODE
///
/// ####################################

var triggerMixBlendMode = document.getElementById('mixblendmode');
var selectMixBlendMode = document.getElementById('selMixBlendMode');

triggerMixBlendMode.addEventListener('click', function () {
  if (this.checked) {
    // uTarget.style.mixBlendMode = 'screen'
    // uTarget.style.webkitMixBlendMode = 'screen'
    selectMixBlendMode.style.display = 'inline-block';
  } else {
    selectMixBlendMode.style.display = 'none';
  }
});

/// ####################################
///
/// BACKGROUND COLORS
///
/// ####################################

var bgColor = (function () {
  function bgColor(args) {
    _classCallCheck(this, bgColor);

    this.target = args.target || null;
    this.bgColor = args.bgColor || null;
  }

  _createClass(bgColor, [{
    key: 'apply',
    // / constructor

    value: function apply() {
      // Reset the filter
      this.target.style.backgroundColor = this.bgColor;
    }
  }]);

  return bgColor;
})();

// / bgColor

var bgTarget = document.querySelector('.bg_target');

// var newBgColor = new bgColor({ target : bgTarget });

function backgroundColorChanged() {
  var backgroundColor = document.getElementById('backgroundColorPicker').value;
  bgTarget.style.backgroundColor = backgroundColor;
}

function mixBlendModeChanged() {
  var b = selectMixBlendMode.options[selectMixBlendMode.selectedIndex].value;
  uTarget.style.mixBlendMode = b;
  uTarget.style.webkitMixBlendMode = b;
}

document.getElementById('backgroundColorPicker').addEventListener('change', backgroundColorChanged, false);

selectMixBlendMode.addEventListener('change', mixBlendModeChanged, false);

// VIDEO ZOOM
document.getElementById('main').onclick = function () {

  var className = document.getElementById('main').getAttribute('class');

  if (className == 'zoomed') {
    document.getElementById('main').className = '';
  } else {
    document.getElementById('main').className = 'zoomed';
  }
};

// VIDEO Stripped
document.getElementById('stripped').onclick = function () {

  var className = document.getElementById('target').getAttribute('class');

  if (className == 'stripped') {
    document.getElementById('target').className = '';
  } else {
    document.getElementById('target').className = 'stripped bg_target';
  }
};

// VIDEO dotted
document.getElementById('dotted').onclick = function () {

  var className = document.getElementById('target').getAttribute('class');

  if (className == 'dotted') {
    document.getElementById('target').className = '';
  } else {
    document.getElementById('target').className = 'dotted bg_target';
  }
};

//Presets
document.getElementById('set1').onclick = function () {

  document.getElementById('video-t').style.webkitFilter = ' blur(11px) contrast(100) sepia(0%) grayscale(0%) hue-rotate(0deg) brightness(1)';
};

document.getElementById('set2').onclick = function () {

  document.getElementById('video-t').style.webkitFilter = 'blur(0px) contrast(2) sepia(100%) grayscale(100%) hue-rotate(820deg) brightness(2)';
  document.getElementById('video-t').style.mixBlendMode = 'darken';
  document.getElementById('target').style.backgroundColor = 'rgb(242, 83, 0)';
  document.getElementById('target').className += ' dotted';
};

document.getElementById('set3').onclick = function () {

  document.getElementById('video-t').style.webkitFilter = ' blur(0px) contrast(15) sepia(0%) grayscale(0%) hue-rotate(0deg) brightness(2); opacity: 0.99991999';
  document.getElementById('video-t').style.mixBlendMode = 'color-dodge';
  document.getElementById('target').style.backgroundColor = 'rgb(0, 131, 240)';
  document.getElementById('target').className += ' stripped';
};




 

 document.getElementById('reset').onclick = function () {

  document.getElementById('video-t').style.webkitFilter = ' blur(0px) contrast(1) sepia(0%) grayscale(0%) hue-rotate(0deg) brightness(1)';
  document.getElementById('video-t').style.mixBlendMode = 'normal';
  document.getElementById('target').style.backgroundColor = 'transparent';
  document.getElementById('target').className =' bg_target';
};




 

 