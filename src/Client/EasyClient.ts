import Eris, { ClientOptions } from 'eris';
import EasyCommandHandler from '../Commands/EasyCommandHandler';

class EasyClient extends Eris.Client {
    public owners: string[];
    // public utils: ClientUtils = new ClientUtils();
    // public db: Database = new Database();
    public cmdHandler: EasyCommandHandler;
    /**
     *
     * @param token Token of the Discord Bot
     * @param options Eris Client options for the Discord Bot
     * @param prefix Prefix for the command handler
     * @param owners List of owner ids
     */
    constructor(token: string, options: ClientOptions, prefix: string, owners: string[]) {
        super(token, options);
        this.cmdHandler = new EasyCommandHandler(prefix);
        this.owners = owners;
    }

    /**
     * 
     * @param id ID to check for ownership
     */
    isOwner(id: string): boolean {
        if(this.owners.includes(id)) return true;
        else return false;
    }
}
export default EasyClient;
