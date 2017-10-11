[build-badge]: https://img.shields.io/travis/JoaoCnh/react-fuse-picker/master.png?style=flat-square
[build]: https://travis-ci.org/JoaoCnh/react-fuse-picker

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://coveralls.io/repos/github/JoaoCnh/react-fuse-picker/badge.svg?branch=master&style=flat-square
[coveralls]: https://coveralls.io/github/JoaoCnh/react-fuse-picker

# react-fuse-picker

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## react-fuse-picker is a ready to use Fuzzy Search (using fuse.js) Picker.

### This component was inspired by [react-fuzzy-picker](https://github.com/1egoman/fuzzy-picker)

### For the fuzzy search part this component uses [Fuse.js](http://fusejs.io/)

If all you need is a straight out of the box solution for fuzzy search, this is a great choice.

## Installation

Add react-fuse-picker to your project

```shell
yarn add react-fuse-picker
```

**Table of Contents**

- [Usage](#usage)
- [Demo](#demo)
- [Importing Styles](#importing-styles)
- [API](#api)
    - [`<FusePicker />`](#fuse-picker-)
    - [`<FuseBox />`](#fuse-box-)

## Usage

### Embedded Picker (fixed input)

```js
<FusePicker
    isOpen={true}
    items={yourItems}
    renderItem={item => item.title}
    onChange={item => alert(`Chose: ${item.title}`)}
    fuseOptions={yourfuseOptions}
/>
```

### Callable Picker (using `ctrl+s` command)

```js
<FuseBox
    isKeyPressed={() => event.keyCode === 83 && event.ctrlKey}
    popup={(isOpen, onClose) => (
        <FusePicker
        isOpen={isOpen}
        onClose={onClose}
        renderItem={item => item.title}
        onChange={item => alert(`Chose: ${item.title}`)}
        items={JSON.parse(this.state.items)}
        fuseOptions={this.state.fuseOptions}
        />
    )}
/>
```

## Demo

You can also try out the [demo](https://joaocnh.github.io/react-fuse-picker)

## Importing styles
```scss
@import "node_modules/react-fuse-picker/umd/main.css";
```

## API

### `<FusePicker />`

`<FusePicker />` is the component that controls the picker behaviour