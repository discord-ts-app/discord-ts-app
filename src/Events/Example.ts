import { Event, EventContext } from '@discord-ts-app/class-decorator'

@Event('ready')
export default class Example implements EventContext {
	public async run(): Promise<void> {
		// Your code here
	}
}
