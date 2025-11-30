'use server';

import { readdirSync } from 'fs';
import { join } from 'path';

export async function listServerFiles() {
  try {
    // Get the current working directory (project root)
    const projectRoot = process.cwd();
    
    // Read the app directory
    const appDir = join(projectRoot, 'app');
    const files = readdirSync(appDir);
    
    return {
      success: true,
      data: {
        directory: appDir,
        files: files,
        cwd: projectRoot,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to read directory',
    };
  }
}

export async function getServerInfo() {
  return {
    success: true,
    data: {
      nodeVersion: process.version,
      platform: process.platform,
      cwd: process.cwd(),
      timestamp: new Date().toISOString(),
    },
  };
}
