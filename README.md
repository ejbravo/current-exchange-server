# Current Exchange from SNB / current-exchange-server

## Description
* An application for presenting current exchange rates from SNB (backend)
* Project status: prototype

## Table of contents
>   * [Description](#description)
>   * [Table of contents](#table-of-contents)
>   * [Installation](#installation)
>   * [Usage](#usage)
>   * [Code](#code)
>     * [Requirements](#requirements)
>     * [Build](#build)
>   * [Resources](#resources)
>   * [License](#license)

## Installation

Use
```npm install```
or
```yarn install```

## Usage

After installing use
```npm start```
or
```yarn start```

- Application downloads exchange rates fils by demand (pressing "reload" button)
- Application parses downloaded file and presents results in a table (columns in table are date, EUR, USD, JPY and GBP)
- User can select specific date to show results for EUR, USD, JPY, GPB.

## Code

This repository contents a compiling production version of frontend application, which was made with react framework.
For more information see the [frontend repository](https://github.com/ejbravo/current-exchange)

### Requirements

All dependencies will be installed using the package.json file

### Build

```npm run build```
or
```yarn build```

## Resources

Main external libraries:
- [xlsx](https://www.npmjs.com/package/xlsx)
- [express](https://www.npmjs.com/package/express)

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)
