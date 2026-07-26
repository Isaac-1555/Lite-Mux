import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { invoke } from '@tauri-apps/api/core';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { json } from '@codemirror/lang-json';
import { markdown } from '@codemirror/lang-markdown';
import { type ThemeColors, toCodeMirrorTheme } from './theme';

export function EditorPane({
  filePath,
  onClose,
  colors,
}: {
  filePath: string;
  onClose: () => void;
  colors: ThemeColors;
}) {
  const [content, setContent] = useState('');
  const [savedContent, setSavedContent] = useState('');
  const [loading, setLoading] = useState(true);

  const isDirty = content !== savedContent;
  const autosaveTimeoutRef = useRef<number | null>(null);
  const cmTheme = useMemo(() => toCodeMirrorTheme(colors), [colors]);

  useEffect(() => {
    async function loadFile() {
      try {
        const text = await invoke<string>('read_file', { path: filePath });
        setContent(text);
        setSavedContent(text);
      } catch (e) {
        console.error("Failed to read file", e);
        setContent(`// Error loading file: ${e}`);
        setSavedContent(`// Error loading file: ${e}`);
      }
      setLoading(false);
    }
    loadFile();
  }, [filePath]);

  const handleSave = useCallback(async (textToSave: string) => {
    try {
      await invoke('write_file', { path: filePath, content: textToSave });
      setSavedContent(textToSave);
      console.log('Saved');
    } catch (e) {
      console.error("Failed to save", e);
    }
  }, [filePath]);

  useEffect(() => {
    if (!loading && isDirty) {
      if (autosaveTimeoutRef.current) clearTimeout(autosaveTimeoutRef.current);
      autosaveTimeoutRef.current = setTimeout(() => {
        handleSave(content);
      }, 2000);
    }
    return () => {
      if (autosaveTimeoutRef.current) clearTimeout(autosaveTimeoutRef.current);
    };
  }, [content, isDirty, loading, handleSave]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 's') {
      e.preventDefault();
      if (autosaveTimeoutRef.current) clearTimeout(autosaveTimeoutRef.current);
      handleSave(content);
    }
  };

  const getExtensions = () => {
    const ext = filePath.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'js':
      case 'jsx':
      case 'ts':
      case 'tsx':
        return [javascript({ jsx: true, typescript: true })];
      case 'html': return [html()];
      case 'css': return [css()];
      case 'json': return [json()];
      case 'md': return [markdown()];
      default: return [];
    }
  };

  if (loading) return <div style={{ padding: '20px', color: 'var(--fg-muted)' }}>Loading...</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }} onKeyDown={handleKeyDown}>
      <div style={{ height: '30px', backgroundColor: 'var(--bg-header)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: '12px', color: isDirty ? 'var(--git-mod)' : 'var(--fg-muted)' }}>
        <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {filePath} {isDirty && '•'}
        </span>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--fg-muted)', cursor: 'pointer' }}>×</button>
      </div>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <CodeMirror
          value={content}
          height="100%"
          theme={cmTheme}
          extensions={getExtensions()}
          onChange={(val) => setContent(val)}
          basicSetup={{
            lineNumbers: true,
            foldGutter: true,
            highlightActiveLine: true,
          }}
          style={{ height: '100%', fontSize: '14px', fontFamily: 'Monaco, Menlo, "Courier New", monospace' }}
        />
      </div>
    </div>
  );
}
