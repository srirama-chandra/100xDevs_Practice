import { Controller, Get, Route, Path, Put } from "tsoa";
import { Todo } from "./todo";
import { TodoService } from "./todosServices";

@Route('todo')
export class TodoController extends Controller{
    /**
     * This Todo Get Route
     */
    @Get("{todoId}")
    public async getTodo(@Path() todoId:string): Promise<Todo>
    {
        return new TodoService().getTodos(todoId)
    }
    /**
     * This Todo Put Route
     */
    @Put("{todoId}")
    public async putTodo(@Path() todoId:string): Promise<Todo>
    {
        return new TodoService().getTodos(todoId)
    }
}