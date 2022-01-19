// Задача 1. Усовершенствуйте кэширующий декоратор;

function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash === hash)
    if (idx > -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    }
      let result = func(...args);
      cache.push({'hash' : hash, 'value' : result});
      if (cache.length > 5) {
       cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
  }
  return wrapper;
};

// Задача 2. Debounce декоратор с моментальным вызовом;

function debounceDecoratorNew(func, ms) {
  let timeout;
  let checkFunc = true; 
  return function(...args) {
    clearTimeout(timeout)
   if(checkFunc === true) { 
   func(...args);
  }
  checkFunc = false;
  timeout = setTimeout(() => { 
  func.apply(this, args)
  }, ms);
  }
};
  
// Задача 3. Усовершенствуйте debounceDecoratorNew;

function debounceDecorator2(func) {
  let timeout;
  let checkFunc = true;
  wrapper.count = 0;
  function wrapper(...args) {
    clearTimeout(timeout)
    if(checkFunc === true) { 
    func(...args);
    wrapper.count += 1;
   }
   checkFunc = false;
   timeout = setTimeout(() => { 
   func.apply(this, args);
   }, ms);
  }
  return wrapper;
};