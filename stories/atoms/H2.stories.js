import React from 'react';
import H2 from '../../components/atoms/h2/h2';

export default {
   title: 'Atoms/Headings',
   component: H2,
   argTypes: {
    content: {
        control: {type: 'text'},
        name: 'Heading2',
        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
   }
};

const Template = (args) => <H2 {...args}/>;

export const heading2 = Template.bind({});

