let obj1=new Object()
let obj2=obj1;
obj2.name='elvis'
obj1=new Object()
obj1.name='tom'
console.log(obj2.name);
