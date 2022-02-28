import { basicSetup, EditorState, EditorView } from '@codemirror/basic-setup'
import { lua } from '@codemirror/legacy-modes/mode/lua'
import { StreamLanguage } from '@codemirror/stream-parser'
import './style.css'
import { languageServer } from 'codemirror-languageserver'

const fileName = 'test.lua'
const luaLanguageServer = languageServer({
  serverUri: `ws://localhost:8080`,
  rootUri: 'file:///',
  documentUri: `file:///${fileName}`,
  languageId: 'lua',
})

new EditorView({
  state: EditorState.create({
    doc: 'function hello() print("hey!") end',
    extensions: [basicSetup, StreamLanguage.define(lua), luaLanguageServer],
  }),
  parent: document.body,
})
