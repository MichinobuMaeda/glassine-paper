import * as fs from 'node:fs/promises';
import { globSync } from 'node:fs';
import path from 'path';
import process from 'process';
import jsdoc2md from 'jsdoc-to-markdown';

export const absolutePath = (relativePath: string) => {
  // If path is already absolute, just normalize it
  if (path.isAbsolute && path.isAbsolute(relativePath)) {
    return path.normalize(relativePath);
  }
  return path.normalize(path.resolve(process.cwd(), relativePath));
};

export const generateApiDocs = async ({
  name,
  version,
  files,
  output,
  options,
}: {
  name: string;
  version: string;
  files: string[];
  output: string;
  options?: jsdoc2md.RenderOptions;
}) => {
  const body = await jsdoc2md.render({
    files,
    ...options,
  });
  const md = `# API Documentation ${name} ${version}

${body}`;
  await fs.mkdir(path.dirname(absolutePath(output)), { recursive: true });
  await fs.writeFile(absolutePath(output), md);
};

export const apiDocsPlugin = ({
  name,
  version,
  inputs = [],
  output,
  options,
}: {
  name: string;
  version: string;
  inputs?: string[];
  output: string;
  options?: jsdoc2md.RenderOptions;
}) => {
  const absInputs = inputs.map((input) => absolutePath(input));
  const outputPath = absolutePath(output);
  const files: string[] = [];
  absInputs.map(async (input) => {
    for (const file of globSync(input)) {
      files.push(file);
    }
  });

  console.info(`API Docs Plugin:
  Inputs: ${path.relative(process.cwd(), absInputs.join(', '))}
  Output: ${path.relative(process.cwd(), outputPath)}
  Options: ${JSON.stringify(options, null, 2)}
  Files: ${JSON.stringify(
    files.map((file) => path.relative(process.cwd(), file)),
    null,
    2
  )}
`);

  return {
    name: 'api-doc-generator',
    async buildStart() {
      generateApiDocs({ name, version, files, output: outputPath, options });
    },
    handleHotUpdate({ file }: { file: string }) {
      const path = absolutePath(file);
      if (files.includes(path)) {
        console.log(`Regenerating API docs due to change in ${file}`);
        generateApiDocs({ name, version, files, output: outputPath, options });
      }
    },
  };
};
