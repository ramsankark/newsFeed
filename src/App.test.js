import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Feed from './Components/Feed';

/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

Enzyme.configure({ adapter: new Adapter() })

describe('<App/>', () => {
  it('renders Feed component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Feed)).to.have.lengthOf(1);
  });
})