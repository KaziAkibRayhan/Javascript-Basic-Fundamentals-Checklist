/* const orphanLists = ['rakib', 'sakib', 'akib', 'akib', 'sakib', 'rakib', 'sabon'];
let selectedOrphan = [];
for (let i = 0; i < orphanLists.length; i++) {
    const element = orphanLists[i];
    if (selectedOrphan.indexOf(element) == -1) {
        selectedOrphan.push(element);
    }
}

console.log(selectedOrphan); */

function removeDuplicate(names) {
    let unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const friendNames = ['abul', 'babul', 'cabul', 'ebul', 'abul', 'babul', 'cabul'];
const uniqueName = removeDuplicate(friendNames);
console.log(uniqueName);