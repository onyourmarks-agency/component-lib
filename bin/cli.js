#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'node:fs';

// Get the directory name of the current module (bin directory)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentLibDir = path.resolve(__dirname, '..');

// Use the current working directory (the user's project directory)
const projectDir = process.cwd();

// Symlink lib
const srcLib = path.resolve(projectDir, 'src/lib');
const componentLibSrcLib = path.resolve(componentLibDir, 'src/lib');
try {
	fs.symlinkSync(srcLib, componentLibSrcLib, 'dir');
} catch (error) {
	if (error.code !== 'EEXIST') {
		console.error(`Error creating symlink: ${error.message}`);
	}
}

// Build the command to execute, setting the PROJECT_DIR environment variable
const command = `PROJECT_DIR="${projectDir}" pnpm run dev`;

// Execute the command in the context of the component-lib directory
const child = spawn(command, {
	cwd: componentLibDir,
	stdio: 'inherit',
	shell: true
});

child.on('error', (error) => {
	console.error(`Error starting the server: ${error.message}`);
});
