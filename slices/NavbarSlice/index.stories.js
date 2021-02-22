import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';
import { Theme, linkResolver } from '../../utils'
import theme from '../../theme';

mocks.forEach((variation) => {
  storiesOf(model.name, Component).add(variation.name, () => {

    return (
      <Theme>
        <div
          style={{
            backgroundColor: theme.colors.squeeze,
            height: '100vh'
          }}
          >
          <Component slice={variation} linkResolver={linkResolver} />
        </div>
      </Theme>
    )
  })
});

