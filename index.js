function throttleByRAF(fn) {
  var raf;
  return function throttleByRAF_throttler(){
    var args = arguments;
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(function throttleByRAF_handler(){
      fn.apply(args);
    });
  }
}
