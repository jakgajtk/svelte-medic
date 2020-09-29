import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import replace from '@rollup/plugin-replace'
import dotenv from 'dotenv'

const production = !process.env.ROLLUP_WATCH

dotenv.config()

function serve() {
  let server

  function toExit() {
    if (server) server.kill(0)
  }

  return {
    writeBundle() {
      if (server) return
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        }
      )

      process.on('SIGTERM', toExit)
      process.on('exit', toExit)
    },
  }
}

module.exports = {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    replace({
      API_USERNAME: JSON.stringify(process.env.API_USERNAME),
      API_PASSWORD: JSON.stringify(process.env.API_PASSWORD),
      API_URL: JSON.stringify(process.env.API_URL),
      API_AUTH_URL: JSON.stringify(process.env.API_AUTH_URL),
    }),
    svelte({
      emitCss: true,
    }),
    resolve({
      browser: true,
      dedupe: (importee) =>
        importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
      use: [
        [
          'sass',
          {
            includePaths: ['./src/theme', './node_modules'],
          },
        ],
      ],
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
