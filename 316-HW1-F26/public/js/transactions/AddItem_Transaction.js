



import { jsTPS_Transaction } from '../../lib/jsTPS.js';
import { ListItem } from '../model/ListItem.js';


export class AddItem_Transaction extends jsTPS_Transaction {
    #model;
    #index;
    #item
    /**
     * @param {WolfieListsModel} model
     * @param {ListItem} item Item to add to the list
     */
    constructor(model, item) {
        super();
        this.#model = model;
        this.#item = item;
    }

    doTransaction() {
        this.#model.addItemToCurrentList(this.#item);
    }

    undoTransaction() {
        const index = this.#model.getCurrentList()?.size();
        this.#model.removeItemFromCurrentList(index);
    }

    toString() {
        return `AddItem_Transaction(index ${this.#index})`;
    }

}