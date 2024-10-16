// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEquals(objA: any, objB: any): boolean {
  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  if (objA === objB) {
    return true;
  }

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리 (null 또는 undefined 포함)
  if (objA === null || objB === null) {
    return false;
  }

  if (typeof objA !== "object" || typeof objB !== "object") {
    return false;
  }

  // 3. 객체의 키 개수가 다른 경우 처리
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 4. 모든 키에 대해 얕은 비교 수행
  for (let key of keysA) {
    if (!keysB.includes(key)) {
      return false;
    }

    if (objA[key] !== objB[key]) {
      return false; // 하나라도 값이 다르면 false 반환하고 함수 종료
    }
  }

  return true;
}
