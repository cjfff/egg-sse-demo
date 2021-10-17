<!--
 * @Author: your name
 * @Date: 2021-10-17 11:05:37
 * @LastEditTime: 2021-10-18 00:02:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /egg-sse-example/README.md
-->
# hackernews-async-ts
https://github.com/EventSource/eventsource
[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
