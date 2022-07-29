import React from 'react';
import H1 from './h1';

export default {
   title: 'Atoms/Headings',
   component: H1,
   argTypes: {
    content: {
        control: {type: 'text'},
        name: 'Heading1',
        defaultValue: 'Lorem Ipsum is dummy text of the printing and typesetting',
    },
   }
};

const Template = (args) => <H1 {...args}/>;

export const heading1 = Template.bind({});

