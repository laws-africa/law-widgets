import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'la-web-components',
  plugins: [sass()],
  buildEs5: 'prod',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'components/*/*.scss',
          dest: '../../scss'
        }
      ]
    },
    {
      type: 'dist-custom-elements-bundle'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
