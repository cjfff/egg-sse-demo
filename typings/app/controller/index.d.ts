// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportMessage from '../../../app/controller/message';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    message: ExportMessage;
  }
}
