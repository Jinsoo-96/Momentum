function Jinsoo_GPT(lv) {
  let point = 0;
  if (lv < 140 || lv > 300) return point; // 범위 밖 레벨 처리
  if (lv == 300) return 1698;

  const [loops, n] = [Math.floor((lv - 140) / 10), (lv - 140) % 10];
  // 첫 번째 반복문: 각 10레벨 구간마다 포인트 누적
  if (lv >= 140 && lv <= 299) {
    for (let i = 0; i < loops; i++) {
      point += (i + 3) * 10; // 각 구간별 기본 포인트 증가량 누적
    }
    point += (loops + 3) * (n + 1); // 현재 구간 내 레벨에 따른 추가 포인트 계산
  } // 현재 구간에서 n+1번 만큼 포인트 추가

  return point;
}

function calculateHyperStatPoints(level) {
  const points = [1, 2, 4, 8, 10, 15, 20, 25, 30, 35, 50, 65, 80, 95, 110]; // 레벨별 포인트 증가량
  if (level < 1 || level > 15) {
    return { requiredPoints: 0, accumulatedPoints: 0 }; // 범위 밖 레벨 처리
  }

  const requiredPoints = points[level - 1]; // 해당 레벨에 필요한 포인트
  let accumulatedPoints = 0;
  for (let i = 0; i < level; i++) {
    accumulatedPoints += points[i]; // 시작부터 현재 레벨까지 누적 포인트
  }

  return { requiredPoints, accumulatedPoints };
}

function GPT(lv) {
  let n = lv % 10;

  if (lv >= 140 && lv <= 149) {
    return 3 + 3 * n;
  } else if (lv >= 150 && lv <= 159) {
    return 34 + 4 * n;
  } else if (lv >= 160 && lv <= 169) {
    return 75 + 5 * n;
  } else if (lv >= 170 && lv <= 179) {
    return 126 + 6 * n;
  } else if (lv >= 180 && lv <= 189) {
    return 187 + 7 * n;
  } else if (lv >= 190 && lv <= 199) {
    return 258 + 8 * n;
  } else if (lv >= 200 && lv <= 209) {
    return 339 + 9 * n;
  } else if (lv >= 210 && lv <= 219) {
    return 430 + 10 * n;
  } else if (lv >= 220 && lv <= 229) {
    return 531 + 11 * n;
  } else if (lv >= 230 && lv <= 239) {
    return 642 + 12 * n;
  } else if (lv >= 240 && lv <= 249) {
    return 763 + 13 * n;
  } else if (lv >= 250 && lv <= 259) {
    return 894 + 14 * n;
  } else if (lv >= 260 && lv <= 269) {
    return 1035 + 15 * n;
  } else if (lv >= 270 && lv <= 279) {
    return 1186 + 16 * n;
  } else if (lv >= 280 && lv <= 289) {
    return 1347 + 17 * n;
  } else if (lv >= 290 && lv <= 299) {
    return 1518 + 18 * n;
  } else if (lv == 300) {
    return 1698;
  } else {
    return 0; // Lv가 범위 밖인 경우
  }
}
