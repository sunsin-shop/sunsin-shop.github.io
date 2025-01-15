# team blog@sunsin.shop 
- sunsin team's technology blog about the spirit of sunsin
  
<img src="https://www.google.com/imgres?q=%EB%A7%9D%EA%B7%B8%EB%9F%AC%EC%A7%84%20%EA%B3%B0&imgurl=https%3A%2F%2Fcdn.litt.ly%2Fimages%2FU0UQOgi7NRuOXgn6LHSikIDTy1TWh688%3Fs%3D1200x630%26m%3Dinside&imgrefurl=https%3A%2F%2Flitt.ly%2Fmangomee&docid=3SXBmsV_XpCGUM&tbnid=5xWtUKo-EgbzfM&vet=12ahUKEwjZgbKQy_aKAxX12jQHHesiCg0QM3oECBUQAA..i&w=630&h=630&hcb=2&ved=2ahUKEwjZgbKQy_aKAxX12jQHHesiCg0QM3oECBUQAA" alt="mang_cute" style="width:200px;"/>

### Connecting
- PRD - https://team.sunsin.shop
- STG - https://team-sunsin.web.app

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

``` bash
$ sh deploy-stg.sh

=== Deploying to 'oss-cashmallow'...

i  deploying hosting
i  hosting[oss-cashmallow]: beginning deploy...
i  hosting[oss-cashmallow]: found 43 files in ./docs
✔  hosting[oss-cashmallow]: file upload complete
i  hosting[oss-cashmallow]: finalizing version...
✔  hosting[oss-cashmallow]: version finalized
i  hosting[oss-cashmallow]: releasing new version...
✔  hosting[oss-cashmallow]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/oss-cashmallow/overview
Hosting URL: https://oss-cashmallow.web.app
╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡
다음 항목을 제거할 예정입니다:
  docs/assets/app-a5e3f83c.js         docs/assets/index.html-77e713f0.js  docs/team/how2pr/
  docs/assets/index.html-6e725bfb.js  docs/assets/index.html-a3f200a8.js
*** 명령 ***
    1: clean                2: filter by pattern    3: select by numbers    4: ask each             5: quit
    6: help
무엇을 할까요> 1
docs/assets/app-a5e3f83c.js 제거
docs/assets/index.html-6e725bfb.js 제거
docs/assets/index.html-77e713f0.js 제거
docs/assets/index.html-a3f200a8.js 제거
docs/team/how2pr/ 제거
╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡
STG DEPLOY OK!
https://oss-cashmallow.web.app
```

2. PRD
- github pages -> docs
- sh prd-build.sh -> push -> pr merge -> deploy - end
- https://oss.cashmallow.com

<img src="https://user-images.githubusercontent.com/120996497/212484360-1b212db0-5a5c-449f-8cc2-35de2126bd66.png" alt="cashmallow" style="width:600px;"/>
<img src="https://oss-cashmallow.github.io/images/hero.png" alt="cashmallow" style="width:200px;"/>
