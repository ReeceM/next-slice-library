import Component from './';
import model from './model';
import mocks from './mocks.json';
import { Theme } from '../../utils'
import { storiesOf } from '@storybook/react';

function linkResolver(doc) {
  return `/link/to/${doc.uid}`
}

mocks.forEach((variation) => {
  storiesOf(model.name, Component).add(variation.name, () => {
    return (
      <Theme>
        <Component slice={variation} linkResolver={linkResolver} />
      </Theme>
    )
  });
});
