angular-pinterest
========

AngularJS directives for Pinterest buttons and widgets

###Demo

To see a demo and further details go to https://www.pointblankdevelopment.com.au/blog/angularjs-directives-for-pinterest-buttons-and-widgets

###Installation

Install using bower: `bower install angular-pinterest`

Alternatively download the code and include the angular-pinterest.js file in your page.

Add the 'angular-pinterest' directive as a dependency of your AngularJS application:

```javascript
angular.module('myApp', ['angular-pinterest']);
```

###Usage

####Pin It Button

Create a 'pin-it' element with attributes for the different settings of the button, values can 
be set directly or viewmodel properties can be used that are set in the controller.

Example

```html
<pin-it url="vm.url" description="vm.description" media="vm.media" config="'above'"></pin-it>
```

```html
<pin-it url="'https://www.pointblankdevelopment.com.au'" description="'Point Blank Development'" media="''https://www.pointblankdevelopment.com.au/images/social_media.jpg''" config="'beside'" size="'large'" color="'white'"></pin-it>
```

```html
<pin-it url="vm.url" description="vm.description" media="vm.media" shape="'round'" size="'large'"></pin-it>
```

####Follow Button

Create a 'pin-follow' element with attributes for Pinterest `username` and `fullname`.

Example

```html
<pin-follow username="'pointblankdev'" fullname="'Point Blank Development'"></pin-follow>
```

####Pin Widget

Create a 'pin-widget' element with an attribute for the `pin-id`.

Example

```html
<pin-widget pin-id="'421790321327787486'"></pin-widget>
```

####Profile Widget

Create a 'pin-profile' element with attributes for Pinterest `username`, `image-width`, `board-height` and `board-width`.

Example

```html
<pin-profile username="'pointblankdev'" image-width="'200'" board-height="'140'" board-width="'250'"></pin-profile>
```

####Board Widget

Create a 'pin-board' element with attributes for Pinterest `username`, `board-name`, `image-width`, `board-height` and `board-width`.

Example

```html
<pin-board username="'pointblankdev'" board-name="'point-blank-development'" image-width="'200'" board-height="'140'" board-width="'250'"></pin-board>
```

