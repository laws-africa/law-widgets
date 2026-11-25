const path = require('node:path');
const { buildSync } = require('esbuild');

const framework = process.argv[2];
if (!['react', 'vue'].includes(framework)) throw new Error('Expected react or vue');
const root = path.resolve(__dirname, '..', 'packages', framework);
// Bundle generated proxies and web-component runtime. The host application owns
// its framework instance; do not bundle a second React/Vue copy.
for (const [format, filename] of [['cjs', 'index.js'], ['esm', 'index.esm.js']]) {
  buildSync({
    entryPoints: [path.join(root, 'src/index.ts')],
    outfile: path.join(root, 'dist', filename),
    bundle: true,
    format,
    platform: 'browser',
    target: 'es2017',
    external: ['react', 'react-dom', 'vue'],
    sourcemap: true,
  });
}
