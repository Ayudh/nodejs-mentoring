import { EventEmitter } from 'events';
import { readdirSync, statSync } from 'fs';
import * as path from 'path';

export class Dirwatcher {
  static get DIR_CHANGE_EVENT() {
    return '​dirwatcher:changed';
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

  filterProcessedFiles(processedFilesData, currentFilesData) {
    return currentFilesData.filter(fileData => {
      const index = processedFilesData.findIndex(
        file => file.fileName === fileData.fileName
      );
      if (index === -1) {
        return true;
      }
      if (fileData.updateTime > processedFilesData[index].updateTime) {
        return true;
      }
      return false;
    });
  }

  getFileData(files) {
    return files.map(fileName => ({
      fileName,
      updateTime: statSync(fileName).mtime
    }));
  }
}
