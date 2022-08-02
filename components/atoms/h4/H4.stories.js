import React from 'react';
import H4 from './H4';

export default {
   title: 'Atoms/Headings',
   component: H4,
   argTypes: {
    content: {
        control: {type: 'text'},
        name: 'Heading4',
        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
   }
};

const Template = (args) => <H4 {...args}/>;

export const heading4 = Template.bind({});

