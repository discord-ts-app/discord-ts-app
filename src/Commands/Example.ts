import { Command } from '@discord-ts-app/class-decorator'
import Roles from 'App/Configurations/Roles'
import { Message } from 'discord.js'

@Command({ name: 'Example', description: 'Description of example command', tag: 'example', alias: ['e'], roles: [Roles.EXAMPLE] })
export default class Example {
	public async run(message: Message, args: string[]): Promise<void> {
		// Your code here
	}
}
