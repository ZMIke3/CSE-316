



import { jsTPS_Transaction } from '../../lib/jsTPS.js';


export class DeleteItem_Transaction extends jsTPS_Transaction {
    #model;
    #index;

    /**
     * @param {WolfieListsModel} model
     * @param {number} index which item to delete
     */
    constructor(model, index) {
        super();
        this.#model = model;
        this.#index = index;
    }

    doTransaction() {
        item = this.#model.getItemAt(this.#index);
        if (item != null) {
            this.#model.removeItemFromCurrentList(this.#index);
        }
    }

    undoTransaction() {
        return;
    }

    toString() {
        return `DeleteItem_Transaction(index ${this.#index})`;
    }

}