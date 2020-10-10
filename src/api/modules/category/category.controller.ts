import { GET, route } from 'awilix-express';
import { Request, Response } from 'express';
import CategoryService from './category.service';

@route('/categories')
export default class CategoryController {
  public constructor(private readonly categoryService: CategoryService) {}

  @GET()
  public index(req: Request, res: Response): void {
    const result = this.categoryService.index();
    res.send(result);
  }
}
