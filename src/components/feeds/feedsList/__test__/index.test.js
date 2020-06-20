import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FeedsList from '..';


configure({adapter: new Adapter});

describe('Feeds List Component', () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      feedsList: [],
      pagination: {
        currentPage: 0,
        pageSize: 20,
        totalPages: 0,
      },
      errorScreen: false,
      fetchFeeds: jest.fn().mockReturnValue(new Promise((resolve, reject) => {}))
    }

    wrapper = shallow(<FeedsList {...props} />);
  });

  it('should show shimmer', () => {
    expect(wrapper.find('Shimmer').exists()).toEqual(true);
  });

  it('should fetch feeds', () => {
    expect(props.fetchFeeds).toBeCalled();
  });

  it('should show no feeds are available', () => {
    wrapper.setState({showShimmer: false});
    expect(wrapper.find('Shimmer').exists()).toEqual(false);
    expect(wrapper.text()).toContain('No Feeds Available');
  });
})