# 소개

앱테스트에이아이 기술면접 작업을 위한 템플릿입니다.

# 사용 스텍

React, Hook, styled-Component

# 구조

프로젝트 구조는 다음과 같습니다.

**src/ui/atoms/**

- 가장 작은 단위의 재사용성이 높은 컴포넌트입니다.

**src/ui/molecules/**

- atom을 조합한 컴포넌트입니다.

**src/component/page/main.js/**

- 메인페이지로 화면에 보여지는 레이아웃입니다.

```bash
├── package-lock.json
├── package.json
├── public
│   ├── data
│   └── index.html
├── src
│   ├── component
│   │   ├── page
│   │   │   └── main.js
│   │   ├── templates
│   │   └── ui
│   │   ├── atoms
│   │   │   ├── Shape.png
│   │   │   ├── appTestIcon.png
│   │   │   ├── emptyPanel.js
│   │   │   ├── minimize.png
│   │   │   ├── panel.js
│   │   │   ├── projectSelected.js
│   │   │   ├── rightSelected.js
│   │   │   ├── spliter.js
│   │   │   ├── spliterLeft.js
│   │   │   ├── titlebar.js
│   │   │   └── toolbar.js
│   │   └── molecules
│   │       ├── aside.js
│   │       ├── devicePanel.js
│   │       ├── locatorPanel.js
│   │       └── project.js
│   └── index.js
└── yarn.lock
```

# 실행가능한 스크립트

`yarn start`

프로젝트를 localhost:3000 주소로 개발용 모드로 실행합니다.
