import { Command, CommandContext } from '@discord-ts-app/class-decorator'
import { Message } from 'discord.js'

@Command({ name: 'Example', description: 'Description of example command', tag: 'example', alias: ['e'] })
export default class Example implements CommandContext {
	public async run(message: Message, args: string[]): Promise<void> {
		// Your code here
	}
}
