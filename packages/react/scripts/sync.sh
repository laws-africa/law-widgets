# Copy core dist
rm -rf node_modules/@laws-africa/law-widgets/dist node_modules/@laws-africa/law-widgets/components
cp -a ../../core/dist node_modules/@laws-africa/law-widgets/dist
cp -a ../../core/components node_modules/@laws-africa/law-widgets/components
cp -a ../../core/package.json node_modules/@laws-africa/law-widgets/package.json

# Copy ionicons
rm -rf node_modules/ionicons
cp -a ../../core/node_modules/ionicons node_modules/ionicons
