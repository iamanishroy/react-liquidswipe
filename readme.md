# react-liquidswipe

A react component build on top of [react-spring](https://www.npmjs.com/package/react-spring) and [react-use-gesture](https://www.npmjs.com/package/react-use-gesture) that improves UX by enabling liquid swipe.

## Demo

![Demo](https://ik.imagekit.io/anishroy/demo/demo_tHVE6jn3f.gif)

[Live](https://lqsw.netlify.app/)

## Install

```
npm i react-liquidswipe
```

## Usage

```javascript
import LiquidSwipe from 'react-liquidswipe';

function App() {
  let components = []; // array of JSX

  return (
    <Liquidswipe
      components={components}
      style={{
        height: '80vh',
        width: '80vw',
        margin: '10vh auto',
        borderRadius: '20px',
      }}
    />
  );
}
```

## Examples

- [serial-number](https://github.com/iamanishroy/react-liquidswipe-examples/tree/main/serial-number)

## Contributors

- [@iamanishroy](https://www.github.com/iamanishroy/)

## Support

Please [open an issue](https://github.com/iamanishroy/gulp-wasm/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/iamanishroy/gulp-wasm/compare/).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
