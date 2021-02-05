import styled from "styled-components";
import {colors} from "./colors";

export const Button = styled.button`
  cursor: pointer;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  border-radius: 5rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  border: 3px solid;
  font-size: 1rem;
  line-height: 1;
  background: none;
  color: ${colors.primaryDarkBlue};
  border-color: ${colors.primaryDarkBlue};

  :focus, :active {
    background: ${colors.secondaryPurple};
    color: ${colors.primaryPurple};
    border-color: ${colors.primaryPurple};
    outline: none;
    box-shadow: 0 0 0 3px ${colors.infoYellow};
  }

  :disabled {
    color: ${colors.inactiveGrey};
    border-color: ${colors.inactiveGrey};
    background: ${colors.primaryWhite};
  }
`;

export const PrimaryButton = styled(Button)`
  color: ${colors.primaryWhite};
  background: ${colors.primaryPurple};
  border-color: ${colors.primaryPurple};

  :not(:disabled) {
    :hover {
      background: ${colors.secondaryPurple};
      color: ${colors.primaryPurple};
      border-color: ${colors.primaryPurple};
    }
  }
`

export const SecondaryButton = styled(Button)`
  color: ${colors.primaryPurple};
  background: ${colors.primaryWhite};
  border-color: ${colors.primaryPurple};

  :not(:disabled) {
    :hover {
      background: ${colors.primaryPurple};
      color: ${colors.primaryWhite};
      border-color: ${colors.primaryPurple};
    }
  }
`

export const TertiaryButton = styled(Button)`
  color: ${colors.primaryPurple};
  background: transparent;
  border-color: transparent;

  :not(:disabled) {
    :hover {
      border-color: ${colors.primaryPurple};
    }
  }
`
