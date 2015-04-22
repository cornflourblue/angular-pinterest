angular-pinterest
========

AngularJS directives for Pinterest buttons and widgets 

###Demo

*Coming soon*

###Installation

Install using bower: `bower install angular-pinterest`

Alternatively download the code and include the angular-pinterest.js file in your page.

Add the 'angular-pinterest' directive as a dependency of your AngularJS application:

```javascript
angular.module('myApp', ['angular-pinterest']);
```

###Usage


####Pinterest Button

Create a 'pin-it' element with attributes for the different settings of the button

For example

```html
<pin-it url="vm.url" description="vm.description" media="vm.media" config="'above'"></pin-it>
```

```html
<pin-it url="vm.url" description="vm.description" media="vm.media" config="'beside'" size="'large'" color="'white'"></pin-it>
```

```html
<pin-it url="vm.url" description="vm.description" media="vm.media" shape="'round'" size="'large'"></pin-it>
```
