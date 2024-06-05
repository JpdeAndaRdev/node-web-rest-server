import { Router } from "express";
import { TodoController } from "./controller";


export class TodoRoutes {
    
    static get routes(): Router {

        const router = Router();
        const todoController = new TodoController();
        
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