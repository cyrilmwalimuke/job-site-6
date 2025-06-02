// components/LexicalEditor.jsx
'use client' // required for Next.js App Router

import React from 'react'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { $getRoot, $getSelection } from 'lexical'

const theme = {
  // customize class names (optional)
  paragraph: 'editor-paragraph',
}

const editorConfig = {
  theme,
  onError(error) {
    throw error
  },
}

const LexicalEditor = ({ onChange }) => {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="border border-gray-300 rounded p-2 min-h-[150px]">
        <RichTextPlugin
          contentEditable={<ContentEditable className="outline-none" />}
          placeholder={<div className="text-gray-400">Enter text here...</div>}
          ErrorBoundary={({ children }) => <>{children}</>}
        />
        <HistoryPlugin />
        <OnChangePlugin
          onChange={(editorState) => {
            editorState.read(() => {
              const html = $getRoot().getTextContent()
              onChange?.(html)
            })
          }}
        />
      </div>
    </LexicalComposer>
  )
}

export default LexicalEditor
