const Todo = require('../model/todo');

exports.getTodos = async (req, res) => {
    const todos = await Todo.findAll();
    const completedTodos = await Todo.count({ where: { completed: true } });

    res.render("index", {
        pageTitle: "کارهای روزمره",
        todos,
        completedTodos,
        remainingTodos: todos.length - completedTodos
    })
}