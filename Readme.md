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

## useFlatMap

```javaScript
interface CategoryProps {
  category: string;
  movies: MoviesProps[];
}

interface MoviesProps {
  name: string;
  rating: number;
}

  const data: CategoryProps[] = [
    {
      category: "drama",
      movies: [{ name: "It's Okay to not be Okay", rating: 4.0 }]
    },
    {
      category: "romantic",
      movies: [
        { name: "Titanic", rating: 5.0 },
        { name: "Titanic", rating: 5.0 },
        { name: "Titanic", rating: 5.0 },
        { name: "Titanic", rating: 5.0 },
        { name: "Titanic", rating: 5.0 },
        { name: "Titanic", rating: 5.0 }
      ]
    }
  ];

  const res = useFlatMap<CategoryProps[], MoviesProps[]>(data, "movies");
```
