import { Event, Command, Middleware, Lifecycles } from '@discord-ts-app/function-decorator'
import { Message } from 'discord.js'

export default class Module {
	@Event('ready')
	public async event(message: Message): Promise<void> {
		// Your code here
	}

	@Command({ name: 'Command', description: 'Description of command', tag: 'command', alias: ['c'] })
	public async command(): Promise<void> {
		// Your code here
	}

	@Middleware({ lifecycle: Lifecycles.MESSAGE_RECEIVED })
	public async middleware(): Promise<void> {
		// Your code here
	}
}
