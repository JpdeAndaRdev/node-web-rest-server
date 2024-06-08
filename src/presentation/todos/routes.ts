import { Router } from "express";
import { TodoController } from "./controller";
import { TodoDataSourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";


export class TodoRoutes {
    
    static get routes(): Router {

        const router = Router();

        const datasource = new TodoDataSourceImpl();
        const todoRepository = new TodoRepositoryImpl(datasource);
        const todoController = new TodoController(todoRepository);
        
        //* GET
        router.get('/', todoController.getTodos);
        router.get('/:id', todoController.getTodosbyId);

        //* POST
        router.post('/', todoController.createTodo);

        //* PUT
        router.put('/:id', todoController.updateTodo);

        //* DELETE
        router.delete('/:id', todoController.deleteTodo);
        
        return router;
    }
}