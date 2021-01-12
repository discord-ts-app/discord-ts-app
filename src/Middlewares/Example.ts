import { Middleware, Lifecycles } from '@discord-ts-app/class-decorator'

@Middleware({ lifecycle: Lifecycles.MESSAGE_RECEIVED })
export default class Example {
	public async run(): Promise<void> {
		// Your code here
	}
}
