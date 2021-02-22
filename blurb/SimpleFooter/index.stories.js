import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';
import { Theme, linkResolver } from '../../utils'

mocks.forEach((variation) => {
  storiesOf(model.name, Component)
    .add(variation.name, () =>
      <Theme children={<Component slice={variation} linkResolver={linkResolver} />} />
    );
});

