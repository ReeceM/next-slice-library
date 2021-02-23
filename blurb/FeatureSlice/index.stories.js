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
        variation.primary.placeLeft = controls.placeLeft;
        variation.primary.backgroundColor = controls.backgroundColor;

        return <Component slice={variation} linkResolver={linkResolver}/>
      },
      {
        controls: { hideNoControlsWarning: true },
        argTypes: {
          backgroundColor: { control: 'color' },
          placeLeft: {
            name: 'Place Left',
            description: 'Place the Card on one side or the other',
            control: {
              type: 'boolean',
            },
            defaultValue: true
          },
        },
      }
    );
});

