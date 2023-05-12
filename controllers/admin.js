const Todo = require('../model/todo');

exports.addTodo = async (req, res) => {
    if (!req.body.todo) res.redirect("/");
    try {
        await Todo.create({ text: req.body.todo });
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
}

exports.deleteTodo = async (req, res) => {
    // Todo.destroy({ where: { id: req.params.id } })
    //     .then(result => {
    //         res.redirect('/');
    //         console.log(result);
    //     }).catch(err => console.log(err))
    try {
        await Todo.destroy({ where: { id: req.params.id } });
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
}

exports.completedTodo = async (req, res) => {
    // Todo.findByPk({ where: { id: req.params.id } })
    //     .then(todo => {
    //         todo.complete = true
    //         return todo.save();
    //     }).then(() => res.redirect("/"))
    //     .catch(err => console.log(err))
    try {
        const todo = await Todo.findByPk(req.params.id);
        todo.completed = true;
        await todo.save();
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
}