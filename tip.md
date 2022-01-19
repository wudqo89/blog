# Blog

https://www.youtube.com/watch?v=ACzFIAOsfpM

https://www.youtube.com/watch?v=Z8xreoTX9aY

https://devdojo.com/

https://www.youtube.com/watch?v=bFTvPyryYkY

https://www.youtube.com/watch?v=BpQDmGdl60c

https://www.youtube.com/watch?v=xC4Yq_mXvPM

https://dyjh-blog.netlify.app/posts/2020-gatsby-blog

https://www.youtube.com/watch?v=6YhqQ2ZW1sc

https://www.youtube.com/watch?v=8t0vNu2fCCM

https://www.youtube.com/watch?v=vfvfmUFAa-s&list=PLW0RabRDhwwzVNhlOgQQgw6HJzXdM1MnT

https://www.youtube.com/watch?v=UvRMgoJY5q0

- [Full website](https://www.youtube.com/watch?v=4ELH8CT4J0A)
- [포켓몬API](https://www.youtube.com/watch?v=-xrZtTf_bB0)

# Gatsby
- [JAMstack](https://jamstack.org/generators/)
- [ninja_tutorial](https://www.youtube.com/watch?v=Qms4k6y7OgI)
- [ninja_github](https://github.com/iamshaunjp/gatsby-tutorial)
- [gatsby](https://www.gatsbyjs.com/docs/)
- [CSR/SSR/SSG](https://www.youtube.com/watch?v=f1rF9YKm1Ms)
- [gatsby_project](https://www.youtube.com/watch?v=JlxXHlygVLM&list=PLBDU2-QvHFYVmrOLqcUASF8RHlr5cULwg&index=6)
- [markdown](https://guides.github.com/features/mastering-markdown/)

## What is Gatsby
- SSG(Static Site Generator)
- uses a combination of React & GraphQl

## Static Site Generators
- Generates static HTML pages using a combo of templates, Components(react), Data(graphql)
(React & GraphQl로 이루어진 Gatsby를 HTML로 생성)

## website 종류
### Static websites (보편적)
- uses static HTML pages (with JS, CSS)
- pages uploaded to a CDN / web host
- page를 request > server에 > html로 response
- drawbacks(단점)
  - hard to update / maintain pages(re-writing a lot of the same code on every page)
  - generally do not contain dynamic data

### SPA (Single Page Applications)
- typical React / Vue website
- Only a single server request made for the initial HTML page (empty)
- Everything else (routing, data) is handled by the SPA in the browser
(초기 한번만 요청한 뒤에 추가 페이지 요청 없다. fetching data로 바꾼다.)
- initial request only > server에 > HTML,React 코드를 response
- drawbacks(단점)
  - Web pages are not SEO friendly (initial request is for a blank HTML page)

### SSR (Server Side Rendered)
- pages rendered on the server after every request
- server sources data(e.g.mongodb) & uses templates to render HTML pages (php서버나 express ejs템플릿 같은거)
- resulting pages are sent back to the browser
- page requests > server에 > renders pages using template&data > HTML로 response
- drawbacks(단점)
  - Fresh request needs to be made for every page
  - Server can take time getting data and rendering pages

### SSG (Static Site Generator, Gatsby)
- Static pages are compiled at build-time (before deployment)
- Gatsby sites / pages are made using React components
- Static pages are then deployed to the web
- After initial request, the site behaves more like an SPA
(initial request만 SSR처럼 한 뒤에 이후에는 SPA처럼 작동. 두가지 단점을 모두 보완)

### Static vs SPA vs SSR vs SSG
- static : SEO (O) Speed (X) Easy to update (X)
- SPA: SEO (X) Speed (O) Easy to update (O)
- SSR: SEO (O) Speed (X) Easy to update (O)
- SSG: SEO (O) Speed (O) Easy to update (O)
  
---
## install
- [npm_gatsby](https://www.npmjs.com/package/gatsby)
- [gatsby_starter](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world/)
- [modifying config](https://www.gatsbyjs.com/docs/modifying-a-starter/)
1. `npm install -g gatsby-cli`
2. `gatsby new my-gatsby-project https://github.com/gatsbyjs/gatsby-starter-hello-world`


## 용어

### package.json
- develop: preview the website in a browser

### public 폴더
- npm에서 `gatsby develop`한 이후에 생성 된 index가 위치한 폴더

### src/pages 폴더
- pages 폴더 안에서 'about'처럼 이름 그대로 route가 match된다.
- **sub directory** 만들때 posts/test.js 처럼 만들기

### static 폴더
- static 폴더에서 image 파일을 넣으면 public 폴더에 연결되어 브라우저에서 바로 사용가능
- static 폴더는 js,css, img 파일 등 모두 그대로를 보관 가능, src 폴더 처럼 배포시 최적화와 관계없음.

### GraphQL 
- A query language used to query data
- alternative to using a REST API
- 

#### content mesh
- gatsby는 'wordpress, mongodb, shopify, contentful' 등 data들을 graphql에 single로 담아서 website와 연결한다

### gatsby-config.js
1. plugin
   1. filesystem
      - notes란 폴더를 따로 만들고 path를 연결
      - localhost:8000/__graphql > allFile > relativepath에서 확인 가능
      - relativeDirectory는 notes 안에 폴더를 말함
   2. transformer-remark
      - md파일로 작성하면 html로 자동변환해준다.
2. **transformer plugin**: `gatsby-source-filesystem`으로 실제 데이터를 render하기 위해 이 플러그인이 필요
3. **frontmatter**: MD,MDX파일에 추가 할 수 있는 metadata이다.

### MDX
- [mdx](https://www.gatsbyjs.com/docs/tutorial/part-5/)
- [mdx-docs](https://mdxjs.com/)
- MDXRenderer 컴포넌트, allFile 대신 allMdx사용(graphql)
- `@mdx-js/mdx`: MDX 실행 돕는 npm
- `@mdx-js/react`: React 컴포넌트에서 MDX 실행 돕는 npm
- `gatsby-remark-image`, `gatsby-remark-prismjs`, `gatsby-remark-autolink-headers`

### GraphQL
- localhost:8000/__graphql 에서 다양하게 쿼리를 추출해서 각 component, pages 들에게 알맞게 사용가능

### Optimized images
- [plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)
- plugin 검색 중 `gatsby-plugin-image` 설치 (`gatsby-transformer-sharp` `gatsby-plugin-sharp`도 필요)
- `src/images` 폴더 생성, static폴더는 browser만 사용 가능 한거라서 src폴더에 qraphql과 연결할 images폴더가 필요

**나중에 gatsby-image 플러그인 소스파일 까보자 왜냐면 optimized 이미지를 어떻게 하는지 순수 js로 해보자**

## google-font plugin을 쓰는 이유
- [link vs import](https://stackoverflow.com/questions/12316501/including-google-web-fonts-link-or-import)
- CSS에서 `@import`사용시 브라우저는 css를 모두 가져오기 전까지 화면을 렌더링하지 않기 때문에 속도에 문제가 생김. 그래서 `<link>`를 사용하는데 gatsby에서는 plugin으로 처리

## styled components
- [styling](https://www.gatsbyjs.com/docs/how-to/styling/styled-components/)

## deploy
0. `gatsby serve` 배포 전 테스트
1. [netlify](https://www.netlify.com/)
2. `gatsby build` 이후에
3. **public폴더에** 있는 것을 업로드
4. 성공뜨면 주소로 들어가보기
5. github repo 만들고 netlify에서 new git site 연결
6. post를 vscode에서 작성하고 여기서 터미널에서 git에 올리면 자동 추가된다
- [github](https://www.youtube.com/watch?v=W7zENEBM348&list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB&index=22)   
- [deploy](https://www.youtube.com/watch?v=z1lRZT4QX84&list=PLW0RabRDhwwzVNhlOgQQgw6HJzXdM1MnT&index=27)

## gatsby clean
- 터미널에서 cache 초기화 명령어



## 구글 애널리틱스 붙이기

- [mdx](https://mdxjs.com/getting-started/gatsby)
- [gatsby-theme](https://themes.lekoarts.de/)

https://www.youtube.com/c/TheNetNinja/videos

[면접](https://stothey0804.github.io/etc/2020review/)

https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

https://www.youtube.com/watch?v=6cb56Luubd4

https://www.youtube.com/watch?v=-ANCcFQBk6I

https://www.youtube.com/watch?v=asB-dUwpH4Y

https://www.youtube.com/watch?v=B70h37mpD74

https://www.youtube.com/watch?v=JlxXHlygVLM


git add .
git commit -m " "

git status
git push

[wesbos](https://mastergatsby.com/)
[wesbos](https://www.youtube.com/watch?v=P1O68FIRSJ8)
[wesbos](https://www.youtube.com/watch?v=ghHV2JOawvM)
[wesbos](https://www.youtube.com/watch?v=hbT9gKRMAZU)
[wesbos](https://www.youtube.com/watch?v=3CfJa4cukt4)
[wesbos](https://github.com/wesbos/master-gatsby)
[wesbos](https://github.com/wesbos/gatsby-demo)
[flavio](https://flaviocopes.com/gatsby/)
[gatsby-guide](https://www.gatsbyjs.com/docs/how-to/)
[tutorial](https://www.gatsbyjs.com/docs/tutorial/part-7/)
[tutorial-blog](https://introworkshopexamplesitev3.gatsbyjs.io/)
[refer](https://www.gatsbyjs.com/docs/reference/?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter)
[concept](https://www.gatsbyjs.com/docs/conceptual/?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter)
[plugin](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter)
[graphql](https://www.howtographql.com/)

https://github.com/JaeYeopHan/gatsby-starter-bee/blob/master/README.ko.md

https://www.youtube.com/watch?v=z1lRZT4QX84&list=PLW0RabRDhwwzVNhlOgQQgw6HJzXdM1MnT&index=27

index.js에 allPost를 옮기자?! 어떻게할까?

https://www.youtube.com/watch?v=B8Wamvt2SL0

[browser](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)
[node](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)

[jbee](https://jbee.io/?category=tool)

[skilldrive](https://www.youtube.com/watch?v=xBbsjNs3afk&list=PLW0RabRDhwwzVNhlOgQQgw6HJzXdM1MnT&index=3)