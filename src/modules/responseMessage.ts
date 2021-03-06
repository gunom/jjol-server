const message = {
  NULL_VALUE: '필요한 값이 없습니다.',
  NOT_FOUND: '존재하지 않는 자원',
  BAD_REQUEST: '잘못된 요청',
  INTERNAL_SERVER_ERROR: '서버 내부 오류',

  // 토큰 관련
  NULL_VALUE_TOKEN: '토큰이 없습니다.',
  INVALID_TOKEN: '만료된 토큰입니다.',

  // 유저 관련
  CREATE_LINK_SUCCESS: '링크 생성 성공',
  READ_USER_SUCCESS: '유저 조회 성공',
  INVALID_PASSWORD: '패스워드 틀림',
  DIFFERENT_USER: '다른 유저로 접속 시도',
  // 미션 관련
  CREATE_MISSION_SUCCESS: '미션 생성 성공',
  READ_MISSION_SUCCESS: '미션 조회 성공',
  READ_CONFIRMED_MISSION_SUCCESS: '수락한 미션 조회 성공',
  MISSION_CONFIRM_SUCCESS: '모든 가보자고 완료',
};

export default message;
