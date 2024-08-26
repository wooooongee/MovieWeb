## MovieWeb
---

MovieWeb은 TMDb API를 사용하여 최신작, 인기작, 개봉 예정작 등 다양한 영화를 소개하는 웹사이트입니다. 영화 상세 페이지에서는 예고편과 간략한 영화 소개를 제공하며, 비슷한 장르의 연관 작품도 함께 제시됩니다. 또한, 검색 기능을 통해 특정 작품을 쉽게 찾을 수 있으며, TMDb에서 제공하는 YouTube 영상 ID를 활용해 예고편을 재생할 수 있습니다. 예고편 ID가 없는 경우, 해당 기능은 비활성화됩니다.

---

## 구현 기능

## Main Trailer

가장 인기 있는 영화의 트레일러와 영화 소개를 메인 화면에 배치했습니다. TMDb에서 제공하는 YouTube 영상 ID가 없는 경우, 다른 인기 영화를 순차적으로 탐색하여 트레일러를 표시합니다.

<img width="1510" alt="스크린샷 2024-08-23 오후 5 49 28" src="https://github.com/user-attachments/assets/40b17763-67f0-49b3-b40c-707245b65b4e">

## MovieSlider

react-slick 을 활용하여 캐러셀 슬라이더 기능을 구현하였습니다. 4초에 한 번씩 자동으로 슬라이드가 되며 버튼을 통해 직접 움직일 수 있고 마우스 오버 시 영화 소개글이 보이며 일정 글자수가 넘어가면 잘라내었습니다. 클릭시 Detail 페이지로 넘어갑니다.
파라미터 문법을 통해 API 엔드포인트를 바꿔 Main 페이지에서는 now_playing 으로 하여 영화 최신작으로 구성하고 Detail 페이지에서는 recommendations 으로 하여 특정 영화와 비슷한 영화들을 추천할 수 있도록 하였습니다. 영화 포스터 및 영화 소개글이 없는 영화는 필터링 되도록 하였습니다.
또한 디바이스 디스플레이 종류에 반응하여 그에 맞도록 적절하게 UI요소를 유기적으로 배치할 수 있도록 반응형 웹 디자인을 고려하였습니다. (media query 사용)

### Desktop
<img width="1511" alt="스크린샷 2024-08-23 오후 5 49 44" src="https://github.com/user-attachments/assets/32dacba8-36e3-41b4-adc1-6f8d8ad28d9e">

### Tablet
<img width="944" alt="스크린샷 2024-08-26 오후 6 05 43" src="https://github.com/user-attachments/assets/effc0bee-9cc8-461b-9f69-25148881b332">

### Mobile
<img width="751" alt="스크린샷 2024-08-26 오후 6 05 59" src="https://github.com/user-attachments/assets/f13f2005-7bbe-4272-9b75-ae511fbcd4ab">

## Detail

영화 줄거리 및 다양한 트레일러가 제공되는 상세 페이지이며 반응형 웹 디자인을 고려하여 개발했습니다. (media query 사용)

### Desktop
<img width="1512" alt="스크린샷 2024-08-26 오후 6 12 32" src="https://github.com/user-attachments/assets/9c546773-e490-42a7-bbc8-4d310655906f">
<img width="1511" alt="스크린샷 2024-08-26 오후 6 12 49" src="https://github.com/user-attachments/assets/c14f1cb1-9271-4345-a78c-6780db852339">

### Tablet
<img width="1014" alt="스크린샷 2024-08-26 오후 6 13 31" src="https://github.com/user-attachments/assets/5b3574e9-7fa0-4614-9c4d-2e4c3d1f8711">

### Mobile
<img width="754" alt="스크린샷 2024-08-26 오후 6 13 55" src="https://github.com/user-attachments/assets/e3733eff-5587-4516-989f-e1c21f86d090">

## Category & MovieGrid

Nav 바에서 영화 장르, 인기작, 개봉 예정작 등 다양한 카테고리를 선택하여 추천 영화를 확인할 수 있는 페이지입니다.
 여러 상세 카테고리 선택을 통해 사용자가 원하는 영화를 쉽게 찾을 수 있도록 설계되었습니다. 
또한 반응형 웹 디자인을 고려하여 개발했습니다. (grid 사용)

### Desktop
<img width="1512" alt="스크린샷 2024-08-26 오후 6 37 50" src="https://github.com/user-attachments/assets/bffb7a0c-7387-46b0-81d5-0b11be5a9a0b">

### Tablet
<img width="755" alt="스크린샷 2024-08-26 오후 6 35 45" src="https://github.com/user-attachments/assets/1e88e2cd-0882-46e6-9e18-2a2cf5b38b3e">

### Mobile
<img width="661" alt="스크린샷 2024-08-26 오후 6 36 05" src="https://github.com/user-attachments/assets/35b19b6d-e963-49fd-b38f-eb1695df49c9">


## Search

영화 제목을 검색하여 원하는 영화를 찾을 수 있는 기능을 제공합니다. 검색어의 최소 글자 수를 제한하여 잘못된 검색을 방지하며, 검색 결과가 없을 경우 페이지가 이동되지 않도록 처리했습니다.

<img width="1512" alt="스크린샷 2024-08-26 오후 6 53 19" src="https://github.com/user-attachments/assets/5f0ec9cd-15c5-454b-bf91-1b69c97540ce">


## 404 Page

사용자 이탈률을 감소시키기 위해 제작하였습니다.

<img width="1512" alt="스크린샷 2024-08-26 오후 6 58 42" src="https://github.com/user-attachments/assets/f6ffaae6-444b-4840-bc35-9eb367df2e27">

## Project tree

<img width="433" alt="스크린샷 2024-08-26 오후 7 12 07" src="https://github.com/user-attachments/assets/76620466-66d8-4a91-9316-31328eda8998">
