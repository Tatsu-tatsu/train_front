import styled from 'styled-components';
import type { StationType } from '@/components/pages/change-stations/ChangeStations';
import { BLACK, GRAY } from '@/context/style/colorTheme';

type StationCardProps = {
  Station: StationType;
  onClickStation: () => void;
};

export const StationCard: React.FC<StationCardProps> = (props) => {
  return (
    <>
      <StationCardWrapper>
        <div>
          <StationName>{props.Station.stationName}</StationName>
          <StationLineName>{props.Station.stationLineName}</StationLineName>
        </div>
        <StationRegisterContainer onClick={props.onClickStation}>選択</StationRegisterContainer>
      </StationCardWrapper>
    </>
  );
};

const StationCardWrapper = styled.div`
  width: 96%;
  height: 68px;
  border-bottom: 1px solid ${GRAY};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StationName = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: ${BLACK};
  margin: 0;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StationLineName = styled.p`
  width: 100%;
  color: purple;
  font-size: 14px;
  margin: 0;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StationRegisterContainer = styled.button`
  width: 18vw;
  color: white;
  font-size: 14px;
  background-color: purple;
  border-radius: 32px;
  padding: 10px 0;
`;
