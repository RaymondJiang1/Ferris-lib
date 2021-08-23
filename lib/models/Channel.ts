import { Client } from "../Client";
import Base from "./Base";
import { TextChannel } from "./TextChannel";

/**
 * The Channel Model
 * @extends Base
 */
export class Channel extends Base {
    /**
     * The name of the channel
     * @type {string}
     */
    public name: string

    /**
     * The client for this channel
     * @type {Client}
     */
    #_client: Client;

    /**
     * @param {any} data The Channel data 
     * @param {Client} client The Client for this Channel
     */
    constructor(data: any, client: Client) {
        super(data.id);

        this._patch(data)
        this.#_client = client
    }

    isText(): this is TextChannel {
        return false
    }

    _patch(data: any) {
        if ("name" in data) {
            this.name = data.name
        }
    }
}