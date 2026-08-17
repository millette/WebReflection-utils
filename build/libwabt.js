#!/usr/bin/env node

import { join, resolve } from 'path';
import { readFileSync, writeFileSync } from 'fs';

import encode from '../src/base64/encode.js';

const { dirname } = import.meta;
const dir = resolve(dirname, '..', 'src', 'libwabt');
const content = readFileSync(join(dir, 'libwabt.wasm'));

writeFileSync(
  join(dir, 'libwabt.wasm.js'),
  `// ⚠️ AUTOMATICALLY GENERATED\nexport default '${await encode(content, { format: 'deflate' })}';`
);
