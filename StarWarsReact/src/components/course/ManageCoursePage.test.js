import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe ('Manage Course Page', () => {
    it('sets error message when trying to save empty title', () => {
        const props = {    
            course: {id: "",title: "",watchHref: "",authorId: "",length: "",category: ""},
            authors: [],
            actions: {saveCourse: () => { return Promise.resolve(); }}
        };

        const wrapper = mount(<ManageCoursePage {...props} />); //3.21 time on mod14.2

        //Since ManageCoursePage is a 'connected' component, we cannot test it without context or it will not be able to find the 'store'
        //option 1: wrap the root component in a <Provider>
        //const wrapper = mount(<Provider store={store}><ManageCoursePage/></Provider>);

        //option 2: change the compoent to export the raw unConnected version

        const saveButton = wrapper.find('input').last(); //can also find input by class or id
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });
});