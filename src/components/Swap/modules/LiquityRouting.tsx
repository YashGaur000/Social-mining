import {
  LiquityContainer,
  Step,
  StepCommon,
  StepImage,
  StepLabel,
  StepLine,
  StepperContainer,
} from '../styles/LiquityRouting.style';
import FwdIcon from '../../../assets/fwd-arrow.png';
import { Route } from '../../../utils/generateAllRoutes';
import { useEffect, useState } from 'react';
import { findTokenByAddress } from '../../../hooks/useTokenInfo';
import { TokenInfo } from '../../../constants/tokens';

const LiquityRouting = ({ route }: { route: Route[] }) => {
  const [srcToken, setSrcToken] = useState<TokenInfo | undefined>(undefined);
  const [destTokens, setDestToken] = useState<TokenInfo[]>([]);
  const [stable, setStable] = useState<boolean[]>([]);

  useEffect(() => {
    if (route.length === 0) return;

    // Extract the source token and map the destination tokens and stable factors
    const [token1, tokens, stableFactor] = route.reduce(
      ([src, dest, stable], r, index) => {
        if (index === 0) {
          src = findTokenByAddress(r.from);
        }
        dest.push(findTokenByAddress(r.to)!);
        stable.push(r.stable);
        return [src, dest, stable];
      },
      [undefined, [], []] as [TokenInfo | undefined, TokenInfo[], boolean[]]
    );

    setSrcToken(token1);
    setDestToken(tokens);
    setStable(stableFactor);
  }, [route]);

  return (
    <LiquityContainer>
      <StepperContainer>
        <StepCommon>
          <StepImage src={srcToken?.logoURI} alt="Icon 1" />
        </StepCommon>
        {destTokens.map((token, i) => (
          <>
            <StepLine />
            <Step>
              <StepImage src={FwdIcon} alt="Icon 2" />
              {stable[i] ? (
                <StepLabel>
                  0.05%
                  <br />
                  Stable
                </StepLabel>
              ) : (
                <StepLabel>
                  0.3%
                  <br />
                  Volatile
                </StepLabel>
              )}
            </Step>
            <StepCommon>
              <StepImage src={token.logoURI} alt="Icon 3" />
            </StepCommon>
          </>
        ))}
      </StepperContainer>
    </LiquityContainer>
  );
};

export default LiquityRouting;
