import { Middleware, MiddlewareContext } from '@discord-ts-app/class-decorator'

@Middleware('messageReceived')
export default class Example implements MiddlewareContext {
	public async run(): Promise<void> {
		// Your code here
	}
}
