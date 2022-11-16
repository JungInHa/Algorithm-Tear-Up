//2점🤔

function solution(s) {
  let answer = true;

  const arr = s.split("");

  const p = arr.filter((el) => el === "p" || el === "P");
  const y = arr.filter((el) => el === "y" || el === "Y");

  answer = p.length === y.length;
  return answer;
}

// 테스트 1 〉	통과 (0.05ms, 33.6MB)
// 테스트 2 〉	통과 (0.05ms, 33.6MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.13ms, 33.1MB)
// 테스트 6 〉	통과 (0.13ms, 33.5MB)
// 테스트 7 〉	통과 (0.16ms, 33.3MB)
// 테스트 8 〉	통과 (0.13ms, 33.5MB)
// 테스트 9 〉	통과 (0.20ms, 33.4MB)
// 테스트 10 〉	통과 (0.15ms, 33.5MB)
// 테스트 11 〉	통과 (0.20ms, 33.5MB)
// 테스트 12 〉	통과 (0.18ms, 33.6MB)
// 테스트 13 〉	통과 (0.14ms, 33.4MB)
// 테스트 14 〉	통과 (0.18ms, 33.4MB)
// 테스트 15 〉	통과 (0.17ms, 33.5MB)
// 테스트 16 〉	통과 (0.20ms, 33.6MB)
// 테스트 17 〉	통과 (0.13ms, 33.4MB)
// 테스트 18 〉	통과 (0.13ms, 33.4MB)
// 테스트 19 〉	통과 (0.13ms, 33.6MB)
// 테스트 20 〉	통과 (0.13ms, 33.4MB)
// 테스트 21 〉	통과 (0.12ms, 33.5MB)
// 테스트 22 〉	통과 (0.19ms, 33.5MB)
// 테스트 23 〉	통과 (0.13ms, 33.5MB)
// 테스트 24 〉	통과 (0.13ms, 33.5MB)
// 테스트 25 〉	통과 (0.12ms, 33.5MB)
// 테스트 26 〉	통과 (0.21ms, 33.4MB)
// 테스트 27 〉	통과 (0.13ms, 33.4MB)
// 테스트 28 〉	통과 (0.13ms, 33.4MB)
// 테스트 29 〉	통과 (0.05ms, 33.4MB)
// 테스트 30 〉	통과 (0.13ms, 33.5MB)

// 대소문자 구분 없이 하기 위해서 한 번 더 테스트 해보았는데 속도가 확 느려졌다.
// 아무래도 map으로 array를 한바퀴 더 돌게 되면서 시간이 O(n)만큼 더 소요된 듯
// 어차피 위 코드처럼 filter 단계에서 각 요소를 OR로 확인하기 떄문에 처음 푼게 시간적으로 더 좋은 코드였던 것 같다!

// 아래는 대소문자까지 정리해서 돌린 코드
// 테스트 25~30에서 속도가 0.33ms대가 나온다.

// function solution(s){
//     let answer = true;

//     const arr = s.split('').map(el => el.toLowerCase());

//     const p = arr.filter( el => el === 'p');
//     const y = arr.filter( el => el === 'y');

//     answer = p.length === y.length;
//     return answer;
// }
