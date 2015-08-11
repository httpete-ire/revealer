![revealer](https://cloud.githubusercontent.com/assets/1556430/8511629/36122bdc-2319-11e5-8114-e2aa97a88cb1.jpg)

Angular directive that allows two images to be layered on top of each other and compared using a slider, [view demo](http://httpete.com/revealer/). Based on [cody house's](http://codyhouse.co/gem/css-jquery-image-comparison-slider/) jQuery version

##Documentation

Include revelaer module source file in html

```html
 <script src="path/to/revealer.js"></script>
```

Mark the revealer module as a dependecy of your angular app


```javascript
angular.moudle('myApp', ['revealer']);
```


Then declare the revealer directive in your html.

```html
<revealer topimage="top.png" toplabel="Top Image" bottomimage="bottom.png" bottomlabel="Bottom Label"></revealer>
```

Alternatively,

```html
<revealer top-image="top.png" top-label="Top Image" bottom-image="bottom.png" bottom-label="Bottom Label"></revealer>
```

###Directive attributes


####topimage

````
topimage="top.png"
````

Path of image to appear on the top layer. This is the image that is revealed

####bottomimage

````
bottomimage="bottom.png"
````

Path of image to appear on the bottom layer

####toplabel (optional)

````
toplabel="Top Image"
````

Label to appear on the top image

####bottomlabel (optional)

````
bottomlabel="Bottom Label"
````

Label to appear on the bottom image

####start-position (optional)

````
start-position="60"
````

set the start position of the revealer in percentage (default : 50)

# Change log

#### 0.1.2
* fix release listener issue [#11](/../../issues/11)

#### 0.1.1
* fix offset issue #6
* updated gulp task to output to a single destination

#### 0.0.1
* intital release

# License

MIT
