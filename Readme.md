# utils-lazy-hook

## Lib

[https://www.npmjs.com/package/utils-lazy-hook](https://www.npmjs.com/package/utils-lazy-hook)

## How to use

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
import {useMediaQuery , breakpoints} from 'utils-lazy-hook'

const isMobile = useMediaQuery("(max-width: 768px)")
const isDesktop = useMediaQuery("(min-width: 768px)")
//or
/*
  DEFAULT breakpoints
  up: {
    mobile: '(min-width: 0px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024x)',
  },
  down: {
    mobile: '(max-width: 0px)',
    tablet: '(max-width: 768px)',
    desktop: '(max-width: 1024x)',
  },
*/
const isTablet = useMediaQuery(breakpoints.up.tablet)
```

## useFlatMap

```typeScript
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

```typeScript
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
    },
    {
      name: "Sanji",
      email: "sanji@gmail.com",
      total_score: 18
    }
  ];

const profileSorted = useSortRanking<any[], string>(profiles, "total_score");

example result: {
  [
  {
    name: 'Lufy',
    email: 'lufy@gmail.com',
    total_score: 30,
    ranking: 1
  },
  {
    name: 'Zoro',
    email: 'zoro@gmail.com',
    total_score: 18,
    ranking: 2
  },
  {
    name: 'Sanji',
    email: 'sanji@gmail.com',
    total_score: 18,
    ranking: 2
  }
]
}
```

## useRandomString

```typeScript
  const value = useRandomString()
```

## useOmit

```javaScript
const omitResult = useOmit({a: '1', b: '2', c: '3'}, ['a']);

example omitResult = {
  b: '2',
  c: '3'
}
```

## useMinMax

```javaScript
const { findMin,findMax } = useMinMax();
const minNumber = findMin([1,2,3]) // 1
const maxNumber = findMax([1,2,3]) // 3
```

## useEmailRegex

```javaScript
const email = 'abc@mail.com'
const {isEmail} = useEmailRegex()
console.log(isEmail(email))
// true
```

## useOnReachBottom

```javaScript
import { useState } from 'react'
import { useOnReachBottom } from 'utils-lazy-hook';

function App() {
  const [data, setData] = useState(['Item 0']);

  const elemRef = useOnReachBottom(() => loadMore());

  const getData = (offset: number, limit: number) => {
    return Array.from(new Array(limit)).map((_, i) => `Item ${offset + i}`);
  }

  const loadMore = () => {
    setData(prevData => {
      const total = prevData.length;
      const result = getData(total, 10);
      return [
        ...prevData,
        ...result
      ]
    })
  }

  return (
    <div ref={ref => elemRef.current = ref}>
      {
        data.map((item) => (
          <p key={item}>{item}</p>
        ))
      }
    </div>
  )
}

export default App
```

## useWindowSize

```javaScript

interface MinMaxPair{
  minSize:number
  maxSize:number
}

 const { width, height } = useWindowSize()
 const size: MinMaxPair = [width * 0.6 - 300, height * 0.6 - 200]

```

## usePagination

```typeScript
  import { usePagination } from "utils-lazy-hook";
  export default function App() {
    const {
      page,
      pages,
      nextPage,
      backPage,
      haveBackPage,
      haveNextPage
    } = usePagination({
      limit: 10,
      total: 50
    });
    return (
      <div className="App">
        <h1>
          {page} / {pages}
        </h1>
        <button onClick={backPage}>backPage</button>
        <button onClick={nextPage}>nextPage</button>
        <div>
          <div>haveBackPage : {haveBackPage ? "true" : "false"}</div>
          <div>haveNextPage : {haveNextPage ? "true" : "false"}</div>
        </div>
      </div>
    );
  }
```

## useRandomToken

```typeScript
  import { useRandomToken } from "utils-lazy-hook";

  export default function App() {
    return (
      <div className="App">
        <h1>
          {useRandomToken(32, true)}
        </h1>
      </div>
    );
  }
```

## useDevice

```typeScript
  import { useDevice, Device } from "utils-lazy-hook";

  function App() {
    const device = useDevice();

    return (
        <div>
          {device === Device.Desktop ? (
            <div>This is desktop version</div>
          ) : (
            <div>This is mobile version</div>
          )}
        </div>
    )
  }

  export default App
```