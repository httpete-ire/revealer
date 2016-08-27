#Revealer

![revealer](https://cloud.githubusercontent.com/assets/1556430/9289557/edcbd1c4-436c-11e5-8bb4-5de517ab6136.gif)

Angular directive that allows two images to be layered on top of each other and compared using a slider, [demo](http://httpete.com/revealer/) or [scroll demo](http://httpete.com/revealer/scroll).

#Documentation

Include revelaer module source file in html

```html
 <script src="path/to/revealer.js"></script>
```

Mark the revealer module as a dependecy of your angular app


```javascript
angular.module('myApp', ['revealer']);
```


Then declare the revealer directive in your html.

```html
<revealer top-image="top.png" top-label="Top Image" bottom-image="bottom.png" bottom-label="Bottom Label"></revealer>
```

## Options

* [top-image](#top-image)
* [bottom-image](#bottom-image)
* [top-label](#top-label-optional)
* [bottom-label](#bottom-label-optional)
* [start-position](#start-position-optional)
* [on-complete](#on-complete-optional)
* [page-scroll](#page-scroll-optional)
* [page-offset](#page-offset-optional)

####top-image
Path of image to appear on the top layer. This is the image that is revealed

````
top-image="top.png"
````

####bottom-image
Path of image to appear on the bottom layer

````
bottom-image="bottom.png"
````


####top-label (optional)
Label to appear on the top image

````
top-label="Top Image"
````


####bottom-label (optional)
Label to appear on the bottom image

````
bottom-label="Bottom Label"
````


####start-position (optional)
set the start position of the revealer in percentage (default : 50)

````
start-position="60"
````


####on-complete (optional)
if set on the scope, this function will be invoked when the drag action has complete

````
on-complete="vm.onComplete('called from the controller')"
````

####scroll (optional)

Set postion of the revealer on scroll, the revealer will only happen when the element is in the windows viewport.

*note* when set the start-postion will be 0

````
scroll="true"
````

####scroll-offset (optional)

change the trigger location of the scroll functionality

````
scroll-offset="500"
````

# Change log

#### 1.0.0
* throttle function [#8](/../../issues/8)
* page-scroll functionality [#10](/../../issues/10)
* updated documentation

**breaking changes**

* removed topimage, bottomimage, toplabel, bottomlabel

#### 0.1.4
* support UMD [#7](/../../issues/7)

#### 0.1.3
* updated revealer tests
* onComplete function fature added [#9](/../../issues/9)
* updated documentation

#### 0.1.2
* fix release listener issue [#11](/../../issues/11)

#### 0.1.1
* fix offset issue #6
* updated gulp task to output to a single destination

#### 0.0.1
* intital release

# License

MIT
