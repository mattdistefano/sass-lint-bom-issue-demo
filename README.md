# Demo of issues with @mixin in conjunction w/ utf8 BOM

`gulp lint:sass` will correctly lint each file.

`npm run lint:sass` (which calls `sass-lint`), on the other hand...

- will fail on `starts-with-mixin-utf8-bom.scss`: `1:1  error  Please check validity of the block starting from line #1  Fatal`
- will produce a bogus error on `var-utf8-bom.scss`: `1:1   warning  Property ``$my-color`` appears to be spelled incorrectly`
