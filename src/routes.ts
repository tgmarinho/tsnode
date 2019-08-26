import { Router } from 'express'

import UserController from './controllers/UserControllers'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.delete('/users/:id', UserController.destroy)

export default routes
