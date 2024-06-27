import styled from 'styled-components';
import { darkGray, darkMain, green, red, lightBlack } from '../constants/colors';
import Difficulty from '../components/settingDifficulty/Difficulty';

function SettingDifficulty() {
  const difficultyInfo = [
    {
      difficulty: 0,
      title: '영유아',
      info: '4세에서 7세의 아이들에게',
      border: '#FFE178',
      background: '#FAD75A',
      color: darkMain,
    },
    {
      difficulty: 1,
      title: '초등학교 저학년',
      info: '8세에서 10세의 아이들에게',
      border: '#B2F76D',
      background: '#A1E75C',
      color: green,
    },
    {
      difficulty: 2,
      title: '초등학교 고학년',
      info: '10세에서 13세의 아이들에게',
      border: '#FFA9A9',
      background: '#FF8E8E',
      color: red,
    },
  ];

  return (
    <SettingDifficultyContainer>
      <SettingDifficultyTitle>난이도 설정</SettingDifficultyTitle>
      <SettingDifficultyInfo>
        선택된 나이에따라 교과 과정에 맞는
        <br /> 동화 생성, 퀴즈, 단어장이 만들어져요
      </SettingDifficultyInfo>
      <DifficultyBox>
        {difficultyInfo.map((difficulty, id) => (
          <Difficulty
            key={id}
            difficulty={difficulty.difficulty}
            title={difficulty.title}
            info={difficulty.info}
            border={difficulty.border}
            background={difficulty.background}
            color={difficulty.color}
          />
        ))}
      </DifficultyBox>
    </SettingDifficultyContainer>
  );
}

const SettingDifficultyContainer = styled.div`
  width: 600px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`;

const SettingDifficultyTitle = styled.div`
  font-family: 'Jalnan';
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 8px;
  color: ${lightBlack};
`;

const SettingDifficultyInfo = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
  color: ${darkGray};
  text-align: center;
  margin-bottom: 18px;
`;

const DifficultyBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default SettingDifficulty;