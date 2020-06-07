import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';


import * as actions from '../redux/actions/index';
import {ADD_PHONES} from '../redux/actions/types';

import App from '../App';

const mockStore = configureStore([]);
global.fetch = jest.fn(() => Promise.resolve())

describe('My Connected React-Redux Component', () => {
  let store;
  let component;
  const initialState = {phones: [], selectedPhone: ""}

  component = renderer.create(
    <Provider store={mockStore(initialState)}>
      <App />
    </Provider>
  );

  it('component is not undefined, react and redux are connected', () => {
    expect(component.toJSON()).toBeDefined();

  });

});


describe('actions', () => {
  it('should create an action to add phones', () => {
    const payload = 'Finish docs'
    const expectedAction = {
      type: ADD_PHONES,
      payload
    }
    expect(actions.addPhones(payload)).toEqual(expectedAction)
  })
})
