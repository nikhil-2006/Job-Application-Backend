import { Request, Response } from "express";
import Task from "../models/Task";

// GET all tasks
export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// CREATE task
export const createTask = async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

// UPDATE status
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  const updated = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.json(updated);
};

// DELETE task
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);

  res.json({ message: "Deleted" });
};
