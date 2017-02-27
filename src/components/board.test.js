import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import Board from './board';

describe('<Board/>', () => {
    let seedLists = [];
    beforeAll(() => {
        for (let i=0; i<10; i++) {
            seedLists.push(`List ${i}`)
        }
    });

    it('Renders without crashing', () => {
        shallow(<Board title="Foo" />);
    });

    it('Renders the title', () => {
        const title = "Foo";
        const wrapper = shallow(<Board title={title} />);
        expect(wrapper.contains(<h2>{title}</h2>)).toEqual(true);
    });


    it('Can add lists to the state', () => {
        const wrapper = shallow(<Board/>);
        const instance = wrapper.instance();
        seedLists.forEach(instance.addList);
        expect(wrapper.state('lists').length).toEqual(seedLists.length);
    });

    it('Renders the lists', () => {
        const wrapper = shallow(<Board/>);
        const instance = wrapper.instance();
        seedLists.forEach(instance.addList);
        const lists = wrapper.find('List');
        expect(lists.length).toEqual(seedLists.length);
        const firstList = lists.first();
        expect(firstList.prop('title')).toEqual(seedLists[0]);
    });
});


