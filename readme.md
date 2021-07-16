# react-liquidswipe

A react component build on top of [react-spring](https://www.npmjs.com/package/react-spring) and [react-use-gesture](https://www.npmjs.com/package/react-use-gesture) that improves UX by enabling liquid swipe.

## Demo

![Demo](https://ik.imagekit.io/anishroy/demo/demo_tHVE6jn3f.gif)

## Install

```
npm i react-liquidswipe
```

## Usage

```javascript
import { Liquidswipe } from "react-liquidswipe";

function App() {
  let components = []; // array of JSX

  return <Liquidswipe 
          components={components}
          style={{
            height: "80vh",
            width: "80vw",
            margin: "10vh auto",
            borderRadius: "20px",
          }}
        />
}
```

## Examples

- [serial-number](https://github.com/iamanishroy/react-liquidswipe-examples/tree/main/serial-number)

## Contributors

- [@iamanishroy](https://www.github.com/iamanishroy/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
