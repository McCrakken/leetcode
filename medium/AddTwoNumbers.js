/**
 * These classes are provided by LeetCode and do not need to be implemented locally.
 * The only problem is you won't be able to run your code effectively here in your IDE... Bummer
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const test1 = { l1: [2,4,3], l2: [5,6,4] };
const test2 = { l1: [2,4,3], l2: [5,6] };
const test3 = { l1: [0], l2: [5,6] };

// Generic solution that didn't make use of the provided LeetCode ListNode class.
// const addTwoNumbers = (l1, l2) => {
//   if (l1 === [0]) {
//     return l2;
//   }
//   else if (l2 === [0]) {
//     return l1;
//   }
//   if (l1.length > l2.length) {
//     const diff = l1.length - l2.length;
//     for (let i = 0; i < diff; i++) {
//       l2.push(0);
//     }
//   } else {
//     const diff = l2.length - l1.length;
//     for (let i = 0; i < diff; i++) {
//       l1.push(0);
//     }
//   }
//
//   let carry = 0;
//   let result = [];
//
//   for (const num in l1) {
//     let addVal = l1[num] + l2[num] + carry;
//     if (addVal >= 10) {
//       carry = 1;
//       addVal = addVal - 10;
//     }
//     else {
//       carry = 0;
//     }
//     result.push(addVal);
//   }
//
//
//   return result;
// };

const addTwoNumbers = (l1, l2) => {
  const addValues = (list1, list2, carry) => {
    const val1 = (list1 && list1.val) || 0;         // Returns zero as the value if we are out of values
    const val2 = (list2 && list2.val) || 0;
    const sum = val1 + val2 + carry;
    const nextCarry = sum >= 10 ? 1 : 0;
    const nextVal = sum >= 10 ? (sum - 10) : sum;

    // Recursively build our listNodes. If values are left in any of the elements, add another node
    return (list1 || list2 || carry)
      ? { val: nextVal, next: addValues(list1 && list1.next, list2 && list2.next, nextCarry) }
      : null;
  }

  return addValues(l1, l2, 0);
}

// console.log(`Test 1 [${test1.l1}] + [${test1.l2}]: ${addTwoNumbers(test1.l1, test1.l2)}`);
// console.log(`Test 2 [${test2.l1}] + [${test2.l2}]: ${addTwoNumbers(test2.l1, test2.l2)}`);
// console.log(`Test 3 [${test3.l1}] + [${test3.l2}]: ${addTwoNumbers(test3.l1, test3.l2)}`);

