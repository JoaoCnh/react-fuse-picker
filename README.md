[build-badge]: https://img.shields.io/travis/JoaoCnh/react-fuse-picker/master.png?style=flat-square
[build]: https://travis-ci.org/JoaoCnh/react-fuse-picker

[npm-badge]: https://badge.fury.io/js/react-fuse-picker.svg
[npm]: https://www.npmjs.org/package/react-fuse-picker

[coveralls-badge]: https://coveralls.io/repos/github/JoaoCnh/react-fuse-picker/badge.svg?branch=master&style=flat-square
[coveralls]: https://coveralls.io/github/JoaoCnh/react-fuse-picker

# react-fuse-picker

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]
[![license](http://img.shields.io/npm/l/react-loki.svg)](./LICENSE)

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
    - [`<FusePicker />`](#fusepicker-)
        - [FusePicker props](#fusepicker-props)
            - [`items: array`](#items-array-)
            - [`maxDisplay: integer`](#maxdisplay-integer-)
            - [`cycleToTop: boolean`](#cycletotop-boolean-)
            - [`fuseOptions: object`](#fuseoptions-object-)
            - [`onChange: function`](#onchange-function-)
            - [`onClose: function`](#onclose-function-)
            - [`renderItem: function`](#renderitem-function-)
            - [`renderInfo: function`](#renderinfo-function-)
            - [`itemValue: function`](#itemvalue-function-)
    - [`<FuseBox />`](#fusebox-)
        - [FuseBox props](#fusebox-props)
            - [`isKeyPressed: function`](#iskeypressed-function-)
            - [`popup: function`](#popup-function-)

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
        items={yourItems}
        fuseOptions={yourFuseOptions}
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

#### FusePicker props

##### `items: array`

The items on which the fuzzy search will be applied.

##### `maxDisplay: integer`

The maximum number of results displayed by the picker.

##### `cycleToTop: boolean`

If `true` when the user goes to the last result and navigates further down, it goes back to the first result.

##### `fuseOptions: object`

The object containing all Fuse.js configuration. For more info visit [Fuse.js](http://fusejs.io/)

##### `onChange: function`

Callback for when the user selects an option. It receives the `item` as param.

##### `onClose: function`

Callback for when the user closes the picker.

##### `renderItem: function`

Function that will render each single result item.

##### `renderInfo: function`

Function that will render the info/instructions of the picker on top of the input.
Create your own and return `null` if you don't want any info.

##### `itemValue: function`

Function that allows you to customize the return value of the picker. By default it returns the whole item (object) but you can customize it if you so desire.

### `<FuseBox />`

`<FuseBox />` is the component that will wrap a `<FusePicker />` in order to show it on command press.

#### FuseBox props

##### `isKeyPress: function`

Function that will check if the right command was pressed in order to show the picker.

You can define any kind of combination of key events you want.

##### `popup: function`

Function in which you must render out your `<FusePicker />`. Check the demo above to see how!