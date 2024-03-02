# EXERCISE: Build a Traffic Light Indicator

## Requirements (TODO):

- Using EventEmitter in Node.js, build a traffic light indicator.
- Create three corresponding events: 'red', 'yellow', 'green'.
- When the 'red' event is emitted, print in the console the text RED with a background color of red (use an external colors package). Also, when 'red' is emitted, emit the 'yellow' event.
- When the 'yellow' event is emitted, print in the console the text YELLOW with a background color of YELLOW (use an external colors package). Also, when 'yellow' is emitted, emit the 'green' event.
- When the 'green' event is emitted, print in the console the text GREEN with a background color of GREEN (use an external colors package). Also, when 'green' is emitted, emit the 'red' event.

The events should be called after 3 seconds, meaning each event should be called 3 seconds apart in the hierarchy red - yellow - green.

## BONUS:

- Based on the bonuses of the previous class, create an event emitter, and whenever you finishTodo or removeTodo, you should log that these operations happened in a txt file. For example, if we finishTodo, you should write to the log file (the txt file): "Todo with ID (the todo's ID) is finished at DATE (DATE means the date that the operation occurred)". When you remove a todo, meaning you invoked removeTodo, you should write to the log file (the txt file): "Todo with ID (the todo's ID) is removed at DATE (DATE means the date that the operation occurred)".

# IMPORTANT:
- Do not attach node_modules on your repositories