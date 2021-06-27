import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListsComponent} from "./todo-lists/todo-lists.component";
import {TodoItemsComponent} from "./todo-items/todo-items.component";

const routes: Routes = [
  {
    path: 'home',
    component: TodoListsComponent
  },
  {
    path: 'todoitem',
    component: TodoItemsComponent
  },
  {
    path: 'todoitem/:id',
    component: TodoItemsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
