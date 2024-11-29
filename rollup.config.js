import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace'; // 환경 변수 플러그인

const production = process.env.VITE_ENVIRONMENT === 'prod';

export default {
    input: 'src/main.js',
    output: {
        sourcemap: !production,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        svelte({
            compilerOptions: {
                dev: !production
            }
        }),
        css({ output: 'bundle.css' }),
        resolve({ browser: true, dedupe: ['svelte'] }),
        commonjs(),
        replace({
            preventAssignment: true,
            'import.meta.env.VITE_ENVIRONMENT': JSON.stringify(process.env.VITE_ENVIRONMENT || 'dev')
        }),
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};
