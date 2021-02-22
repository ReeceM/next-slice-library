import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';
import { linkResolver } from '../../utils'

mocks.forEach((variation) => {
  storiesOf(model.name, Component).add(variation.name, () => <Component slice={variation} linkResolver={linkResolver}/>);
});


/**
 * Bug is causing issues in variations, not UI to edit the stuff????!!
 */
let imageVersion = [
  ,
  {
    "id": "image-slice",
    "name": "Image slice",
    "docURL": "...",
    "version": "sktwi1xtmkfgx8626",
    "description": "HeroSlice with Image",
    "primary": {
      "title": {
        "config": {
          "label": "Title",
          "placeholder": "This is where it all begins...",
          "allowTargetBlank": true,
          "type": "StructuredText",
          "single": "heading1"
        },
        "type": "StructuredText"
      },
      "description": {
        "config": {
          "label": "Description",
          "placeholder": "A nice description of your feature",
          "allowTargetBlank": true,
          "type": "StructuredText",
          "single": "paragraph"
        },
        "type": "StructuredText"
      },
      "buttonType": {
        "config": {
          "label": "",
          "placeholder": "",
          "options": [
            "primary",
            "secondary"
          ],
          "type": "Select"
        },
        "type": "Select"
      }
    },
    "items": {
      "link": {
        "type": "Link",
        "config": {
          "label": "",
          "id": "link",
          "placeholder": "",
          "allowTargetBlank": true
        }
      },
      "label": {
        "type": "Text",
        "config": {
          "label": "",
          "id": "label",
          "placeholder": ""
        }
      },
      "buttonType": {
        "type": "Select",
        "config": {
          "label": "",
          "id": "buttonType",
          "placeholder": "",
          "default_value": "",
          "options": [
            "primary",
            "secondary"
          ]
        }
      }
    }
  }
]
