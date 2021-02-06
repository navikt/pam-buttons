import {ThemeProvider} from "styled-components";
import {Theme} from "../src/theme";
import * as React from "react";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    layout: 'fullscreen'
}

const theme: Theme = {
    colors: {
        primaryDarkBlue: '#062140',
        primaryWhite: '#FFFFFF',
        primaryPurple: '#8C368E',
        secondaryPurple: '#FBD8E7',
        infoYellow: '#FFA733',
        inactiveGrey: '#78706A'
    }
}

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <Story/>
        </ThemeProvider>
    )
]
