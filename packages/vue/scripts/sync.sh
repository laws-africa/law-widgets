# Copy core dist
rm -rf node_modules/@musangowope/cool-components/dist node_modules/@musangowope/cool-components/components
cp -a ../../core/dist node_modules/@musangowope/cool-components/dist
cp -a ../../core/components node_modules/@musangowope/cool-components/components
cp -a ../../core/package.json node_modules/@musangowope/cool-components/package.json

# Copy ionicons
rm -rf node_modules/ionicons
cp -a ../../core/node_modules/ionicons node_modules/ionicons
