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

console.log('-------------------');

copiedGropus2[0].name = "Group 100";
console.log(groups2); // でも、オブジェクトの中身を変更すると、元のオブジェクトも変更される

// その場合は、JSON.parse(JSON.stringify(groups));を使うか、
// structuredClone