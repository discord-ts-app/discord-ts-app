import Ignitor from '..'
import Command from '@discord-ts-app/core/build/Interfaces/Command'
import Event from '@discord-ts-app/core/build/Interfaces/Event'
import Middleware from '@discord-ts-app/core/build/Interfaces/Middleware'

function useCommands(): Array<Command> {
	return Ignitor.bot.commands
}

function useEvents(): Array<Event> {
	return Ignitor.bot.events
}

function useMiddleware(): Array<Middleware> {
	return Ignitor.bot.middlewares
}

export { useCommands, useEvents, useMiddleware }
