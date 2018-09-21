var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
let questions = [
  "이름이 뭔가요?",
  "취미가 있어요?",
  "오늘 뭐먹었어요?",
  "마지막으로 한 문화생활은?",
  "엄마가 좋아요, 아빠가 좋아요?",
  "인생에서 가장 재미있게 해 본 컴퓨터 게임은?",
  "심심할 때, 나는 ㅇㅇㅇ을 한다.",
  "다시 태어난다면 무엇으로 태어나고 싶나요?",
  "수업 중에 가장 기대되는 내용은 무엇인가요?",
  "크롬 브라우저 즐겨찾기에서 자주 가는 사이트 Top 3는?",
  "내가 서울 시장이라면, 이런 서비스를 무조건 출시할거다",
  "오른쪽에 앉은 살마과 나의 공톰점이 있다면 무엇인가요?",
  "올해에 가장 기억에 남는 사건 한 가지를 알려주세요",
  "모두 다 앞쪽 혹은 뒤쪽 혹은 양옆 조 사람들과 모두 반가운 인사를 나눠주세요",
  "좋아하는 음악이나 노래를 소개해주세요",
  "올해 안에 꼭 해내고 싶은 나만의 목표가 있다면?",
  "요즘 10대에게 가장 필요한건 무엇일까요?, 당신의 청소년 시절과 비교해 설명해주세요",
  "어떻게 이런 서비스를 만들었지하고 감탄했던 경험이 있다면 설명해주세요",
  "존경하는 롤 모델이 있나요?",
  "좋아하는 동물이 있나요?, 키워보고 싶은 동물이 있다면?",
  "(거만하게)자기자랑, 매력 1가지 뽐내기",
  "내일 침대에서 일어났을 때 새로운 능력을 갖추게 된다면 어떤 능력을 가지고 싶나요?",
  "자기 이름으로 3행시",
  "양옆 사람과 함게 셀카찍기. 김치~",
  "인생에서 가장 중요하게 생각하는 가치는?",
  "자신이 가장 마음에 드는 별명이 있다면?",
  "양옆 사람과 인사를 나누신 후, 나와 가장 멀리 앉아 있는 사람과 악수를 하세요",
  "다 함께, 3-3-7 박수를 하고 서로 하이파이브를 나눠보세요",
  "웹보다는, 모바일 앱으로 만들었을 때, 더 효과가 좋을 것 같은 서비스가 있다면?",
  "오랫동안 하고 싶었던 꿈이 있나요? 왜 그일을 하지 않았거나 못했나요?",
  "가장 흥미가 가는 업종 / 스타트업이 있다면?",
  "가장 즐겨쓰는 SNS는 무엇인가요? 왜 그 서비스를 즐겨 쓰나요?",
  "만약 내가 로또 1등 20억에 당첨되었다면 무엇을 하고 싶나요?",
  "좋아하는 색깔과 그 이유를 알려주세요",
  "이분의 장점을 다른 조원들이 설명해주세요!",
  "이곳 까지 오면서 어떤 교통수단으로 오셨나요? 흥미로웠던 사건을 목격한 것이 있나요?",
  "10년 뒤, 당신의 모습은 어떨 것 같나요?",
  "작년에 가장 즐거웠던 일을 알려주세요",
  "가장 잘 하는 운동은 무엇인가요? 그 운동을 잘하게 된 비법을 소개해주세요",
  "나만의 취미가 있다면?",
  "최근에 봤던 영화 후기를 이야기해주세요!"
];

function shuffleArray(questions) {
  for (var i = questions.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = questions[i];
    questions[i] = questions[j];
    questions[j] = temp;
  }
}

// function shuffleArray(questions) {
//   for (let i = questions.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [questions[i], questions[j]] = [questions[j], questions[i]];
//   }
// }
shuffleArray(questions);
// randomNum();
// console.log(result);
document.querySelector("#firstQuestion").textContent = questions[0];
document.querySelector("#secondQuestion").textContent = questions[1];
document.querySelector("#thirdQuestion").textContent = questions[2];
document.querySelector("#fourthQuestion").textContent = questions[3];
document.querySelector("#fifthQuestion").textContent = questions[4];
