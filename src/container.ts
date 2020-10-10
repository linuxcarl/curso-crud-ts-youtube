import { asClass, createContainer } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import express from 'express';
import CategoryService from './api/modules/category/category.service';

export default (app: express.Application) => {
  const container = createContainer({
    injectionMode: 'CLASSIC',
  });

  container.register({
    categoryService: asClass(CategoryService).scoped(),
  });

  app.use(scopePerRequest(container));
};
