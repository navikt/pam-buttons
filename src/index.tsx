import styled from "styled-components";
import {Theme} from "./theme";

interface ButtonProps {
    theme: Theme
}

const Button = styled.button<ButtonProps>`
  ${({theme}: ButtonProps) => `
        appearance: none;
        cursor: pointer;
        font-family: 'Source Sans Pro', Arial, sans-serif;
        border-radius: 5rem;
        font-weight: 600;
        padding: 0.5rem 1rem;
        white-space: nowrap;
        border: 3px solid ${theme.colors.primaryDarkBlue};
        font-size: 1rem;
        color: ${theme.colors.primaryDarkBlue};
        :focus, :active {
            background: ${theme.colors.secondaryPurple};
            color: ${theme.colors.primaryPurple};
            border-color: ${theme.colors.primaryPurple};
            box-shadow: 0 0 0 3px ${theme.colors.infoYellow};
            outline: none;
        }
        :disabled {
            color: ${theme.colors.inactiveGrey};
            border-color: ${theme.colors.inactiveGrey};
            background: ${theme.colors.primaryWhite};
        }
  `}
`;

export const PrimaryButton = styled(Button)<ButtonProps>`
  ${({theme}: ButtonProps) => `
        color: ${theme.colors.primaryWhite};
        background: ${theme.colors.primaryPurple};
        border-color: ${theme.colors.primaryPurple};
        :not(:disabled) {
            :hover {
              background: ${theme.colors.secondaryPurple};
              color: ${theme.colors.primaryPurple};
              border-color: ${theme.colors.primaryPurple};
            }
        }
  `}
`

export const SecondaryButton = styled(Button)<ButtonProps>`
  ${({theme}: ButtonProps) => `
        color: ${theme.colors.primaryPurple};
        background: ${theme.colors.primaryWhite};
        border-color: ${theme.colors.primaryPurple};
        :not(:disabled) {
          :hover {
            background: ${theme.colors.primaryPurple};
            color: ${theme.colors.primaryWhite};
            border-color: ${theme.colors.primaryPurple};
          }
        }
    `}
`

export const TertiaryButton = styled(Button)<ButtonProps>`
  ${({theme}: ButtonProps) => `
        color: ${theme.colors.primaryPurple};
        background: transparent;
        border-color: transparent;
        :not(:disabled) {
          :hover {
            border-color: ${theme.colors.primaryPurple};
          }
        }
    `}
`
