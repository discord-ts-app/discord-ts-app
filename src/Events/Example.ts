import { Event, Events } from '@discord-ts-app/class-decorator'

@Event({ type: Events.READY })
export default class Example {
	public async run(): Promise<void> {
		// Your code here
	}
}
