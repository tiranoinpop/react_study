# react_study

"초보자를 위한 리액트 200제" 를 따라 하며 만드는 React 실습 프로젝트입니다.
책은 create-react-app 기준이지만, 이 프로젝트는 **Vite + React 19** 로 진행합니다.

- 공부 노트 : https://tiranoinpop.github.io/my_front_end_study/react_study.html

## 실행

```bash
npm install     # 처음 한 번 (node_modules 생성)
npm run dev     # 개발 서버 → http://localhost:5173
```

## 구성

| 파일 | 내용 |
|---|---|
| `src/App.jsx` | 예제를 불러와 화면에 보여 주는 첫 컴포넌트 |
| `src/R003_ImportConponent.jsx` | 예제 3 : 컴포넌트 import / export |
| `src/R004 ~ R007_LifeCycleEx.jsx` | 예제 4~7 : 생명주기 함수 (render, constructor, getDerivedStateFromProps, componentDidMount) |

## 책(CRA) ↔ 이 프로젝트(Vite)

| 책 | 이 프로젝트 |
|---|---|
| `src/App.js` | `src/App.jsx` |
| `src/index.js` | `src/main.jsx` |
| `npm start` | `npm run dev` |
| `localhost:3000` | `localhost:5173` |
