# throttle-by-raf
Create throttle function by requestAnimationFrame

```js
function handler() {
  console.log('this should trigger once per RAF frame')
}

$('html').mousemove(throttleByRAF(handler))
```
