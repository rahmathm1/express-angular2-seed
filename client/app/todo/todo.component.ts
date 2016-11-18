import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todo.component.html' ,
    styleUrls: [ 'todo.component.css' ]
})

export class TodoComponent implements OnInit {
    private todoService     : TodoService;
    private router          : Router;
    private activatedRoute  : ActivatedRoute;
    private todo            : Todo;
    private message         : string;
    private subscription    : Subscription;

    constructor(todoService: TodoService, router: Router, activatedRoute: ActivatedRoute) {
        this.todoService = todoService;
        this.router = router;
        this.todo = new Todo();
        this.activatedRoute =  activatedRoute;
        this.subscription = this.activatedRoute.params.subscribe(
            (param: any) => {
                let id = param['id'];
                this.getTodos(id);
        });
    }

    ngOnInit() { }

    getTodos(id: string) {
        this.todoService.get(id).subscribe(
            response => this.todo = response.json(),
            response => this.message = <any>response);
    }
}