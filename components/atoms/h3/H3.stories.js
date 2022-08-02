import React from 'react';
import H3 from './H3';

export default {
   title: 'Atoms/Headings',
   component: H3,
   argTypes: {
    content: {
        control: {type: 'text'},
        name: 'Heading3',
        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
   }
};

const Template = (args) => <H3 {...args}/>;

export const heading3 = Template.bind({});

