import { readdir } from 'node:fs/promises';
import path from 'node:path';

try {
  const files = await readdir('array');
  for (const file of files) {
    console.log(file);
    console.log(path.parse(file).name);
  }
} catch (err) {
  console.error(err);
}