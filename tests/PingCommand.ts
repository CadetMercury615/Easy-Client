
import { Message } from "eris";
import BaseCommand from '../src/Commands/BaseCommand';
import EasyClient from '../src/Client/EasyClient';

class PingCommand extends BaseCommand {
    name = 'ping';
    aliases = ['pong'];
    category = 'General';
    usage = 'z!ping';
    description = 'A command to ping';
    cooldown = 3000;

    async run(client: EasyClient, msg: Message, args: string[]) {
        msg.channel.createMessage('Pong!')
    }
}
export default PingCommand;