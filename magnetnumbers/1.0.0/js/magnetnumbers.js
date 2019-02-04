/*!
  * Copyright (C) Fadi Nemer 2019
  * Email: fn.nemer@gmail.com
  * Twitter: https://twitter.com/f_nimer
  * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
  */
$('.MagnetQuantityElm').each(function() {
  var MagnetSpinner = $(this),
  MagnetInput = MagnetSpinner.find('.MagnetInputNum'),
  MagnetStepUpBtn = MagnetSpinner.find('.MagnetStepUpBtn'),
  MagnetStepDownBtn = MagnetSpinner.find('.MagnetStepDownBtn'),
  min = parseFloat(MagnetInput.attr('min')),
  max = parseFloat(MagnetInput.attr('max')),
  step = parseFloat(MagnetInput.attr('step'));

  MagnetStepUpBtn.click(function() {
    var oldValue = parseFloat(MagnetInput.val());
    if (oldValue < min) {
      var newVal = min;
    }
    else if (oldValue + step > max) {
      var newVal = max;
    }
    else if (oldValue >= max) {
      var newVal = max;
    }
    else if(isNaN(oldValue)){
      var newVal = step;
    }
    else {
      var newVal = oldValue + step;
    }
    MagnetSpinner.find(MagnetInput).val(newVal);
    MagnetSpinner.find(MagnetInput).trigger("change");
  });

  MagnetStepDownBtn.click(function() {
    var oldValue = parseFloat(MagnetInput.val());
    if (oldValue > max) {
      var newVal = max;
    }
    else if (oldValue - step < min) {
      var newVal = min;
    }
    else if (oldValue <= min) {
      var newVal = min;
    }
    else if(isNaN(oldValue)){
      var newVal = step;
    }
    else {
      var newVal = oldValue - step;
    }
    MagnetSpinner.find(MagnetInput).val(newVal);
    MagnetSpinner.find(MagnetInput).trigger("change");
  });

});
//End Custom Magnet input number plugIn
