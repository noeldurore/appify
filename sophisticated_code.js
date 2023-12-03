/* sophisticated_code.js */

// This code is a complex implementation of a file management system.
// It allows users to create, delete, rename and search for files.

class File {
  constructor(name) {
    this.name = name;
    this.content = "";
  }

  rename(newName) {
    this.name = newName;
  }

  write(content) {
    this.content = content;
  }
}

class FileManager {
  constructor() {
    this.files = [];
  }

  createFile(name) {
    const file = new File(name);
    this.files.push(file);
  }

  deleteFile(name) {
    const fileIndex = this.files.findIndex(file => file.name === name);
    if (fileIndex !== -1) {
      this.files.splice(fileIndex, 1);
    }
  }

  renameFile(name, newName) {
    const file = this.files.find(file => file.name === name);
    if (file) {
      file.rename(newName);
    }
  }

  searchFiles(query) {
    return this.files.filter(file => file.name.includes(query));
  }
}

// Example usage:

const fileManager = new FileManager();

fileManager.createFile("example.txt");
fileManager.createFile("sample.doc");
fileManager.createFile("readme.md");

fileManager.files[0].write("Hello, world!");
fileManager.files[1].write("This is a sample document.");
fileManager.files[2].write("Please read the instructions!");

console.log(fileManager.searchFiles("sample")); // [ File { name: 'sample.doc', content: 'This is a sample document.' } ]

fileManager.renameFile("example.txt", "new_example.txt");
fileManager.deleteFile("sample.doc");

console.log(fileManager.files);
/* Output:
[
  File { name: 'new_example.txt', content: 'Hello, world!' },
  File { name: 'readme.md', content: 'Please read the instructions!' }
]
*/