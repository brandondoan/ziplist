/**
 * implements the ziplist function for E27
 * Created by BrandonDoan on 2/6/2017.
 */

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];
function zipList(list1, list2) {
  const list3 = [];
  for (let i = 0; i < list1.length; i += 1) {
    list3[i * 2] = list1[i];
    list3[(i * 2) + 1] = list2[i];
  }
  return list3;
}

console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testList1, testList2));
