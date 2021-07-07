/**
 * List Node Class
 */
class ListNode {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Singly Linked List Data Structure
 */
export class SLList {
  constructor() {
    this._size = 0;
    this.head = new ListNode();
    this.tail = null;
    this._array = [];
  }

  toArray() {
    return this._array;
  }

  addLast(value) {
    if (value === undefined) {
      alert("node value must be a number");
      return;
    }
    const node = new ListNode(value);
    if (this._size === 0) {
      this.head.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._size += 1;
    this._array.push(value);
  }

  removeLast() {
    if (this._size === 0) return;
    if (--this._size === 0) {
      this.head.next = null;
      this.tail = null;
      return;
    }
    let p = this.head;
    while (p.next !== this.tail) {
      p = p.next;
    }
    p.next = null;
    this.tail = p;
    this._array.pop();
  }

  /**
   * Remove the first node in the list with a value equals the target, and
   * record actions for animation while doing so.
   *
   * Example operation: deleting 3 from list 1-> 2 -> 3 -> 4 -> null.
   *  a) Highlight 1, 2;
   *  b) Dim 3 ->;
   *  c) Change 2' arrow to an arc pointing at 4;
   *  d) Remove 3 ->;
   *  e) Change 2' arc to an arrow while pulling 4 to where 3 was.
   *
   * @param {number} target The target value being removed from the list.
   * @returns {object} A set of actions to be animated.
   */
  remove(target) {
    const actions = [];
    if (target === undefined) {
      this.removeLast();
      return actions;
    }

    this._size--;
    const i = this._array.indexOf(target);
    if (i > -1) this._array.splice(i, 1);

    let p = this.head;
    let idx = -1;
    while (p.next !== null && p.next.value !== target) {
      p = p.next;
      actions.push({ action: "highlight", index: ++idx });
    }
    if (p.next === null) return actions;
    p.next = p.next.next;
    if (p.next === null) {
      actions.push({ action: "removeNode", index: idx + 1 });
      actions.push({ action: "removeArrow", index: idx });
      return actions;
    }
    actions.push({ action: "dim", index: idx + 1 });
    actions.push({ action: "removeArrow", index: idx });
    actions.push({ action: "drawArc", from: idx, to: idx + 2 });
    actions.push({ action: "removeNode", index: idx + 1 });
    actions.push({ action: "removeArc", index: idx });
    actions.push({ action: "reposition", from: idx + 2, to: idx + 1 });
    return actions;
  }
}
