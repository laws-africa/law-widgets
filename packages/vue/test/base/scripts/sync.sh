# Copy ionic vue dist
rm -rf node_modules/@laws-africa/law-widgets-vue/dist node_modules/@laws-africa/law-widgets-vue/css
cp -a ../../../dist node_modules/@laws-africa/law-widgets-vue/dist
cp -a ../../../css node_modules/@laws-africa/law-widgets-vue/css
cp -a ../../../package.json node_modules/@laws-africa/law-widgets-vue/package.json

# Copy ionic vue router dist
rm -rf node_modules/@laws-africa/law-widgets-vue-router/dist
cp -a ../../../../vue-router/dist node_modules/@laws-africa/law-widgets-vue-router/dist
cp -a ../../../../vue-router/package.json node_modules/@laws-africa/law-widgets-vue-router/package.json

# Copy core dist and components
rm -rf node_modules/@laws-africa/law-widgets/dist node_modules/@laws-africa/law-widgets/components
cp -a ../../../../../core/package.json node_modules/@laws-africa/law-widgets/package.json
cp -a ../../../../../core/dist node_modules/@laws-africa/law-widgets/dist
cp -a ../../../../../core/components node_modules/@laws-africa/law-widgets/components

# Copy stencil
rm -rf node_modules/@stencil/core
cp -a ../../../../../core/node_modules/@stencil/core node_modules/@stencil/core

# Copy ionicons
rm -rf node_modules/ionicons
cp -a ../../../../../core/node_modules/ionicons node_modules/ionicons
