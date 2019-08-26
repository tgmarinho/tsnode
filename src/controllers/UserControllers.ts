import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response) : Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user.fullname())
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    await User.deleteOne({ _id: req.params.id })
    return res.json({ message: 'usuário deletado' })
  }
}

export default new UserController()
