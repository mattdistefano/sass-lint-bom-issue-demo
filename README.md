# Demo of issues with @mixin in conjunction w/ utf8 BOM

`gulp lint:sass` will correctly lint each file.
`npm run lint:sass` (which calls `sass-lint`) will fail on `starts-with-mixin-utf8-bom.scss` but will correctly lint all others.
