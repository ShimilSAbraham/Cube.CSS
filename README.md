# Cube.CSS

[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)
<br>
[![HTML](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)  &nbsp;
[![CSS](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com) &nbsp;

#### This repository provides information regarding a mini CSS framework aimed to display isometric cubes.

## Getting Started 🍟

#### Copy the link tag given below and paste it in the ```<head>``` section
```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ShimilSAbraham/Cube.CSS@dd2b5f9/cube.css">
```
#### Copy the html code given below and paste it in the ```<body>``` section
```html
<div class="cube">
  <div class="front grey-l"></div>
  <div class="side grey-d"></div>
  <div class="top grey"></div>
</div>
```
<br>

## Colors 👀:
* purple    <img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/img/colors/purple.png" width="28.5" height="30.25"/>
* pink      <img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/img/colors/pink.png" width="30.75" height="30.75"/>
* blue      <img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/img/colors/blue.png" width="26.75" height="29.25"/>
* red       <img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/img/colors/red.png" width="29" height="29"/>
* green     <img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/img/colors/green.png" width="29.25" height="29.25"/>
* orange    <img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/img/colors/orange.png" width="28.25" height="30.25"/>
* indigo    <img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/img/colors/indigo.png" width="27.75" height="30"/>
* grey      <img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/img/colors/grey.png" width="28.25" height="29.75"/>
* pacha     <img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/img/colors/pacha.png" width="28" height="30.25"/>
* yellow    <img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/img/colors/yellow.png" width="29.75" height="31.25"/>

<br>

## Color Usage ✏:

#### The default that I used was: 
* 'color' class along with 'top'
* 'color-l' class along with 'front'
* 'color-d' class along with 'side'

> use '-l' along with color name to get its lighter shade and '-d' for darker shade

### Code:
```html
<div class="cube">
  <div class="front blue-l"></div>
  <div class="side blue-d"></div>
  <div class="top blue"></div>
</div>
```

### Result:
<img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/img/colors/blue.png"/>

> *that doesn't mean you have to stick on with this... let your mind do the work*

<br>

## Hover Effects 🧚‍♂️:
#### There are two effects right now:
* fly
* open

> to make it fly, add these classes t-fly, f-fly, s-fly
> to open it up, add these classes t-open, f-open, s-open

### Code-1:
```html
<div class="cube">
  <div class="top red t-fly"></div>
  <div class="front red-l f-fly"></div>
  <div class="side red-d s-fly"></div>
</div>
```
### Result-1:
<img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/hover-gifs/red-fly.gif" width=140 height=140 />

### Code-2:
```html
<div class="cube">
  <div class="top orange t-open"></div>
  <div class="front orange-l f-open"></div>
  <div class="side orange-d s-open"></div>
</div>
```
### Result-2:
<img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/hover-gifs/orange-open.gif" width=140 height=140 />

> *you can even make your own custom hover by interchanging these hover classes to the div's that u desire*

### Code-3:
```html
<div class="cube">
  <div class="front grey-l f-open"></div>
  <div class="side grey-d s-fly"></div>
  <div class="top grey t-fly"></div>
</div>
```
### Result-3:
<img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/hover-gifs/grey-open.gif" width=140 height=140 />

### Code-4:
```html
<div class="cube">
  <div class="front pacha-l f-fly"></div>
  <div class="side pacha-d s-open"></div>
  <div class="top pacha t-fly"></div>
</div>
```
### Result-4:
<img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/hover-gifs/pacha-open.gif" width=140 height=140 />

### Code-5:
```html
<div class="cube">
  <div class="front purple-l s-fly"></div>
  <div class="side purple-d f-fly"></div>
  <div class="top purple t-open"></div>
</div>
```
### Result-5:
<img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/hover-gifs/purple-fly.gif" width=140 height=140 />

### Code-6:
```html
<div class="cube">
  <div class="front pink-l s-fly"></div>
  <div class="side pink-d t-fly"></div>
  <div class="top pink f-open"></div>
</div>
```
### Result-6:
<img src="https://github.com/ShimilSAbraham/Cube.CSS/blob/main/src/hover-gifs/pink-swirl.gif" width=140 height=140 />

<br>

[![forthebadge](https://forthebadge.com/images/badges/ctrl-c-ctrl-v.svg)](https://forthebadge.com)  &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
<br>
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com) 

***
