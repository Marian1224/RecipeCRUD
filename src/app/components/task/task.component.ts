import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/data/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  constructor( public taskService: TaskService ) { }

  ngOnInit() {
  }

  deleteTask(task: Task) {
    if (confirm('You really want to delete this recipe...???')) {
      this.taskService.deleteTask(task);
    }
  }

}
