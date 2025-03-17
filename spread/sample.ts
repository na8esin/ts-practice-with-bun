// spreadで配列をコピーするとでディープコピーになる

const groups = [
  {
    id: "1",
    name: "Group 1",
  },
];

const groups2 = [
  {
    id: "2",
    name: "Group 2",
  },
];

const copiedGropus = groups;
copiedGropus.push({ id: "3", name: "Group 3" });
console.log(groups); // シャローコピーになる

console.log('-------------------');

const copiedGropus2 = [...groups2];
copiedGropus2.push({ id: "3", name: "Group 3" });
console.log(groups2); // ディープコピーになる