import type { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  autoprefixCss: true,
  namespace: 'LawWidgets',
  plugins: [
    sass({
      includePaths: ['./node_modules']
    })
  ],
  outputTargets: [
    { type: 'docs-readme' },
    reactOutputTarget({
      componentCorePackage: '@lawsafrica/law-widgets',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      proxiesFile: '../packages/react/src/components/proxies.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@lawsafrica/law-widgets',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      proxiesFile: '../packages/vue/src/proxies.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [{
        src: '../scripts/custom-elements',
        dest: 'components',
        warn: true
      }],
      includeGlobalScripts: false
    },
    {
      type: 'dist-hydrate-script'
    }
  ],
  buildEs5: 'prod',
  extras: {
    dynamicImportShim: true,
    initializeNextTick: true,
    scriptDataOpts: true
  },
  testing: {
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec)|[//](e2e))\\.[jt]sx?$',
    allowableMismatchedPixels: 200,
    pixelmatchThreshold: 0.05,
    waitBeforeScreenshot: 20,
    moduleNameMapper: {
      "@utils/test": ["<rootDir>/src/utils/test/utils"],
      "@utils/logging": ["<rootDir>/src/utils/logging"],

    }
  },
  preamble: '(C) Ionic http://ionicframework.com - MIT License',
  enableCache: true,
};
