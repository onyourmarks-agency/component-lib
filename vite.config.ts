import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const projectDir = process.env.PROJECT_DIR || __dirname;

console.log('PROJECT_DIR in vite.config.js:', projectDir);
console.log('Alias $user-components:', path.resolve(projectDir, 'src/lib/components'));

export default {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'$user-components': path.resolve(projectDir, 'src/lib/components'),
			'$user-config': path.resolve(projectDir, 'component-lib'),
			'$user-styles': path.resolve(projectDir, 'src/styles')
		}
	},
	server: {
		fs: {
			allow: [projectDir]
		}
	},
	optimizeDeps: {
		entries: []
	}
};
