
import { Message } from "eris";
import BaseCommand from '../src/Commands/BaseCommand';
import EasyClient from '../src/Client/EasyClient';

class TestCommand extends BaseCommand {
    name = 'test';
    aliases = ['tust'];
    category = 'General';
    usage = 'z!test';
    description = 'A command to test';
    cooldown = 3000;

    async run(client: EasyClient, msg: Message, args: string[]) {
        msg.channel.createMessage('Test!')
    }
}
export default TestCommand;