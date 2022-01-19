# DOCS

- [TS](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Gatsby](https://www.gatsbyjs.com/docs/quick-start/)

# Gatsby Directory

- Root Directory

  - contents

    블로그 포스트 관련 파일들을 저장하기 위한 디렉토리입니다.

  - src

    - components

      React Component를 저장하기 위한 디렉토리입니다.

    - hooks

      Custom Hooks을 저장하기 위한 디렉토리입니다.

    - pages

      페이지의 역할을 하는 컴포넌트를 저장하기 위한 디렉토리입니다.

      기본적으로 브라우저에서 pages 디렉토리에 있는 파일의 이름을 통해 페이지에 접근할 수 있기 때문에 페이지의 역할이 아닌 컴포넌트들은 해당 디렉토리에 절대 저장하면 안 됩니다.

    - templates

      게시글 페이지와 같이 페이지의 역할을 하면서 같은 형식의 여러 콘텐츠를 보여주는 컴포넌트를 저장하기 위한 디렉토리입니다.

      Gatsby에서 제공하는 API를 통해 이 디렉토리에 저장된 템플릿 컴포넌트로 여러 페이지를 만들 수 있습니다.

      pages 디렉토리와는 다르게 파일명으로 페이지에 접근이 불가능합니다.

# dependencies 충돌 error

- [해결](https://velog.io/@yonyas/Fix-the-upstream-dependency-conflict-installing-NPM-packages-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%EA%B8%B0)

# Error 해결

1. parsing error cannot read file

- `eslintrc.json`에서의 설정은 vscode 프로젝트를 열 때 해당 프로젝트 폴더만 켜야한다.

2. Delete/cr

- `prettierrc`파일에서 `"endOfLine": "lf"`으로 설정되어 있다면 vscode 하단 작업표시줄에서 `CRLF` 대신 `LF`로 설정을 바꿔야한다.

3. css property 문제

- `info.tsx`에서 `<div css>`라는 property를 사용 시 아래 Error 발생

```
Type '{ children: string; css: SerializedStyles; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
```

```
// 해결 방법.
// tsconfig.json에서 설정
{
  "compilerOptions": {
    "types": ["@emotion/react/types/css-prop"]
  }
}
```
