/*
 * @Author: your name
 * @Date: 2021-10-17 23:22:36
 * @LastEditTime: 2021-10-18 00:07:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-sse-example/app/controller/message.ts
 */
import { Controller } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

const indexHtml = fs.readFileSync(path.join(__dirname, '../../demo/index.html'), 'utf-8');

export default class HomeController extends Controller {
  public async init() {
    const { ctx } = this;

    ctx.res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    });

    ctx.res.write('retry: 10000\n');
    ctx.res.write('event: connecttime\n');
    ctx.res.write('data: ' + (new Date()) + '\n\n');
    ctx.res.write('data: ' + (new Date()) + '\n\n');

    const interval = setInterval(function() {
      ctx.res.write('data: ' + (new Date()) + '\n\n');
    }, 1000);

    ctx.req.connection.addListener('close', function() {
      clearInterval(interval);
      console.log('close ??????');
    });
    return;
  }

  async sendHtml() {
    this.ctx.headers['content-type'] = 'text/html';
    this.ctx.body = indexHtml;
  }
}
