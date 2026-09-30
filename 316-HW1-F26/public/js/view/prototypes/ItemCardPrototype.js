/**
 * ItemCardPrototype.js
 *
 * Stamps out the cards inside an open list, one per item. Each card shows the
 * item's description and the date it was entered, plus a duplicate button on the
 * right.
 *
 * These cards are draggable, and each is stamped with the index it currently
 * occupies, which is what the drag and drop code in ListView works from.
 *
 * ---------------------------------------------------------------------------
 * YOU HAVE TO WRITE initializeClone. The <template> in index.html is the shape
 * of a card and carries no text at all, so until this method fills one in, every
 * item card is drawn blank — and, because the index is stamped onto the element
 * here, neither the buttons on a card nor dragging it will work.
 *
 * ListCardPrototype, beside this file, is the finished version of the same idea
 * for the cards on the home screen. Read it first.
 * ---------------------------------------------------------------------------
 */
import { CardPrototype } from './CardPrototype.js';
import { DateUtil } from '../../common/DateUtil.js';
import { PriorityUtil } from '../../common/PriorityUtil.js';

export class ItemCardPrototype extends CardPrototype {
    /** the id of this card's <template> in index.html */
    static TEMPLATE_ID = 'item-card-template';

    /**
     * Note firstElementChild rather than firstChild: indenting the markup nicely
     * leaves a text node in front of the card. Called once, so a missing template
     * would fail immediately and obviously.
     *
     * @return {HTMLElement} a blank item card, cloned out of index.html
     */
    buildPrototypeElement() {
        const template = document.getElementById(ItemCardPrototype.TEMPLATE_ID);
        return template.content.firstElementChild.cloneNode(true);
    }

    /**
     * Pours one item's data into a fresh copy of the blank card.
     *
     * @param {HTMLElement} element a fresh clone of the blank card
     * @param {ListItem} item the item this card stands for
     * @param {number} index where that item currently sits in the list
     */
    initializeClone(element, item, index) {
        CardPrototype.requirePart(element, '.item-description').textContent = item.description;
        CardPrototype.requirePart(element, '.item-date-entered').textContent = DateUtil.format(item.dateEntered);
        const priority_type = CardPrototype.requirePart(element, ".priority-pill");
        priority_type.textContent = item.priority;

        if (item.priority === PriorityUtil.PRIORITY_HIGH) {
            priority_type.classList.add("priority-high");
        } else if (item.priority === PriorityUtil.PRIORITY_MEDIUM) {
            priority_type.classList.add("priority-medium");
        } else {
            priority_type.classList.add("priority-low");
        }

        CardPrototype.requirePart(element, ".item-target-date").textContent = DateUtil.format(item.targetDate);
        CardPrototype.requirePart(element, ".item-completed-mark").textContent = item.completed ? '✓' : '';

        element.classList.add(item.priority === PriorityUtil.PRIORITY_HIGH ? 'priority-high' : item.priority === PriorityUtil.PRIORITY_MEDIUM ? 'priority-medium' : 'priority-low');

        if (item.completed) {
            element.classList.add('item-completed');
        }

        element.dataset.itemId = item.id;
        element.dataset.index = String(index);

    }
}
