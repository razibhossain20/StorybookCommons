import React from 'react';
import H6 from '../../components/atoms/h6/h6';

export default {
   title: 'Atoms/Headings',
   component: H6,
   argTypes: {
    content: {
        control: {type: 'text'},
        name: 'Heading6',
        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
   }
};

const Template = (args) => <H6 {...args}/>;

export const heading6 = Template.bind({});

