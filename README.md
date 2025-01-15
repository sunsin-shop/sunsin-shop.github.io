# team blog@sunsin.shop 
- sunsin team's technology blog about the spirit of sunsin
  
<img src="https://www.google.com/imgres?q=%EB%A7%9D%EA%B7%B8%EB%9F%AC%EC%A7%84%20%EA%B3%B0&imgurl=https%3A%2F%2Fcdn.litt.ly%2Fimages%2FU0UQOgi7NRuOXgn6LHSikIDTy1TWh688%3Fs%3D1200x630%26m%3Dinside&imgrefurl=https%3A%2F%2Flitt.ly%2Fmangomee&docid=3SXBmsV_XpCGUM&tbnid=5xWtUKo-EgbzfM&vet=12ahUKEwjZgbKQy_aKAxX12jQHHesiCg0QM3oECBUQAA..i&w=630&h=630&hcb=2&ved=2ahUKEwjZgbKQy_aKAxX12jQHHesiCg0QM3oECBUQAA" alt="mang_cute" style="width:200px;"/>

### Connecting
- PRD - https://team.sunsin.shop, https://heejin131.github.io
- STG - https://teamblog-3ffc1.web.app/
- DEV - ?
- LOCAL - https://localhost:8000

### Contribute guide
- Anyone can do it's possible. Let's send the PR first and make it a better team by joining.

0. created based on [vuepress](https://v2.vuepress.vuejs.org/)
1. git clone git@github.com:heejin131/heejin.github.io.git
2. edit with [vscode](https://code.visualstudio.com/)
3. install
``` bash
https://github.com/nvm-sh/nvm
https://pnpm.io/ko/
```
4. run - development environment [install pnpm](https://pnpm.io/installation)
- connecting to localhost 8080
- node.js install if you have get error 'ELIFECYCLE Command failed'
```
$ curl ~~
$ source ~/.zshrc 
$ nvm install --lts
$ nvm ls
$ nvm use
$ node -v
$ pnpm install
$ pnpm docs:dev
```

### build & deploy
1. STG
- [x] 배포전 작업 파일은 모두 커밋!
- [install firebase](https://v2.vuepress.vuejs.org/guide/deployment.html#google-firebase)
$ npm install firebase

``` bash
git add .


```

2. PRD
```bash
- github pages -> docs
- pnpm docs:build
- git add . ;git commit -a;git push
- https://teamsunsin.shop
```
