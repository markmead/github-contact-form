buildPlugin({
  entryPoints: ['src/index.js'],
  outfile: 'dist/index.js',
  platform: 'node',
})

function buildPlugin(buildOptions) {
  return require('esbuild').buildSync({
    ...buildOptions,
    minify: true,
    bundle: true,
  })
}
