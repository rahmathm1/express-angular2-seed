"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.apiEndpoint = '/api/items';
    }
    TodoService.prototype.delete = function (todo) {
        return this.http.delete(this.apiEndpoint + "/" + todo.id);
    };
    TodoService.prototype.save = function (todo) {
        if (todo.id)
            return this.http.put(this.apiEndpoint, todo);
        else
            return this.http.post(this.apiEndpoint, todo);
    };
    TodoService.prototype.get = function (id) {
        return this.http.get(this.apiEndpoint + "/" + id);
    };
    TodoService.prototype.getAll = function () {
        return this.http.get(this.apiEndpoint);
    };
    TodoService.prototype.getCount = function (status) {
        return this.http.get(this.apiEndpoint + "/count/?where[status]=" + status);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map