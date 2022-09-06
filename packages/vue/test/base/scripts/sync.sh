# Copy ionic vue dist
rm -rf node_modules/@musangowope/cool-components-vue/dist node_modules/@musangowope/cool-components-vue/css
cp -a ../../../dist node_modules/@musangowope/cool-components-vue/dist
cp -a ../../../css node_modules/@musangowope/cool-components-vue/css
cp -a ../../../package.json node_modules/@musangowope/cool-components-vue/package.json

# Copy ionic vue router dist
rm -rf node_modules/@musangowope/cool-components-vue-router/dist
cp -a ../../../../vue-router/dist node_modules/@musangowope/cool-components-vue-router/dist
cp -a ../../../../vue-router/package.json node_modules/@musangowope/cool-components-vue-router/package.json

# Copy core dist and components
rm -rf node_modules/@musangowope/cool-components/dist node_modules/@musangowope/cool-components/components
cp -a ../../../../../core/package.json node_modules/@musangowope/cool-components/package.json
cp -a ../../../../../core/dist node_modules/@musangowope/cool-components/dist
cp -a ../../../../../core/components node_modules/@musangowope/cool-components/components

# Copy stencil
rm -rf node_modules/@stencil/core
cp -a ../../../../../core/node_modules/@stencil/core node_modules/@stencil/core

# Copy ionicons
rm -rf node_modules/ionicons
cp -a ../../../../../core/node_modules/ionicons node_modules/ionicons
