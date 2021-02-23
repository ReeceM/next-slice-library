import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';
import { linkResolver } from '../../utils'

mocks.forEach((variation) => {
  storiesOf(model.name, Component)
    .add(
      variation.name,
      (...args) => {
        const [controls] = args;
        variation.primary.backgroundColor = controls.backgroundColor;

        return <Component slice={variation} linkResolver={linkResolver} />
      },
      {
        controls: { hideNoControlsWarning: true },
        argTypes: {
          backgroundColor: {
            control: 'color',
            defaultValue: 'white'
          },
        }
      }
    );
});

