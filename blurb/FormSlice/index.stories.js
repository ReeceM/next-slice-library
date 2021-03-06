import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';
import { linkResolver } from '../../utils'

mocks.forEach((variation) => {
  storiesOf(model.name, Component)
    .add(
      variation.name,
      () => <Component slice={variation} linkResolver={linkResolver} />,
      { controls: { hideNoControlsWarning: true } }
    );
});

