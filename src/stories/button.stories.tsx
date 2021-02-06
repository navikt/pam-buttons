import React from 'react'
import {storiesOf} from '@storybook/react'
import {PrimaryButton, SecondaryButton, TertiaryButton} from "../index"

storiesOf('Button', module)
    .add('primary', () => (
        <PrimaryButton>Dette er en primary button</PrimaryButton>
    ))
    .add('secondary', () => (
        <SecondaryButton>Dette er en secondary button</SecondaryButton>
    ))
    .add('tertiary', () => (
        <TertiaryButton>Dette er en tertiary button</TertiaryButton>
    ))
