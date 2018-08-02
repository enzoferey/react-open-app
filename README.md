# react-open-app

[![Build Status](https://travis-ci.org/enzoferey/react-open-app.svg?branch=master)](https://travis-ci.org/enzoferey/react-open-app)

Open your users native apps using deep links

## Install

`npm install --save react-open-app`

## Usage

```jsx
import OpenApp from "react-open-app";

const App = () => (
  <div className="App">
    <h1>Hello World</h1>
    <OpenApp href="https://twitter.com/enzo_ferey">Twitter</OpenApp>
  </div>
);
```

This library uses my library [url-to-deep-link](https://github.com/enzoferey/url-to-deep-link) to transform URLs into deep links. If you want to redirect your users to a non supported app you can do it throught `android` and `ios` props:

```jsx
import OpenApp from "react-open-app";

const App = () => (
  <div className="App">
    <h1>Hello World</h1>
    <OpenApp
      href="https://mycoolappwebsite.com"
      android="whatever deep link you need on Android"
      ios="whatever deep link you need on iOS"
    >
      My app
    </OpenApp>
  </div>
);
```

## Props

| Name          | Type      | Description                                                |
| ------------- | --------- | ---------------------------------------------------------- |
| **`href`**    | `String`  | The URL to be opened in the user's apps                    |
| **`android`** | `String`  | Custom deep link for Android devices to be used            |
| **`ios`**     | `String`  | Custom deep link for iOS devices to be used                |
| **`blank`**   | `Boolean` | Should the URL be open in another window in fallback case. |

Any other prop will be passed down to the underlying `<a>` tag.

## Test

`npm run test`

## Build (webpack)

`npm run build`

## License

MIT
