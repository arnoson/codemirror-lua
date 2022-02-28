import * as rpc from 'vscode-ws-jsonrpc'
import * as server from 'vscode-ws-jsonrpc/lib/server'
import { InitializeRequest } from 'vscode-languageserver'

const isInitializeRequest = (message: rpc.RequestMessage) =>
  message.method === InitializeRequest.type.method

export const launch = (socket: rpc.IWebSocket, path: string) => {
  const reader = new rpc.WebSocketMessageReader(socket)
  const writer = new rpc.WebSocketMessageWriter(socket)

  const socketConnection = server.createConnection(reader, writer, () =>
    socket.dispose()
  )
  const serverConnection = server.createServerProcess('Lua', path)
  server.forward(socketConnection, serverConnection, (message) => {
    if (rpc.isRequestMessage(message) && isInitializeRequest(message)) {
      message.params.processId = process.pid
    }
    return message
  })
}
