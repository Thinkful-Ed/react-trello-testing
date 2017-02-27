import React from 'react';
import {shallow} from 'enzyme';

import List from './list';

describe('<List />', () => {
    const seedCards = [];
    beforeAll(() => {
        for (let i=0; i<10; i++) {
            seedCards.push(`Card ${i}`)
        }
    });

    it('Renders without crashing', () => {
        shallow(<List title="Foo" />);
    });

    it('Renders the title', () => {
        const title = "Foo";
        const wrapper = shallow(<List title={title} />);
        expect(wrapper.contains(<h3>{title}</h3>)).toEqual(true);
    });


    it('Can add cards to the state', () => {
        const wrapper = shallow(<List />);
        const instance = wrapper.instance();
        seedCards.forEach(instance.addCard);
        expect(wrapper.state('cards').length).toEqual(seedCards.length);
    });

    it('Renders the cards', () => {
        const wrapper = shallow(<List />);
        const instance = wrapper.instance();
        seedCards.forEach(instance.addCard);
        const cards = wrapper.find('Card');
        expect(cards.length).toEqual(seedCards.length);
        const firstCard = cards.first();
        expect(firstCard.prop('text')).toEqual(seedCards[0]);
    });
});


