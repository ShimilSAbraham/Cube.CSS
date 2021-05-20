# Cube.CSS
### The link to this css file is given below:
```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ShimilSAbraham/Cube.CSS@dd2b5f9/cube.css">
```
### To use this in your html, type in the following code:
```html
<div class="cube">
  <div class="front grey-l"></div>
  <div class="side grey-d"></div>
  <div class="top grey"></div>
</div>
```
### Colors that are available:
* purple
* pink
* blue
* red
* green
* orange
* indigo
* grey
* pacha
* yellow

> use '-l' along with color name to get its lighter shade and '-d' for darker shade
***

### Using the colors with the cube faces:
> The default that I used was: 
* 'color' class along with 'top'
* 'color-l' class along with 'front'
* 'color-d' class along with 'side'
```html
<div class="cube">
  <div class="front blue-l"></div>
  <div class="side blue-d"></div>
  <div class="top blue"></div>
</div>
```
> *that doesn't mean you have to stick on with this... let your mind do the work*
***
### Hover Effects:
> There are two effects right now:
> * fly
> * open

* to make it fly, add these classes t-fly, f-fly, s-fly
* to open it up, add these classes t-open, f-open, s-open

```html
<div class="cube">
     <div class="top grey t-open"></div>
    <div class="front grey-l f-open"></div>
    <div class="side grey-d s-open"></div>
    </div>
```

> *you can even make your own custom hover by interchanging these hover classes to the div's that u desire*
> For example:
```html
<div class="cube">
  <div class="front purple-l s-fly"></div>
  <div class="side purple-d f-fly"></div>
  <div class="top purple t-open"></div>
</div>
```
***


