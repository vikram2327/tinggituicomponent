// src/lib/index.js
export { default as HelloWorld } from './HelloWorld';
// Export all components (inputs, dataDisplay, etc.)
export * from './components';
// export * from './layouts';

// Fallback for non-existent components
export const InvalidComponent = () => {
    throw new Error("The component you are trying to import does not exist in this package.");
};