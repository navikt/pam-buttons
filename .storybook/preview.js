import {ThemeProvider} from "styled-components";
import {Theme} from "../src/theme";
import * as React from "react";
import {config, withDesign} from "storybook-addon-designs";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    layout: 'fullscreen',
    design: config({
        type: 'figma',
        url: 'https://www.figma.com/file/pPVBT8fBTXKW01vTIWvlit/Styleguide-for-arbeidsplassen?node-id=993%3A347'
    })
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
    withDesign,
    (Story) => (
        <ThemeProvider theme={theme}>
            <Story/>
        </ThemeProvider>
    )
]
