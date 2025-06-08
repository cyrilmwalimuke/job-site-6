"use client";
import StudioEditor from '@grapesjs/studio-sdk/react';

import '@grapesjs/studio-sdk/style';

export default function WebBuilder() {
  return (
    <StudioEditor
      options={{
        licenseKey: 'DEMO_LOCALHOST_KEY',
      project: {
        type: 'web',
        // TODO: replace with a unique id for your projects. e.g. an uuid
        id: 'UNIQUE_PROJECT_ID'
      },
      identity: {
        // TODO: replace with a unique id for your end users. e.g. an uuid
        id: 'UNIQUE_END_USER_ID'
      },
      assets: {
        storageType: 'cloud'
      },
      storage: {
        type: 'cloud',
        autosaveChanges: 100,
        autosaveIntervalMs: 10000
      }
      }}
    />
  );
}