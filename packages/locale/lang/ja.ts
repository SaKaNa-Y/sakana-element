export default {
  name: 'ja',
  el: {
    select: {
      loading: 'ロード中',
      noMatch: 'データなし',
      noData: 'データなし',
      placeholder: '選択してください',
    },
    dropdown: {
      toggleDropdown: 'ドロップダウン切替',
    },
    messagebox: {
      title: 'メッセージ',
      confirm: 'OK',
      cancel: 'キャンセル',
      error: '正しくない入力',
      close: 'このダイアログを閉じる',
    },
    popconfirm: {
      confirmButtonText: 'はい',
      cancelButtonText: 'いいえ',
    },
    validator: {
      validated: '検証済み',
      required: 'この項目は必須です',
      failed: '検証に失敗しました',
    },
    calendar: {
      prevMonth: '前月',
      nextMonth: '翌月',
      today: '今日',
      dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
      monthNames: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
    },
  },
};
