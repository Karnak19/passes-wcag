[![Greenkeeper badge](https://badges.greenkeeper.io/Karnak19/passes-wcag.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/Karnak19/passes-wcag.svg?branch=master)](https://travis-ci.org/Karnak19/passes-wcag)

# Passes WCAG

Typescript version, forked from [misund/passes-wcag](https://github.com/misund/passwes-wcag).

Evaluate whether two colors have sufficient contrast to pass WCAG requirements.

Doesn't handle transparency as of yet.

## Installation

```sh
npm i passes-wcag
```

## Usage

```js
import {
  passesWcagAaLargeText,
  passesWcagAa,
  passesWcagAaa,
} from "passes-wcag";

passesWcagAa("black", "#fff"); // true
passesWcagAaLargeText("rgb(1, 1, 1)", "rgb(250, 248, 247)"); // true
passesWcagAaa("black", "rgb(0, 0, 0)"); // false
```

## Signature

```
passesWcagAaLargeText(color1: string, color2: string) => boolean
passesWcagAa(color1: string, color2: string) => boolean
passesWcagAaa(color1: string, color2: string) => boolean
```

## Contributing

I appreciate your issues and PRs [on Github](https://github.com/misund/passes-wcag)!

### Testing

```
yarn build && yarn test
```

### Releasing

This project uses [np](https://github.com/sindresorhus/np).

1. Make sure your changes are in master
2. Run `yarn release`
3. Follow the interactive release guide
