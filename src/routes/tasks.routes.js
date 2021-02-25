import {Router} from 'express'
import Task from '../models/Task'

const router = Router()

router.get('/', (req, res) => {
    res.send('Tasks')
})

router.post('/', async (req, res) => {
    const newTask = new Task({title: req.body.title, description: req.body.description});
    const taskSave = await newTask.save();
    res.json(taskSave)
})

export default router;