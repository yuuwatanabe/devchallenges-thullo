import React from 'react';
import {Title, TitleProps} from '../components/Title';
import { Story, Meta } from '@storybook/react/'

export default {
    title: 'Example/Button',
    component: Title,
  } as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Sample Title'
};
