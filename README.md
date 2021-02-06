# pam-buttons

Button component used on arbeidsplassen.nav.no

## Get started

> The library is not yet available on npm, but for now it can be tested by installing
> from Github

<code>
    <del>npm i pam-buttons</del>
</code>

`npm i https://github.com/navikt/pam-buttons.git`

## Use

These components depend on a theme being provided through props. This can be achieved by using the `ThemeProvider` from
styled-components.

### Theming

The theme provided through `ThemeProvider` must conform to the following interfaces:

```typescript

// theme.ts

interface ThemeColors {
    primaryDarkBlue: string
    primaryWhite: string
    primaryPurple: string
    secondaryPurple: string
    infoYellow: string
    inactiveGrey: string
}

export interface Theme {
    colors: ThemeColors
}
```

### Example implementation

```typescript

// arbeidsplassen.theme.ts

export const theme: Theme = {
    colors: {
        primaryDarkBlue: '#062140',
        primaryWhite: '#FFFFFF',
        primaryPurple: '#8C368E',
        secondaryPurple: '#FBD8E7',
        infoYellow: '#FFA733',
        inactiveGrey: '#78706A'
    }
}
```

```tsx

// example.tsx

import {PrimaryButton, SecondaryButton, TertiaryButton} from "pam-buttons";
import {ThemeProvider} from "styled-components";
import {theme} from "./arbeidsplassen.theme";

<ThemeProvider theme={theme}>

    <PrimaryButton>This is a primary button</PrimaryButton>

    <SecondaryButton>This is a secondary button</SecondaryButton>

    <TertiaryButton>This is a tertiary button</TertiaryButton>

</ThemeProvider>
```
