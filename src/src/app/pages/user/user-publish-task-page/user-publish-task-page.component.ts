import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';

enum View {
  List,
  CreatingTask,
  SelectingTask

}
@Component({
  selector: 'app-user-publish-task-page',
  templateUrl: './user-publish-task-page.component.html',
  styleUrls: ['./user-publish-task-page.component.scss']
})
export class UserPublishTaskPageComponent implements OnInit {
  View = View;
  state: View = View.List;
  tasks: Task[] = [];
  selectedTask: Task;
  newTask: Task = { title: '', content: "" }
  constructor(public config: ConfigService) { this.listTasks() }

  ngOnInit() {
  }

  selectTask(task: Task) {
    this.selectedTask = task;
    this.state = View.SelectingTask

  }

  async listTasks() {
    this.tasks = await this.config.db.task.find({ user: this.config.user._id }, { populate: 'user' });
    this.tasks.forEach(task => task.checked = false);
  }

  async publishTask() {
    if (this.newTask.title && this.newTask.content) {
      this.newTask.user = this.config.user;
      let newTask = await this.config.db.task.createOne(this.newTask);
      this.state = this.View.List;
      await this.listTasks();
    } else {
      alert('请填写完整信息');
    }
  }

  everyChecked(): boolean {
    return this.tasks.every(task => task.checked);
  }

  someChecked(): boolean {
    return this.tasks.some(task => task.checked);
  }

  toggleAllChecked() {
    if (this.everyChecked()) {
      this.tasks.forEach(task => task.checked = false);
    } else {
      this.tasks.forEach(task => task.checked = true);
    }
  }

  async deleteTask() {
    let taskIds = this.tasks.filter(task => task.checked).map(task => task._id);
    await this.config.db.task.remove({ _id: { $in: taskIds } });
    await this.listTasks();
  }
  async modifyTask() {
    await this.config.db.task.updateById(this.selectedTask._id, this.selectedTask);
    this.state = this.View.List;
    await this.listTasks()
  }
}
