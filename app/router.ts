/*
 * @Author: your name
 * @Date: 2021-10-17 11:05:37
 * @LastEditTime: 2021-10-17 23:33:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-sse-example/app/router.ts
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.get('/message-center', controller.message.init);
  router.get('/message-center/index.html', controller.message.sendHtml);
};
