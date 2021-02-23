import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';
import { linkResolver } from '../../utils'
import theme from '../../styles/theme';

mocks.forEach((variation) => {
  storiesOf(model.name, Component)
    .add(
      variation.name,
      (...args) => {
        const [controls] = args;
        variation.primary.icon.url = controls.icon;
        variation.primary.name = controls.name;

        return (
          <div
            style={{
              backgroundColor: controls.backgroundColor,
              height: theme.sizes.screen,
              paddingTop: 50
            }}
          >
            <Component slice={variation} linkResolver={linkResolver} />
          </div>
        )
      },
      {
        controls: { hideNoControlsWarning: true },
        argTypes: {
          backgroundColor: {
            control: 'color',
            defaultValue: theme.colors.squeeze
          },
          name: {
            defaultValue: 'Blurb Slices',
            name: 'Company Name',
            control: {
              type: 'text',
            }
          },
          icon: {
            defaultValue: 'https://images.prismic.io/slicemachine-startup/46aa4302-f71f-48fb-8866-4e87156af39a_upsights.png?auto=compress,format',
            name: 'Navbar Icon',
            description: 'Icon',
            control: {
              type: 'text',
            }
          },
        },
      }
    )
});

