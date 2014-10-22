angular-gsframe
=======================

An image frame overlay for AngularJS

Screenshot:

![Screenshot](/screenshot.png?raw=true "gsframe in action")

### Installation via Bower:

```
$ bower install angular-gsframe --save
```

### Usage:

Add "ui.gsframe" to your modules list. Then you can use it like follows:

```
<gsframe
    src="img"                (model variable)
    frame-src="frame.png"
    height="100px"
    width="120px"
    size="100%"
    position="50% 50%"
    repeat="no-repeat"
></gsframe>
```

See index.html for examples and how it works.

### Testing:

Start web server e.g. via Python:
```
$ python -m SimpleHTTPServer 8000
```

Start Karma E2E tests (has to be installed globally before):
```
$ karma start
```

### License

Copyright (c) 2014 Sebastian Hammerl, Getslash GmbH

Licensed under the MIT License