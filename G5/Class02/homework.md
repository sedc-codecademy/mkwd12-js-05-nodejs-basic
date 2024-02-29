## Exercise 1: Write in file

- Using the filesystem module of Node.js, create a new file named `user_info.txt` and write information about a person.
  Example: "Bob Bobski is the best student in the school".

## Exercise 2: Append to file book information

- Create an array of objects. Each object should represent a book and have the following properties: `id`, `title`, `author`, and `genre`.
- Implement functionality to add the information about the books to a new file named `booksData.txt`.

Example:

```javascript
const books = 
[
    {id: 1, title: 'Book Title 1', author: 'Book Author 1', genre: 'Book Genre 1'},
    {id: 2, title: 'Book Title 2', author: 'Book Author 2', genre: 'Book Genre 2'},
    {id: 3, title: 'Book Title 3', author: 'Book Author 3', genre: 'Book Genre 3'}
]
```

The output in `booksData.txt` should look like:

```
Book Title 1 by Book Author 1 is of genre Book Genre 1,
Book Title 2 by Book Author 2 is of genre Book Genre 2,
Book Title 3 by Book Author 3 is of genre Book Genre 3,
```

## BONUS:

On top of the code of the todos-app that we wrote in the previous class, implement functionality to finish a todo by its given id. This means setting the `isDone` property of the todo with that id to `true`.

## VERY BONUS:

On top of the code of the todos-app that we wrote in the previous class, implement functionality to remove a todo with a given id. This means removing the todo with the given id from the JSON file.

Remember: The bonus exercises are not mandatory; they are additional challenges for practice.