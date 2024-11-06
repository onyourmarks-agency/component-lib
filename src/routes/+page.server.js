// import fg from 'fast-glob';
// import path from 'path';
//
// export async function load() {
//   const componentsDir = path.resolve(process.env.PROJECT_DIR, 'src/lib/components');
//
//   // Use fast-glob to find all .svelte files
//   const componentFiles = await fg('**/*.svelte', { cwd: componentsDir });
//
//   const components = componentFiles.map((file) => {
//     const componentName = path.basename(file, '.svelte');
//     return {
//       name: componentName,
//       path: `$user-components/${file}`,
//     };
//   });
//
//   return {
//     components,
//   };
// }
