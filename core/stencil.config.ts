import type { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'LawWidgets',
  plugins: [
    sass({
      includePaths: ['./node_modules'],
    }),
  ],
  outputTargets: [
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
      type: 'docs-readme'
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false
    },
    {
      /*
      * Used to generate components directory in core root. components directory
      * is used by packages/react and packages/vue when running the build command
      * */
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [
        {
          src: '../scripts/custom-elements',
          dest: 'components',
          warn: true,
        },
      ],
      includeGlobalScripts: false,
    }
  ],
  buildEs5: 'prod',
  testing: {
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec)|[//](e2e))\\.[jt]sx?$',
    allowableMismatchedPixels: 200,
    pixelmatchThreshold: 0.05,
    waitBeforeScreenshot: 20,
    moduleNameMapper: {
      '@utils/test': ['<rootDir>/src/utils/test/utils'],
      '@utils/logging': ['<rootDir>/src/utils/logging'],
    },
  },
  preamble: '(C) Law Widgets https://laws.africa - GNU Lesser General Public License 3',
  enableCache: true,
};
