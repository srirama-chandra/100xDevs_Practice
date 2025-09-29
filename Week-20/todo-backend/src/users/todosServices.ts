import { Todo } from "./todo";

export type createTodoParams = Pick<Todo,'title' | 'description'>;

export class TodoService {

    public getTodos(todoId:string) : Todo
    {
        return {
            id: todoId,
            title: "Demo Title",
            description: "Demo Description",
            done: false
        }
    }
}