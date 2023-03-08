import { REST,Routes, Collection} from 'discord.js'
import fg from 'fast-glob'
import {useAppStore} from '@/store/app'

const updateSlashCommands = async(commands,GuildId)=>{
    const rest = new REST({version:10}).setToken(process.env.TOKEN)
    const result = await rest.put(
        Routes.applicationGuildCommands(
            process.env.APPLICATION_ID,
            GuildId = '1069499263630970919'
        ),
        {
            body:commands,
        },
    )
}

export const loadCommands = async () => {
    const appStore = useAppStore()
    const commands = []
    const actions = new Collection()
<<<<<<<< HEAD:YaeMiko/core/loader.js
    const files = await fg('./YaeMiko/commands/**/index.js')
========
    const files = await fg('./paimon/commands/**/index.js')
>>>>>>>> 5da6b3caf3ad530f264878a053e7d08365b03541:paimon/core/loader.js

    for (const file of files){
        const cmd = await import(file)
        commands.push(cmd.command)
        actions.set(cmd.command.name, cmd.action)
    }

    await updateSlashCommands(commands)
    appStore.commandsActionMap = actions

    console.log(appStore.commandsActionMap)
}

export const loadEvents = async() => {
    const appStore = useAppStore()
    const client = appStore.client
<<<<<<<< HEAD:YaeMiko/core/loader.js
    const files = await fg('./YaeMiko/events/**/index.js')
========
    const files = await fg('./paimon/events/**/index.js')
>>>>>>>> 5da6b3caf3ad530f264878a053e7d08365b03541:paimon/core/loader.js
    for (const file of files){
        const eventFile = await import(file)

        if(eventFile.event.once){
            client.once(
                eventFile.event.name,
                eventFile.action
            )
        }
        else{
            client.on(
                eventFile.event.name,
                eventFile.action
            )
        }
    }
}