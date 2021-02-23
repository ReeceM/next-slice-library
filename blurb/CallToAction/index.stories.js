import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';
import { linkResolver } from '../../utils'
import { cloneDeep } from 'lodash';

mocks.forEach((variation) => {
  storiesOf(model.name, Component)
    .add(
      variation.name,
      (...args) => {
        const [controls] = args;
        variation.primary.backgroundColor = controls.backgroundColor;
        variation.primary.simple = controls.simple;

        return <Component slice={variation} linkResolver={linkResolver} />
      },
      {
        controls: { hideNoControlsWarning: true },
        argTypes: {
          backgroundColor: {
            control: 'color',
            defaultValue: 'white'
          },
          simple: {
            control: 'boolean',
            defaultValue: false,
          }
        }
      }
    ).add(
      'Simple Variation',
      (...args) => {
        let simpleVariation = cloneDeep(mocks[0]);
        const [controls] = args;
        simpleVariation.primary.backgroundColor = controls.backgroundColor;
        simpleVariation.primary.simple = true;

        return <Component slice={simpleVariation} linkResolver={linkResolver} />
      },
      {
        controls: { hideNoControlsWarning: true },
        argTypes: {
          backgroundColor: {
            control: 'color',
            defaultValue: 'white'
          }
        }
      }
    );
});
