const names = ["John", "Jane", "Joseph", "Jack", "Jojo"];

console.log(names);

names.pop();

console.log(names);

names[1] = "Jimmy";

console.log(names);

names.push("Joakim");

console.log(names);

names.sort();

console.log(names);

const joakim_index = names.indexOf("Joakim");

console.log(joakim_index);

names.splice(joakim_index, 1);

console.log(names);

for (const name of names) {
  console.log(name);
}
