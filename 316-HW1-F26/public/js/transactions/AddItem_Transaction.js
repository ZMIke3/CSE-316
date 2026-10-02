



import { jsTPS_Transaction } from '../../lib/jsTPS.js';
import { ListItem } from '../model/ListItem.js';


export class AddItem_Transaction extends jsTPS_Transaction {
    #model;
    #index;
    #item
    /**
     * @param {WolfieListsModel} model
     * @param {ListItem} item Item to add to the list
     * @param {number} index location to add it
     */
    constructor(model, index, item) {
        super();
        this.#model = model;
        this.#index = index;
        this.#item = item;
    }

    doTransaction() {
        this.#model.addItemToCurrentList(this.#item, this.#index + 1);
    }

    undoTransaction() {
        this.#model.removeItemFromCurrentList(this.#index + 1);
    }

    toString() {
        return `AddItem_Transaction(index ${this.#index})`;
    }

}