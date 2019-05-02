import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Feed from './Components/Feed';
import FeedDetails from './Components/FeedDetails';

/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

Enzyme.configure({ adapter: new Adapter() })

describe('tests App component', () => {
  const wrapper = shallow(<App />)

  it('renders Google logo', () => {
    expect(wrapper.find("[data-test='google-logo']").length).toEqual(1);
  });

  it('renders Feed component', () => {
    expect(wrapper.find(Feed)).toHaveLength(1);
  });
  
  it('renders FeedDetails component', () => {
    expect(wrapper.find(FeedDetails)).toHaveLength(1);
  });
})