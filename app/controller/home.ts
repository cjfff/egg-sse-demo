import { Controller } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

const indexHtml = fs.readFileSync(path.resolve(__dirname, '../static/index.html'), 'utf-8');
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.res.writeHead(200, {
      contentType: 'application/html',
    });
    ctx.body = indexHtml;
  }
}
