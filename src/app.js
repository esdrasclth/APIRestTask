import express from 'express'
import TasksRoutes from './routes/tasks.routes'

const app = express()

app.use(express.json());

// Setings
app.set('port', process.env.PORT || 3000);

// Routes
app.get('/',  (req, res) => {
    res.json({message: 'Welcome to my application'})
})

app.use('/api/tasks', TasksRoutes)

export default app;