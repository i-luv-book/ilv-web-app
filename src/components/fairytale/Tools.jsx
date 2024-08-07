import styled from 'styled-components';
import ToolButton from '../common/ToolButton';
import { lightBlack, lightGray, main } from '../../constants/colors';
import { ReactComponent as Play } from '../../assets/play.svg';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import ReadingHelper from './ReadingHelper';
import { FairytaleContext } from '../../context/FairytaleContext';

function Tools({ isTranslate, setIsTranslate }) {
  const {
    page,
    setPage,
    text,
    translateText,
    setTranslateText,
    audioContent,
    setAudioContent,
  } = useContext(FairytaleContext);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
    if (audioContent) {
      audioContent.forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    }
  }, [page]);

  const handleClickNextPageSwitcher = () => {
    setPage((prev) => prev + 1);
  };

  const handleClickBeforePageSwitcher = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <ToolsContainer>
      {page < 3 && (
        <ReadingHelper
          text={text[page]}
          page={page}
          translateText={translateText}
          setTranslateText={setTranslateText}
          audioContent={audioContent}
          setAudioContent={setAudioContent}
          isTranslate={isTranslate}
          setIsTranslate={setIsTranslate}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}
      <PageTools>
        <PageNationBox>
          {new Array(4).fill(0).map((_, id) => (
            <PageNationItem key={id} $isNowPage={page === id} />
          ))}
        </PageNationBox>
        <PageSwitcher>
          {page > 0 && (
            <ToolButton width={48} onClick={handleClickBeforePageSwitcher}>
              <Play fill={lightBlack} style={{ rotate: '180deg' }} />
            </ToolButton>
          )}
          {page < 3 && (
            <ToolButton width={48} onClick={handleClickNextPageSwitcher}>
              <Play fill={lightBlack} />
            </ToolButton>
          )}
          {page === 3 && (
            <Link to="/">
              <ExitButton>
                Exit <Play fill="white" />
              </ExitButton>
            </Link>
          )}
        </PageSwitcher>
      </PageTools>
    </ToolsContainer>
  );
}

const ToolsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  gap: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PageTools = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const PageNationBox = styled.div`
  display: flex;
  gap: 8px;
`;

const PageNationItem = styled.div`
  width: ${(props) => (props.$isNowPage ? 24 : 10)}px;
  height: 10px;
  border-radius: 300px;
  background-color: ${(props) => (props.$isNowPage ? main : lightGray)};
`;

const PageSwitcher = styled.div`
  display: flex;
  gap: 12px;
`;

const ExitButton = styled.div`
  display: flex;
  padding: 0px 16px;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 300px;
  background-color: ${main};
  color: white;
  cursor: pointer;
`;

export default Tools;
