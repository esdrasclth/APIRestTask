import {Router} from 'express'
import * as taskCtrl from '../controllers/task.controller'

const router = Router()

router.get('/', taskCtrl.findAllTasks);
router.get('/:id', taskCtrl.findOneTask);
router.post('/', taskCtrl.createTask);
router.delete('/:id', taskCtrl.deleteTask);

export default router;