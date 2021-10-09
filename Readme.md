## useInterval
```javaScript 
useInterval(() => {
  console.log(`Hello World~`);
}, 1000);
```

## useLogic
```javaScript 
const { 
  isTrue, 
  isFalse,
  isNull,
  isUndefined,
  isZero,
  isEven,
  isOdd
  } = useLogic();
```

## useMediaQuery
```javaScript 
const isMobile = useMediaQuery("(max-width: 768px)");
const isDesktop = useMediaQuery("(min-width: 768px)");
```