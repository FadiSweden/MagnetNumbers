# Magnet Input Number Plugin
Copyright (c) 2018, flowernet.se Plugins authors.
All rights reserved.

Authorized by (c) 2018 Fadi Nemer
Email: fn.nemer@gmail.com
Twitter: https://twitter.com/f_nimer

A [Magnet Numbers](http://flowernet.se/magnetnumbers/) plugin that customize inputs type number and support cross browsers. as all jquery plugins it must be under the jquery script file.

Please notice that you have to give a class for each container (div) separately.

## Usage

```html
<html>
  <head>
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script src="1.0.0/js/magnetnumbers.js"></script>
  </head>

  <body>
    <div class="MagnetQuantityElm">
      <button type="button" class="sub MagnetStepDownBtn btn btn-lg btn-outline-success"> - </button>
      <h1 class="card-title pricing-card-title">
        <span class="Count">
          <input class="counter MagnetInputNum" type="number" step="2" size="2" maxlength="2" value="0" min="0" max="20">
        </span>
      </h1>
      <button type="button" class="add MagnetStepUpBtn btn btn-lg btn-outline-success"> + </button>
    </div>

  </body>
</html>
```

There's also a [demo page](index.html).

### Plugin parameters

The plugin css classes:

- container: div class should be used (class: `MagnetQuantityElm`).
- input: the input must be Type number and given also class to use (class: `MagnetInputNum`).
- input: the input must include the following attributes (step, min, max).
- input attr step: allows you to decide the quantity for each time ADDITION or SUBSTRUCTION.
- input attr min: allows you to decide the minimum of the quantity.
- input attr max: allows you to decide the maximum of the quantity.
- button step down: class to use (class: `MagnetStepDownBtn`).
- button step up: class to use (class: `MagnetStepUpBtn`).
