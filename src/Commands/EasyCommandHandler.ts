import { Message } from "eris";
import EasyClient from "src/Client/EasyClient";
import BaseCommand from "./BaseCommand";
import InnerCommand from "./InnerCommand";
const AsciiTable = require('ascii-table')

class EasyCommandHandler {
    public commands: BaseCommand[]
    public prefix: string
    constructor(prefix: string) {
        this.prefix = prefix;
    }

    public registerCommands(commands: (typeof BaseCommand)[]) {
        let table = new AsciiTable('Commands')
            .setHeading('Command', 'Load Status')
        let Commands: any[] = [
            InnerCommand
        ]
        commands.forEach(command => {
            let callable = new command();
            try {
                Commands.push(command);
                table.addRow(callable.name, '✅')
            } catch (err) {
                table.addRow(callable.name, '❌ => Ran into an error when registering command');
            }

        })
        this.commands = Commands.map(command => new command());
        this.commands.shift();
        console.log(table.toString())
    }

    public async runCMD(client: EasyClient, msg: Message, args: string[]) {
        let command = args[0].slice(this.prefix.length);
        args.shift();
        let matchedCommand = this.commands.find(c => c.name === command
            || c.aliases.includes(command));
        if(!matchedCommand) return;
        let userPermissions = msg.member.permission.json;
        let requiredPermissions = matchedCommand.permissions;
        if(!requiredPermissions || 
            requiredPermissions.length < 1 ||
            client.isOwner(msg.author.id)) {
            await matchedCommand.run(client, msg, args);
            return;
        } else if(matchedCommand.permissions[0].toLowerCase() === 'owner') {
            if(!client.isOwner(msg.author.id)) {
                msg.channel.createMessage("This is an owner only command")
            };
        } else {
            for(let [perm, has] of Object.entries(userPermissions)) {
                if(requiredPermissions.includes(perm) && has) {
                    await matchedCommand.run(client, msg, args);
                    return;
                } else { continue }
            }
            msg.channel.createMessage("You do not have permission to use that command");
        }
    }
}

export default EasyCommandHandler;