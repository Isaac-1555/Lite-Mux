import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';

interface DiffPaneProps {
  filePath: string;
  onClose: () => void;
}

export function DiffPane({ filePath, onClose }: DiffPaneProps) {
  const [diffText, setDiffText] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDiff() {
      try {
        setLoading(true);
        setError(null);

        const pathParts = filePath.split('/');
        const lastPart = pathParts[pathParts.length - 1];
        const hasFileExtension = lastPart.includes('.') && !lastPart.startsWith('.');
        const isDirectoryDiffCase = filePath === 'cwd' || !hasFileExtension;

        const diffPath = isDirectoryDiffCase ? (filePath === 'cwd' ? '.' : filePath) : filePath;
        const diffContent = await invoke<string>('get_git_diff', { path: diffPath });

        if (!diffContent || diffContent.trim() === '') {
          setError('No changes in this directory');
          setLoading(false);
          return;
        }

        setDiffText(diffContent);
      } catch (e) {
        console.error("Failed to load diff", e);
        setError(String(e));
      }
      setLoading(false);
    }
    loadDiff();
  }, [filePath]);

  const header = (
    <div style={{ height: '30px', backgroundColor: 'var(--bg-header)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: '12px', color: 'var(--fg-muted)' }}>
      <span style={{ flex: 1 }}>Git Changes</span>
      <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--fg-muted)', cursor: 'pointer' }}>×</button>
    </div>
  );

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--bg-app)' }}>
        {header}
        <div style={{ padding: '20px', color: 'var(--fg-muted)' }}>Loading diff...</div>
      </div>
    );
  }

  if (error || !diffText) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--bg-app)' }}>
        {header}
        <div style={{ padding: '20px', color: 'var(--fg-muted)' }}>
          {error || 'No changes or not a git repository'}
        </div>
      </div>
    );
  }

  const lines = diffText.split('\n');
  const fileCount = (diffText.match(/^diff --git/g) || []).length || 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'var(--bg-app)' }}>
      <div style={{ height: '30px', backgroundColor: 'var(--bg-header)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: '12px', color: 'var(--fg-muted)' }}>
        <span style={{ flex: 1 }}>Git Changes ({fileCount} {fileCount === 1 ? 'file' : 'files'})</span>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--fg-muted)', cursor: 'pointer' }}>×</button>
      </div>
      <div style={{ flex: 1, overflow: 'auto', backgroundColor: 'var(--bg-app)', fontFamily: 'ui-monospace, Consolas, monospace', fontSize: '12px' }}>
        {lines.map((line, i) => {
          const isAdd = line.startsWith('+') && !line.startsWith('+++');
          const isDel = line.startsWith('-') && !line.startsWith('---');
          const isHeader = line.startsWith('@@') || line.startsWith('diff ') || line.startsWith('index ') || line.startsWith('---') || line.startsWith('+++');

          return (
            <div
              key={i}
              style={{
                display: 'flex',
                backgroundColor: isAdd ? 'var(--diff-add-bg)' : isDel ? 'var(--diff-del-bg)' : 'transparent',
                color: isAdd ? 'var(--diff-add)' : isDel ? 'var(--diff-del)' : isHeader ? 'var(--diff-header)' : 'var(--fg)',
                lineHeight: 1.5,
                minHeight: '20px',
              }}
            >
              <span style={{ width: '20px', textAlign: 'center', flexShrink: 0, userSelect: 'none', opacity: 0.5 }}>
                {line.charAt(0) || ' '}
              </span>
              <span style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', paddingRight: '10px' }}>
                {line.slice(1)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
