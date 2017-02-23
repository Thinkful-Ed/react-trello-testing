import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';

import Card from './card';

describe('<Card />', () => {
    it('Renders without crashing', () => {
        mount(<Card text="Foo" />);
    });

    it('Renders the text', () => {
        const text = "Foo";
        const wrapper = shallow(<Card text={text} />);
        expect(wrapper.text()).toEqual(text);
    });
});


