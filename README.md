# Sync File System Utilities

These are simple synchronous file system utilities for Node.js.

## Installation

```bash
npm install --save @gmjs/fs-sync
```

## Functions

### Basic File System

- `readTextSync(filePath: string): string`
  - Description - Read a text file.

---

- `writeTextSync(filePath: string, content: string): void`
  - Description - Write a text file.

---

- `readBinarySync(filePath: string): Buffer`
  - Description - Read a binary file.

---

- `writeBinarySync(filePath: string, content: Buffer): void`
  - Description - Write a binary file.

---

- `createFileSync(filePath: string): void`
  - Description
    - Create a file.
    - Often used with `writeTextSync` or `writeBinarySync` to ensure that a file and ancestor directories exist before writing to it.

---

- `existsSync(filePath: string): boolean`
  - Description - Check if a file exists.

### Find

- `findFsEntriesSync(directory: string, options?: FindOptions): readonly FilePathStats[]`
  - Description - Search a directory for files. Search can be limited by depth.
  - Parameters
    - `directory: string` - The directory to search.
    - `options: FindOptions`
      - Description - Options for the search.
      - Fields
        - `depthLimit: number | undefined`:
          - Description
            - The maximum depth to search.
            - Default is `undefined`.
            - If value is `-1` or `undefined`, there is no depth limit (limit is inifnite).
