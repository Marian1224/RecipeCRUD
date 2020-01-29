import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor( public taskService: TaskService ) { }

  task = {
    name: '',
    description: ''
  };

  ngOnInit() {
  }

  addTask() {
    this.taskService.addTask({
      name: this.task.name,
      description: this.task.description,
      hideRecipe: true,
      hideEdit: true,
      date: new Date()
    });
    this.task.name = '';
    this.task.description = '';
    return false;
  }

}
