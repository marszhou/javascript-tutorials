import { normalize, schema } from 'normalizr';
import {v4} from 'node-uuid'
// const originalData = {
//   "id": "123",
//   "author": {
//     "id": "1",
//     "name": "Paul"
//   },
//   "title": "My awesome blog post",
//   "comments": [
//     {
//       "id": "324",
//       "commenter": {
//         "id": "2",
//         "name": "Nicole"
//       }
//     }
//   ]
// }

// // Define a users schema
// const user = new schema.Entity('users');

// // Define your comments schema
// const comment = new schema.Entity('comments', {
//   commenter: user
// });

// // Define your article
// const article = new schema.Entity('articles', {
//   author: user,
//   // comments: [comment]
// });

// const normalizedData = normalize(originalData, article);



// const data = [ { id: 1, type: 'admin' }, { id: 2, type: 'user' },{ id: 3, type: 'admin' } ];

// const userSchema = new schema.Entity('users');
// const adminSchema = new schema.Entity('admins');
// const myArray = new schema.Array({
//   admins: adminSchema,
//   users: userSchema
// }, (input, parent, key) => {
//   console.log(input, parent, key)
//   return `${input.type}s`
// });

// const normalizedData = normalize(data, myArray);

// console.log(normalizedData)



// const data = { owner: { id: 1, type: 'user', name: 'Anne' },  teacher: [{ id: 2, type: 'group', name: 'Bob' } ]};

// const user = new schema.Entity('users');
// const group = new schema.Entity('groups');
// const unionSchema = new schema.Union({
//   user: user,
//   group: group
// }, 'type');

// const normalizedData = normalize(data, { owner: unionSchema, teacher: [unionSchema] });
// console.log(normalizedData)



const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: 'hey',
      completed: true
    },
    {
      id: v4(),
      text: 'hi',
      completed: false
    },
    {
      id: v4(),
      text: 'Learn Redux',
      completed: false
    }
  ]
}
const todo = new schema.Entity('todos1')
const todos = [todo]
const normalizedData = normalize(fakeDatabase, {todos})
console.log(normalizedData)