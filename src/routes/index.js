express = require("express");
task = require("../models/Task");

app = express.Router();

app.get("/", async (req, res) => {
  tasks = await task.find();
  res.render("index.ejs", {
    tasks: tasks,
  });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.post("/tasks/add", async (req, res) => {
  tarea = task(req.body);
  taskSaved = await tarea.save();
  console.log(taskSaved);
  res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
  taskID = await task.findById(req.params.id);
  res.render("edit.ejs", {
    task: taskID,
  });
});

app.get("/edit", async (req, res) => {
  res.render("edit.ejs");
});

app.post("/edit/:id", async (req, res) => {
  await task.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
  await task.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

app.get("/toggleDone/:id", async (req, res) => {
  taskDone = await task.findById(req.params.id);
  taskDone.done = !taskDone.done;
  await taskDone.save();
  res.redirect("/");
});

module.exports = app;
