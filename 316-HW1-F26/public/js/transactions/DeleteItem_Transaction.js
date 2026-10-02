



import { jsTPS_Transaction } from '../../lib/jsTPS.js';


export class DeleteItem_Transaction extends jsTPS_Transaction {
    #model;
    #index;
    #copy;

    /**
     * @param {WolfieListsModel} model
     * @param {number} index which item to delete
     */
    constructor(model, index, copy) {
        super();
        this.#model = model;
        this.#index = index;
        this.#copy = copy;
    }

    doTransaction() {
        const item = this.#model.getCurrentList()?.getItemAt(this.#index);
        if (item != null) {
            this.#copy = item.clone();
            this.#model.removeItemFromCurrentList(this.#index);
        }
    }

    undoTransaction() {
        this.#model.addItemToCurrentList(this.#copy, this.#index);
    }

    toString() {
        return `DeleteItem_Transaction(index ${this.#index})`;
    }

}