import { Component, ElementRef, ViewChild } from '@angular/core';
import { DynamicFacadeService, DynamicFacade } from 'dynamic-ngrx';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Store } from '@ngrx/store';

interface Todo {
  id: string;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('todoInput') todoInput: ElementRef;

  todos$: Observable<Todo[]>;

  private todoFacade: DynamicFacade<Todo>;
  constructor(
    private dynamicFacadeService: DynamicFacadeService,
    private store: Store<any>,
  ) {
    this.todoFacade = this.dynamicFacadeService.getFacade<Todo>('Todo');
    this.todos$ = this.todoFacade.entities$;
  }

  addTodo(event): void {
    if (event.keyCode !== 13) { return; }
    const todo: Todo = {
      id: uuid(),
      text: this.todoInput.nativeElement.value,
    };
    this.store.dispatch(this.todoFacade.actions.addOne(todo));
    this.todoInput.nativeElement.value = '';
  }

  removeTodo(todo: Todo): void {
    this.store.dispatch(this.todoFacade.actions.removeOne(todo.id));
  }
}
