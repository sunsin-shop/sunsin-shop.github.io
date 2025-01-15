# tem blog@sunsin.shop
- Our team's technology blog inherits the spirit of Admiral Yi Sun-sin of Joseon
  
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdREgTNnlP6Bo7iXtMIhUHOygOEk1c0nYiQ&s" alt="team sunsin" style="width:600px;"/>

### Connecting
- PRD - https://team.sunsin.shop, https://sunsin-shop.github.io
- STG - https://blog-8740e.web.app
- DEV - ?
- LOCAL - http://localhost:8000

### Contribute guide
- Anyone can do it's possible. Let's send the PR first and make it a better team by joining.

0. created based on [vuepress](https://v2.vuepress.vuejs.org/)
1. git clone git@github.com:sunsin-shop/sunsin.github.io.git
2. edit with [vscode](https://code.visualstudio.com/) OR VIM
3. install
``` bash
https://github.com/nvm-sh/nvm
https://pnpm.io/ko/
```
4. run - development environment [install pnpm](https://pnpm.io/installation)
- connecting to localhost 8080
- node.js install if you have get error 'ELIFECYCLE Command failed'
```
$ nvm install --lts
$ nvm ls
$ nvm use v22.13.0
$ node -v
v22.13.0
$ pnpm install
$ pnpm docs:dev
```

### build & deploy
1. STG
- [x] 배포전 작업 파일은 모두 커밋!
- [install firebase](https://v2.vuepress.vuejs.org/guide/deployment.html#google-firebase)

``` bash
$ git add .
$ pnpm docs:build
$ firebase login
$ firebase deploy
```

2. PRD
```bash
$ github pages -> docs
$ pnpm docs:build
$ git add .;git commit -a;git push 
$ https://team.sunsin.shop
```
