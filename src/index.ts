import 'module-alias/register'
import Ignitor from '@discord-ts-app/ignitor'
import { NodeEmitter } from '@discord-ts-app/lifecycle'

export default new Ignitor(__dirname)

// Ignitor.core.middlewares.forEach(({ lifecycle, run }: any) => NodeEmitter.on(lifecycle, (params?: any) => run(...params)))
// Ignitor.core.middlewares.forEach(({ lifecycle, run }: any) => NodeEmitter.on(lifecycle, async (params?: any) => await run(params)))

// NodeEmitter.on('messageReceived', () => console.log(1))
// NodeEmitter.on('commandReceived', () => console.log(2))
