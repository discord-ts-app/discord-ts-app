import { Event, Events, EventContext } from '@discord-ts-app/class-decorator'

@Event({ type: Events.READY })
export default class Example implements EventContext {
	public async run(): Promise<void> {
		// Your code here
	}
}
