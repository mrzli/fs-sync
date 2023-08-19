import klaw from 'klaw-sync';
import { FilePathStats, FindOptions, toKlawFindOptions } from '@gmjs/fs-shared';

export function findFileSystemEntriesSync(
  directory: string,
  options?: FindOptions,
): readonly FilePathStats[] {
  return klaw(directory, toKlawFindOptions(options)).map((item) => ({
    path: item.path,
    stats: item.stats,
  }));
}
