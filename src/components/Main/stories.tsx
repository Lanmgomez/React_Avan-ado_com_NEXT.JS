import { Meta, StoryObj } from '@storybook/react'

import Main from './Main'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Scss'
  }
}
