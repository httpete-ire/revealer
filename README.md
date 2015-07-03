# Revealer

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
