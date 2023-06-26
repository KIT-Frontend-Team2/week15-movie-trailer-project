# 🎬 Movie Trailer 


- 배포 주소 : [링크](https://toymovieproject.netlify.app/popular)
- 설명 : TMDB API를 이용하여 영화 리스트, 검색 리스트와 영화 상세 정보를 제공하는 웹 애플리케이션
### 시연 영상
  
![list-page](https://github.com/KIT-Frontend-Team2/week15-movie-trailer-project/assets/115636461/61841c41-9964-4c75-a23d-e6ab170eb3f8)
![list-type-change](https://github.com/KIT-Frontend-Team2/week15-movie-trailer-project/assets/115636461/416a1b89-b850-4a3d-9426-9f2fa189d29a)
![search-page](https://github.com/KIT-Frontend-Team2/week15-movie-trailer-project/assets/115636461/86c6fcfc-a307-4070-a689-e71e44bcc921)
![detail-page](https://github.com/KIT-Frontend-Team2/week15-movie-trailer-project/assets/115636461/3052f7e4-a0cb-4441-a842-ae95568d3850)


### 페어정리

```
**1페어**
- 이지형
- 정지현

**2페어**
- 정자연
- 윤국현
- 이유경
```

[요구사항 명세서](https://www.notion.so/5aedd502114f4440a0a45a97928e8c73?pvs=21)

### 요구사항 역할 분담

| 기능 | 페어 |
| --- | --- |
| 메인페이지 구현 | 1페어 |
| 상세페이지 구현 | 2페어 |
| react-qurey를 사용하여 데이터를 캐싱 (상세) | 2페어 |
| 무한 스크롤링 (메인) | 1페어 |
| skelton UI (로딩페이지) | 1페어, 2페어 |
| 반응형 웹페이지 구현 | 1페어. 2페어 |

### 날짜별 결과물 정리

|           날짜 |                                                                결과물 |
| --- | --- |
|        6월 20일 | 디자인 시안, 와이어프레임 작성 |
|        6월 21일 | 요구사항 정리, 역할분담 |
|        6월 22일 | 레이아웃, 메인페이지, 상세페이지 구현 시작 |
|        6월 23일 | 페이지 구현완료, 데이터 캐싱 구현 완료, API 구현 완료 |
|        6월 24일 | 리스트 페이지 완료, 스크롤 탑 버튼 구현 완료,  검색 페이지 구현 시작 |
|        6월 25일 | 상세페이지, 검색 페이지 구현 완료 |
|        6월 26일 | Skeleton UI, 반응형 웹페이지 구현 완료 |

### 와이어 프레임 & 시안 작성

![wireframe](https://github.com/KIT-Frontend-Team2/week15-movie-trailer-project/assets/115636461/09495e60-4e27-4c8f-be20-8731492e8a52)


### 폴더 구조

```jsx
src
 ├ apis
 │   ├ DetailMovie
 │	 │	└ fetchMovieDetail.js
 │   ├ @core.js
 │	 └ main-movie-api.js
 ├ atom/ui.atom.js
 ├ common
 │   ├ Footer
 │   │  ├ UserProfile.js
 │   │	└ index.js
 │   ├ Header/index.js
 │   ├ Layout/index.js
 │   └ ToolBar/index.js
 ├ components
 │   ├ Main
 │   │  ├ Skeleton/Main-Skeleton-page.js
 │   │  ├ list
 │   │  │   ├ card-list.js
 │	 │  │   └ one-card.js
 │   │  ├ renderbanner/MainBanner.js
 │   │  └ scroll/scrollUp.js
 │   └ Skeleton
 │      ├ Skeleton/Search-Skeleton-page.js
 │      └ list
 │            ├ card-list.js
 │	          └ one-card.js
 ├ consts
 │   ├ apiKeyword.js
 │	 └ tmdbUrl.js
 ├ hooks
 │   ├ querys
 │   │  ├ @config.js
 │   │	└ use-main-query.js
 │   ├ use-detail-location.js
 │   ├ use-detail-navigate.js
 │   ├ use-device.js
 │   └ use-observer.js
 ├ pages
 │   ├ Detail/index.js
 │   ├ List/index.js
 │   ├ Main/index.js
 │   └ Search/index.js
 ├ routes/routes.js
 ├ styles
 │   ├ common.js
 │   ├ global.js
 │   └ theme.js
 └ utils/random-array-index-helper.js
 
```

### 사용기술 스택 목록

```
🖥️ FrontEnd : HTML / CSS / JavaScript / React
🌈 라이브러리 : material-ui / react-router / swiper / recoil / axios / styled-reset / styled-component 
🤼 협업도구 : Git + GitHub / Discord / Figma / prettier / eslint / husky
```
