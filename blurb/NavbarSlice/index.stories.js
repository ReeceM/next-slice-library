import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';
import {  linkResolver } from '../../utils'
import theme from '../../styles/theme';

mocks.forEach((variation) => {
  storiesOf(model.name, Component).add(variation.name, () => {
    variation.primary.icon.url = 'https://images.prismic.io/slicemachine-startup/46aa4302-f71f-48fb-8866-4e87156af39a_upsights.png?auto=compress,format';
    variation.primary.icon.dimensions.width = '32px'
    return (
        <div
          style={{
            backgroundColor: theme.colors.squeeze,
            height: '100vh',
            paddingTop: 50
          }}
          >
          <Component slice={variation} linkResolver={linkResolver} />
        </div>
    )
  })
});

