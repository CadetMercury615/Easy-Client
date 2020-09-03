
import { Message } from "eris";
import EasyClient from "src/Client/EasyClient";
import BaseCommand from "./BaseCommand";

class InnerCommand extends BaseCommand {
    name = '';
    aliases = [''];
    category = '';
    usage = 'z!info';
    description = 'A command to see information about Zaos';
    cooldown = 3000;

    async run(client: EasyClient, msg: Message, args: string[]) {
        return
            
    }
}
export default InnerCommand;