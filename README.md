# Word to HTML App

A simple application that converts DOCX files to HTML format using Mammoth.

## Overview

This project leverages the [Mammoth](https://github.com/mwilkinson106/mammoth.js) library to transform Microsoft Word documents (.docx) into clean, semantic HTML.

## Features

- Convert .docx files to HTML
- Preserve document formatting and structure
- Simple and straightforward API

[Livelink](https://wordtohtmlapp.vercel.app/)
[Github](https://github.com/DipakPaudel2056/wordtohtmlapp)

## Installation

```bash
npm install mammoth
```

## Usage

```javascript
const mammoth = require('mammoth');

mammoth.convertToHtml({path: "document.docx"})
    .then(result => {
        console.log(result.value); // HTML string
    })
    .catch(err => console.error(err));
```

## Requirements

- Node.js
- Mammoth library

## License

MIT
