import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '@learning-workspace/api-interfaces';
import { TodoActionEnum } from '../../core/enums';

@Component({
  selector: 'learning-workspace-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: Partial<Todo>;

  @Output() todoAction = new EventEmitter<TodoActionEnum>();

  public checkTodo(): void {
    this.todoAction.emit(TodoActionEnum.check);
  }
  public editTodo(): void {
    this.todoAction.emit(TodoActionEnum.edit);
  }
  public removeTodo(): void {
    this.todoAction.emit(TodoActionEnum.remove);
  }
}
