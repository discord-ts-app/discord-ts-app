import { Middleware, Lifecycles, MiddlewareContext } from '@discord-ts-app/class-decorator'

@Middleware({ lifecycle: Lifecycles.COMMAND_RECEIVED })
export default class Example implements MiddlewareContext {
	public async run(): Promise<void> {
		// Your code here
	}
}
