import { startLanguageServer } from './index'

const binaries = {
  darwin: 'lua-language-server/.bin/macOS/lua-language-server',
  linux: 'lua-language-server/.bin/Linux/lua-language-server',
  win32: 'lua-language-server/.bin/Windows/lua-language-server.exe',
}

startLanguageServer(8080, 'lua-language-server/bin/lua-language-server')
