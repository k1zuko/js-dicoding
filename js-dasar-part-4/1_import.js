import myFunction0 from "./module/anotherfile.js";
import result from "./module/anotherfile.js"
import { myFunction1 } from "./module/anotherfile.js";
import { name,email,age } from "./module/anotherfile.js";
import * as variable from "./module/anotherfile.js"
import { myFunction as user } from "./module/user.js";
import { myFunction as customer } from "./module/customer.js";

myFunction0();
result();
myFunction1();
console.log(name);
console.log(email);
console.log(age);
console.log(variable.name);
console.log(variable.email);
console.log(variable.age);
user();
customer();