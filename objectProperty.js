const students = [
    {id:27, name: 'Omor Sani'},
    {id:31, name: 'Manna'},
    {id:41, name:'Moyuri'},
    {id:42, name: 'Dipjol'}

];
//only extract the name properties

// const names = [];
// for (let i = 0; i<students.length; i++){
//     names.push(students[i].name);
// }
// console.log(names);

const namesByMap = students.map(x => x.name);
console.log(namesByMap);

const id40up = students.filter(x => x.id > 40);
console.log(id40up);