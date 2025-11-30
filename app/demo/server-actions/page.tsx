"use client";

import { useState } from "react";
import { listServerFiles, getServerInfo } from "@/app/_actions/demo";
import Button from "@/app/_components/ui/Button";

type FileListResult = {
  success: boolean;
  data?: {
    directory: string;
    files: string[];
    cwd: string;
  };
  error?: string;
};

type ServerInfoResult = {
  success: boolean;
  data?: {
    nodeVersion: string;
    platform: string;
    cwd: string;
    timestamp: string;
  };
  error?: string;
};

export default function ServerActionDemoPage() {
  const [fileList, setFileList] = useState<FileListResult | null>(null);
  const [serverInfo, setServerInfo] = useState<ServerInfoResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleListFiles = async () => {
    setLoading(true);
    try {
      const result = await listServerFiles();
      setFileList(result);
    } catch (error) {
      setFileList({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGetServerInfo = async () => {
    setLoading(true);
    try {
      const result = await getServerInfo();
      setServerInfo(result);
    } catch (error) {
      setServerInfo({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="w-full max-w-4xl">
        <h1 className="text-6xl font-extrabold tracking-tight mb-4">
          Server Actions Demo
        </h1>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
          <p className="text-sm font-semibold text-green-700">
            Warm-up Example
          </p>
          <p className="text-sm text-green-600 mt-1">
            This page demonstrates server functions that run on the server and
            return data to the client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 border-2 border-gray-300 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">List Server Files</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Click to list files in the{" "}
              <code className="bg-gray-200 px-1 rounded">app/</code> directory
            </p>
            <Button
              onClick={handleListFiles}
              disabled={loading}
              className="w-full"
            >
              {loading ? "Loading..." : "List Files"}
            </Button>
          </div>

          <div className="p-6 border-2 border-gray-300 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Get Server Info</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Click to get Node.js version and server information
            </p>
            <Button
              onClick={handleGetServerInfo}
              disabled={loading}
              className="w-full"
            >
              {loading ? "Loading..." : "Get Info"}
            </Button>
          </div>
        </div>

        {/* File List Results */}
        {fileList && (
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">File List Results</h3>
            {fileList.success && fileList.data ? (
              <div>
                <p className="text-sm mb-2">
                  <strong>Directory:</strong>{" "}
                  <code className="bg-gray-200 px-2 py-1 rounded text-xs">
                    {fileList.data.directory}
                  </code>
                </p>
                <p className="text-sm mb-3">
                  <strong>Working Directory:</strong>{" "}
                  <code className="bg-gray-200 px-2 py-1 rounded text-xs">
                    {fileList.data.cwd}
                  </code>
                </p>
                <p className="text-sm font-semibold mb-2">Files and Folders:</p>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {fileList.data.files.map((file) => (
                    <li
                      key={file}
                      className="bg-white px-3 py-2 rounded border border-gray-200 text-sm font-mono"
                    >
                      {file}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-red-600">Error: {fileList.error}</p>
            )}
          </div>
        )}

        {/* Server Info Results */}
        {serverInfo && (
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Server Info Results</h3>
            {serverInfo.success && serverInfo.data ? (
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Node Version:</strong>{" "}
                  <code className="bg-gray-200 px-2 py-1 rounded">
                    {serverInfo.data.nodeVersion}
                  </code>
                </p>
                <p className="text-sm">
                  <strong>Platform:</strong>{" "}
                  <code className="bg-gray-200 px-2 py-1 rounded">
                    {serverInfo.data.platform}
                  </code>
                </p>
                <p className="text-sm">
                  <strong>Current Directory:</strong>{" "}
                  <code className="bg-gray-200 px-2 py-1 rounded text-xs">
                    {serverInfo.data.cwd}
                  </code>
                </p>
                <p className="text-sm">
                  <strong>Timestamp:</strong>{" "}
                  <code className="bg-gray-200 px-2 py-1 rounded">
                    {new Date(serverInfo.data.timestamp).toLocaleString()}
                  </code>
                </p>
              </div>
            ) : (
              <p className="text-red-600">Error: {serverInfo.error}</p>
            )}
          </div>
        )}

        {/* Explanation */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">How This Works</h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold mb-2">
                1. Server Actions File (
                <code className="bg-gray-200 px-1 rounded">
                  app/_actions/demo.ts
                </code>
                )
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  Uses{" "}
                  <code className="bg-gray-200 px-1 rounded">'use server'</code>{" "}
                  directive
                </li>
                <li>Functions run on the server, not the client</li>
                <li>Can access Node.js APIs (fs, path, process)</li>
                <li>Automatically serializes return values</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">
                2. Client Component (This Page)
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Imports and calls server actions like regular functions</li>
                <li>No need for fetch() or API routes</li>
                <li>
                  Next.js handles the RPC (Remote Procedure Call) automatically
                </li>
                <li>Type-safe communication between client and server</li>
              </ul>
            </div>

            <div className="mt-4 p-4 bg-white rounded border-l-4 border-green-500">
              <p className="font-semibold text-green-700 mb-2">Key Benefits:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-green-700">
                <li>No API routes needed</li>
                <li>Server-only code stays on server (better security)</li>
                <li>Simpler code - just function calls</li>
                <li>Type-safe end-to-end</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
