import { Injectable } from '@angular/core';
import { Task } from '../data/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];

  constructor() { 
    this.tasks = [
      { name: 'Meat', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', hideRecipe: true, hideEdit: true, date: new Date },
      { name: 'Salat', description: 'Lorem ipsum dolor sit amet consectetu adipisicing elit.', hideRecipe: true, hideEdit: true, date: new Date },
      { name: 'Desert', description: 'Lorem ipsum dolor sit amet consectetu adipisicing elit.', hideRecipe: true, hideEdit: true, date: new Date }
    ];
  }

  getTasks() {
    if (localStorage.getItem('rec')) {
      this.tasks = JSON.parse(localStorage.getItem('rec'));
    }
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.unshift(task);
    localStorage.setItem('rec', JSON.stringify(this.tasks));
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task === this.tasks[i]) {
        this.tasks.splice(i, 1);
      }
    }
  }
}
