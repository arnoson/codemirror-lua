# Codemirror 6 + lua language server

## install

`npm run install` (in repository root)

## run

`npm run dev` (in repository root)

The language server should now be running on port 8080 and a codemirror editor
is running on port 3000. Codemirror connects to the language server, but somehow
only displays `Loading workspace (0/0)` when hovering over the lua code.
