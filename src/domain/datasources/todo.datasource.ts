import { CreateTodoDto } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";
import { UpdateTodoDto } from '../dtos/todos/update.todo.dto';


export abstract class TodoDatasource {

    abstract create(createTodoDto: CreateTodoDto): Promise<TodoEntity>;

    //TODO: paginación
    abstract getAll(): Promise<TodoEntity[]>;

    abstract findById(id: number): Promise<TodoEntity>;
    abstract updateTodoById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity>;
    abstract deleteTodo(id: number): Promise<TodoEntity>;
}