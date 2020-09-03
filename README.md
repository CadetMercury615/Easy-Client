# Introduction
EasyClient is a Discord framework using the Eris API Wrapper to create complex bots with fully customizable command handlers, event listeners, and more

## Command Handling
```ts
import EasyClient from 'easy-client';

const prefix = '!'
const client = new EasyClient('Token', {}, prefix, ['522895569039917066']);
client.on('messageCreate', async(msg) => {
    if(msg.content.startsWith(client.cmdHandler.prefix)) {
        let args = msg.content.split(' ');
        client.cmd.runCMD(prefix, client, msg, args)
    }
});
```
## Creating Commands
```ts
import { Message } from "eris";
import BaseCommand from 'easy-client';
import EasyClient from 'easy-client';

class PingCommand extends BaseCommand {
    name = 'ping'; // Framework handles main command name
    aliases = ['pong']; // Framework handles command aliases
    category = 'General'; // Framework handles command categories
    usage = 'z!info'; // Framework handles command usages
    description = 'A command to ping'; // Framework handles command description
    cooldown = 3000; // Framework handles command cooldowns

    async run(client: EasyClient, msg: Message, args: string[]) {
        msg.channel.createMessage('Pong!')
    }
}
export default PingCommand;
```
## Registering Commands
```ts
import PingCommand from './Commands/PingCommand';
import EasyClient from 'easy-client';

const prefix = '!'
const client = new EasyClient('Token', {}, prefix, ['522895569039917066']);

client.cmdHandler.registerCommands([
    PingCommand
]);
```
### NOTE
As this repo is not yet an npm package, all instances of:
```ts
import * from 'easy-client'
```
Should be replaced by the absolute path from the `src/` directory

