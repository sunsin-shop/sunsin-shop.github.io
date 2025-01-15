# tech blog@cashmallow
- Cashmallow development team's technology blog about wanting to contribute to the open source ecosystem
  
<img src="http://oss.cashmallow.com/images/tiger-cute.svg" alt="tiger cute" style="width:200px;"/>

### Connecting
- PRD - https://blog.nunininu.shop, https://nunininu.github.io
- STG - https://blog-82eea.web.app
- DEV - ?
- LOCAL - http://localhost:8000


### Contribute guide
- Anyone can do it's possible. Let's send the PR first and make it a better team by joining.

0. created based on [vuepress](https://v2.vuepress.vuejs.org/)
1. git clone https://github.com/oss-cashmallow/oss-cashmallow.github.io.git
2. edit with [vscode](https://code.visualstudio.com/)
3. install

https://github.com/nvm-sh/nvm
https://pnpm.io.ko

``` bash
brew install node
brew install pnpm
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
$ https://nunininu.shop
```

<img src="https://user-images.githubusercontent.com/120996497/212484360-1b212db0-5a5c-449f-8cc2-35de2126bd66.png" alt="cashmallow" style="width:600px;"/>
<img src="https://oss-cashmallow.github.io/images/hero.png" alt="cashmallow" style="width:200px;"/>
