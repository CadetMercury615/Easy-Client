import { Message } from "eris";
import EasyClient from "src/Client/EasyClient";

class BaseCommand {
    public category: string;
    public name: string;
    public aliases: string[];
    public usage: string;
    public description: string;
    public permissions?: string[];
    
    async run(client: EasyClient, msg: Message, args: string[]) {}
}
export default BaseCommand;