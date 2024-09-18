import type { Schema, Attribute } from '@strapi/strapi';

export interface TextServices extends Schema.Component {
  collectionName: 'components_text_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'text.services': TextServices;
    }
  }
}
