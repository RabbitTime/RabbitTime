import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';


it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.test.com">Test</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  // trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  // trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});