import React from 'react';
import A from './a';

export default {
   title: 'Atoms/Link',
   component: A,
   argTypes: {
    content: {
        control: {type: 'text'},
        name: 'Heading1',
        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
   }
};

const Template = (args) => <A {...args}/>;

export const linkDefault = Template.bind({});

