export default {
  name: 'ko',
  el: {
    select: {
      loading: '불러오는 중',
      noMatch: '검색된 데이터 없음',
      noData: '데이터 없음',
      placeholder: '선택',
    },
    dropdown: {
      toggleDropdown: '드롭다운 전환',
    },
    messagebox: {
      title: '메시지',
      confirm: '확인',
      cancel: '취소',
      error: '올바르지 않은 입력',
      close: '대화 상자 닫기',
    },
    popconfirm: {
      confirmButtonText: '예',
      cancelButtonText: '아니오',
    },
    validator: {
      validated: '검증됨',
      required: '필수 항목입니다',
      failed: '검증 실패',
    },
    calendar: {
      prevMonth: '이전 달',
      nextMonth: '다음 달',
      today: '오늘',
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      monthNames: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
      ],
    },
  },
};
