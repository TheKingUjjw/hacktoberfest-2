# utils-lazy-hook

## Lib

[https://www.npmjs.com/package/utils-lazy-hook](https://www.npmjs.com/package/utils-lazy-hook)

##How to use

```bash
npm i utils-lazy-hook or yarn add utils-lazy-hook
```
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
## useSortRanking

```javaScript
  const profiles: any[] = [
    {
      name: "Lufy",
      email: "lufy@gmail.com",
      total_score: 30
    }, 
    {
      name: "Zoro",
      email: "zoro@gmail.com",
      total_score: 18
    }
    {
      name: "Sanji",
      email: "sanji@gmail.com",
      total_score: 18
    }
  ];

const profileSorted = useSortRanking<any[], string>(profiles, total_score);
```