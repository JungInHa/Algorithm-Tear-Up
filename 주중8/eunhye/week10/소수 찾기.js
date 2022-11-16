// 7점😾

function solution(n) {
  let answer = 0;

  //에라토네스의 체
  //기억이 잘 안 나서 헤메고 그랬다
  const isPrime = (num) => {
    if (num % 2 === 0) {
      if (num === 2) {
        return true;
      } else {
        return false;
      }
    }

    const sqrt = Math.floor(Math.sqrt(num));

    for (i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  //2부터 n까지 소수 세기
  //1은 소수가 아니니까 어차피... 제외
  for (k = 2; k <= n; k++) {
    isPrime(k) ? answer++ : answer;
  }

  return answer;
}

// 정확성
// 테스트 1 〉	통과 (0.10ms, 30.1MB)
// 테스트 2 〉	통과 (0.16ms, 30MB)
// 테스트 3 〉	통과 (0.19ms, 30.1MB)
// 테스트 4 〉	통과 (0.49ms, 30.1MB)
// 테스트 5 〉	통과 (0.21ms, 30.2MB)
// 테스트 6 〉	통과 (5.25ms, 32.2MB)
// 테스트 7 〉	통과 (0.60ms, 30.1MB)
// 테스트 8 〉	통과 (2.56ms, 32.8MB)
// 테스트 9 〉	통과 (7.59ms, 32.1MB)
// 테스트 10 〉	통과 (27.24ms, 32.7MB)
// 테스트 11 〉	통과 (105.78ms, 32.1MB)
// 테스트 12 〉	통과 (28.27ms, 32.7MB)

// 효율성
// 테스트 1 〉	통과 (114.70ms, 31.8MB)
// 테스트 2 〉	통과 (117.47ms, 31.8MB)
// 테스트 3 〉	통과 (114.18ms, 31.9MB)
// 테스트 4 〉	통과 (111.99ms, 32MB)
