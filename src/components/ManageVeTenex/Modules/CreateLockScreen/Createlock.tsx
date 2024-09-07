import TenexIcon from '../../../../assets/Tenex.png';
import InformIcon from '../../../../assets/information.png';
import {
  LockDescriptonTitle,
  LockHeaderTitle,
  LockCardstyle,
} from '../../Styles/ManageVetenex.style';
import {
  Slider,
  SliderContainer,
} from '../../../Swap/styles/TransactionDeadline.style';
import {
  LockTitle,
  CreateLockFirstSection,
  LockLoaderContainer,
  LoaderStatus,
  LoaderStyle,
  SliderDeadlineStyle,
  LockScreenInstruction,
  InformImg,
  LockProgressStyle,
  LockInputBox,
  LoaderStatusWrapper,
  LockHeaderStyle,
  WeeksLabel,
} from '../../Styles/CreateLock.style';
import LockDeposite from './LockDeposite';
import { StatsCardtitle } from '../../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import { MainContainerStyle } from '../../../common/MainContainerStyle';
import { CreateMainContainer } from '../../../Liquidity/ManageLiquidity/styles/Managepool.style';
import {
  FormFieldContainer,
  FormRowWrapper,
  ImageWithTitleWrap,
  TokenImgLiquidity,
} from '../../../Liquidity/ManageLiquidity/styles/LiquidityForm.style';
import { ChangeEvent, useState } from 'react';

const Createlock = () => {
  const [WeekValue, SetWeekValue] = useState(1);
  const [LockTokenValue, setLockTokenValue] = useState<number>(0);
  const HandleWeeksStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const TotalWeeks = e.target.value;
    SetWeekValue(Number(TotalWeeks));
  };

  const labels = [
    { value: 1, weeks: '1 week' },

    { value: 52, weeks: '1 year' },
    { value: 104, weeks: '2 year' },
    { value: 156, weeks: '3 year' },
    { value: 208, weeks: '4 year' },
  ];

  const handleLockInputData = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setLockTokenValue(Number(e.target.value));
  };
  return (
    <MainContainerStyle>
      <LockHeaderStyle>
        <LockHeaderTitle fontSize={36}>Lock</LockHeaderTitle>
        <LockDescriptonTitle fontSize={16}>
          Lock your tokens for veTENEX voting power
        </LockDescriptonTitle>
      </LockHeaderStyle>

      <CreateMainContainer>
        <CreateLockFirstSection>
          <LockCardstyle>
            <FormFieldContainer>
              <FormRowWrapper>
                <ImageWithTitleWrap>
                  <TokenImgLiquidity src={TenexIcon} alt="USDT logo" />
                  <label>TENEX</label>
                </ImageWithTitleWrap>
                <label>Available 0000</label>
              </FormRowWrapper>
              <div>
                <LockInputBox
                  type="number"
                  name="usdt"
                  onChange={handleLockInputData}
                />
              </div>
              <LockProgressStyle>
                <label>0%</label>
                <label>25%</label>
                <label>50%</label>
                <label>75%</label>
                <label>MAX</label>
              </LockProgressStyle>
            </FormFieldContainer>

            <LockTitle fontSize={17}>
              Locking your TENEX tokens for 0.243 veTENEX voting power
            </LockTitle>
            <LockLoaderContainer>
              <LoaderStatusWrapper fontSize={14}>
                <LoaderStatus>{WeekValue} weeks</LoaderStatus>
              </LoaderStatusWrapper>
              <LoaderStyle>
                <SliderContainer>
                  <Slider
                    type="range"
                    min="1"
                    max="208"
                    step={1}
                    value={WeekValue}
                    onChange={HandleWeeksStatus}
                  />
                </SliderContainer>
              </LoaderStyle>
              <SliderDeadlineStyle fontSize={10}>
                {labels.map(({ value, weeks }) => (
                  <WeeksLabel key={value} onClick={() => SetWeekValue(value)}>
                    {weeks}
                  </WeeksLabel>
                ))}
              </SliderDeadlineStyle>
            </LockLoaderContainer>
          </LockCardstyle>

          <LockCardstyle>
            <LockScreenInstruction>
              <InformImg src={InformIcon} />
              <StatsCardtitle fontSize={14}>
                Locking will give you an NFT, referred to as a veNFT. You can
                increase the Lock amount or extend the Lock time at any point
                after.
              </StatsCardtitle>
            </LockScreenInstruction>
          </LockCardstyle>
        </CreateLockFirstSection>
        <LockDeposite LockTokenValue={LockTokenValue} />
      </CreateMainContainer>
    </MainContainerStyle>
  );
};

export default Createlock;