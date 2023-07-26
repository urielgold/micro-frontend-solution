export async function importAndInjectModule({path, id, version}, data) {
  try {
    const pathWithVersion = path.replace('bundle', `${version}-bundle`);
    const importedModule = await import(/* @vite-ignore */pathWithVersion);
    const component = await importedModule.default.component(data);

    const intervalId = setInterval(() => {
      // Check if container was already rendered
      const container = document.querySelector(`.mf-${id}`);

      if (container) {
        clearInterval(intervalId); // Stopping interval once the elements are ready
        console.log({id, component})
        container.appendChild(component);
      }
    }, 100);
  } catch (error) {
    console.error(`Error importing module: ${id}`, error);
  }
}