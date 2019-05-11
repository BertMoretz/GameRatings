import React from 'react'
import { GameObj } from '../game-obj'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


import { shallow, mount, render } from 'enzyme';

test('Grid renders as container', () => {

    const shallowComponent = shallow(<GameObj character={{origin: ''}} handleDetailsClick={() =>{}} />)
    const mountComponent = mount(<GameObj character={{origin: ''}} handleDetailsClick={() =>{}} />)
    expect(shallowComponent).toBeDefined()
    expect(shallowComponent.debug()).toMatchSnapshot()

	    // Test lifecycle method calls and all possible component states
	    // console.log(shallowComponent.debug())
	    // console.log(mountComponent.debug())
})
