import EasyClient from '../src/Client/EasyClient';
import PingCommand from './PingCommand';
import TestCommand from './TestCommand';

const client = new EasyClient('Token', {}, '!', ['522895569039917066']);

client.connect();
client.cmdHandler.registerCommands([
    PingCommand,
    TestCommand,
]);
client.on('ready', () => {
    console.log('ready')
})

client.on('messageCreate', async(msg) => {
    if(msg.content.startsWith(client.cmdHandler.prefix)) {
        let args = msg.content.split(' ');
        await client.cmdHandler.runCMD(client, msg, args);
    }
})