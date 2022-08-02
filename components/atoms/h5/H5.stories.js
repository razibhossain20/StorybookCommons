import React from 'react';
import H5 from './H5';

export default {
   title: 'Atoms/Headings',
   component: H5,
   argTypes: {
    content: {
        control: {type: 'text'},
        name: 'Heading5',
        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
   }
};

const Template = (args) => <H5 {...args}/>;

export const heading5 = Template.bind({});

