import {storiesOf} from '@storybook/react'
import {PrimaryButton, SecondaryButton, TertiaryButton} from "../index"
import * as React from "react";

storiesOf('Button', module)
    .add('primary', () => (
        <PrimaryButton>Primary</PrimaryButton>
    ))
    .add('primary:disabled', () => (
        <PrimaryButton disabled>Inactive Primary</PrimaryButton>
    ))
    .add('secondary', () => (
        <SecondaryButton>Secondary</SecondaryButton>
    ))
    .add('secondary:disabled', () => (
        <SecondaryButton disabled>Disabled Secondary</SecondaryButton>
    ))
    .add('tertiary', () => (
        <TertiaryButton>Tertiary</TertiaryButton>
    ))
    .add('tertiary:disabled', () => (
        <TertiaryButton disabled>Tertiary Disabled</TertiaryButton>
    ))
