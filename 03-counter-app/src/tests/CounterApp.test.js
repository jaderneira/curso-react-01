import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />)

    beforeEach( () => {
        wrapper = shallow(<CounterApp />)
    }); 

    test('debe mostrar <CounterApp /> correctamente ', () => {
        expect(wrapper).toMatchSnapshot();        
    })

    test('should show the counter value send by props', () => {
        const counterValue = 100;
        const wrapper = shallow(
            <CounterApp 
                value={ counterValue }            
            />
        )

        const textCounter = wrapper.find('h2').text().trim();
        expect( textCounter ).toBe( '100' );        
    })

    test('should increment with +1 button', () => {
        wrapper.find('button').at(0).simulate('click');
        const textCounter = wrapper.find('h2').text().trim();

        expect( textCounter ).toBe('11')

    })

    test('should increment with -1 button', () => {
        wrapper.find('button').at(2).simulate('click');        
        const textCounter = wrapper.find('h2').text().trim();

        expect( textCounter ).toBe('9')
    })

    test('should reset counter value', () => {
        const wrapper = shallow(<CounterApp value={ 105 } />)

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        const textCounter = wrapper.find('h2').text().trim();
        expect( textCounter ).toBe('105')
    })
    
})
