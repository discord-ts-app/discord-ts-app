import { Event, Events, Command, Middleware, Lifecycles, Unused } from '@discord-ts-app/function-decorator'
import { Message } from 'discord.js'

export default class Module {
	@Event({ type: Events.MESSAGE })
	public async event(message: Message) {
		// Your code here
	}

	@Command({ name: 'Command', description: 'Description of command', tag: 'command', alias: ['c'] })
	public async command() {
		// Your code here
	}

	@Middleware({ lifecycle: Lifecycles.MESSAGE_RECEIVED })
	public async middleware() {
		// Your code here
	}
}
