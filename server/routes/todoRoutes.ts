import express, {Router} from 'express';
import {
    getTodo,
    setTodo,
    deleteTodo,
} from '../controller/todoContoller';

const router: Router = express.Router();
// Get & Post Route 
router.route('/').get(getTodo).post(setTodo);
// delete Route
router.route('/:id').delete(deleteTodo);

export default router;
