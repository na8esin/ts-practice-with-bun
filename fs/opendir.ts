import { opendir } from 'node:fs/promises';

// 再起的にディレクトリを開く
async function readDirRecursively(dir: string) {
  const dirHandle = await opendir(dir);
  for await (const dirent of dirHandle) {
    console.log(dirent.name);
    if (dirent.isDirectory()) {
      await readDirRecursively(`${dir}/${dirent.name}`);
    }
  }
}

readDirRecursively('./fs');