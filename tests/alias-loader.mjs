/**
 * Resolves the `@/*` path alias (declared in tsconfig.json) for Node's test
 * runner, which does not read tsconfig paths on its own.
 */
import { statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const testsDir = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(testsDir, '..', 'src');

function isFile(candidate) {
  try {
    return statSync(candidate).isFile();
  } catch {
    return false;
  }
}

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('@/')) {
    const base = path.join(srcDir, specifier.slice(2));

    for (const candidate of [
      `${base}.ts`,
      `${base}.tsx`,
      base,
      path.join(base, 'index.ts'),
      path.join(base, 'index.tsx'),
    ]) {
      if (isFile(candidate)) {
        return { url: pathToFileURL(candidate).href, shortCircuit: true };
      }
    }
  }

  return nextResolve(specifier, context);
}
