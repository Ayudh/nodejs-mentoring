import { EventEmitter } from 'events';
import { readdirSync, statSync } from 'fs';
import * as path from 'path';

export class Dirwatcher {
  constructor() {
    this.watchEvent = '​dirwatcher:changed';
  }

  watch(dirPath, delay) {
    let processedFilesData = [];
    const emitter = new EventEmitter();
    const interval = setInterval(() => {
      processedFilesData = this.processFiles(
        dirPath,
        processedFilesData,
        emitter
      );
    }, delay);
    return {
      emitter,
      close: () => {
        clearInterval(interval);
      }
    };
  }

  processFiles(dirPath, processedFilesData, emitter) {
    const currentFiles = readdirSync(dirPath).map(file =>
      path.join(dirPath, file)
    );
    const currentFilesData = this.getFileData(currentFiles);
    const delta = this.filterProcessedFiles(
      processedFilesData,
      currentFilesData
    ).map(file => file.fileName);
    if (delta.length) {
      processedFilesData = currentFilesData;
      emitter.emit(Dirwatcher.DIR_CHANGE_EVENT, delta);
    }
    return processedFilesData;
  }

  filterProcessedFiles(processedFiles, currentFiles) {
    return currentFiles.filter(fileData => {
      const index = processedFiles.findIndex(
        file => file.fileName === fileData.fileName
      );
      return (
        index === -1 || fileData.updateTime > processedFiles[index].updateTime
      );
    });
  }

  getFileData(files) {
    return files.map(fileName => ({
      fileName,
      updateTime: statSync(fileName).mtime
    }));
  }
}
