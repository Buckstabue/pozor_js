import { TodoRepository } from "./todo/data/TodoRepository";
import { TodoInteractor } from "./todo/domain/TodoInteractor";


class AppDI {

    todoInteractor() {
        return new TodoInteractor(this.todoRepository());
    }

    todoRepository() {
        return new TodoRepository()
    }
}

const appDI = new AppDI()
export default appDI