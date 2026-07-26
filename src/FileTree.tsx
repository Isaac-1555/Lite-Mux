import { ChevronRight, ChevronDown, Folder, FolderOpen, File } from 'lucide-react';
import type { FileNode } from './types';

interface FileTreeProps {
  nodes: FileNode[];
  expandedFolders: Set<string>;
  onToggle: (path: string) => void;
  onFileClick: (path: string) => void;
  gitStatus: Record<string, string>;
  showHiddenFiles?: boolean;
}

export function FileTree({ nodes, expandedFolders, onToggle, onFileClick, gitStatus, showHiddenFiles = false }: FileTreeProps) {
  const renderNode = (node: FileNode, depth: number = 0) => {
    if (!showHiddenFiles && node.name.startsWith('.')) {
      return null;
    }

    const isExpanded = expandedFolders.has(node.path);
    const status = gitStatus[node.name];
    const statusColor =
      status === 'Added' ? 'var(--git-add)'
      : status === 'Modified' ? 'var(--git-mod)'
      : status === 'Deleted' ? 'var(--git-del)'
      : 'var(--fg)';

    return (
      <div key={node.path}>
        <div
          onClick={() => {
            if (node.is_dir) {
              onToggle(node.path);
            } else {
              onFileClick(node.path);
            }
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '4px 0',
            paddingLeft: `${depth * 16 + 8}px`,
            fontSize: '13px',
            color: node.is_dir ? 'var(--fg)' : statusColor,
            cursor: 'pointer',
            borderRadius: '2px',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-hover)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
        >
          {node.is_dir ? (
            <>
              {isExpanded ? (
                <ChevronDown size={16} style={{ marginRight: '4px', flexShrink: 0 }} />
              ) : (
                <ChevronRight size={16} style={{ marginRight: '4px', flexShrink: 0 }} />
              )}
              {isExpanded ? (
                <FolderOpen size={16} style={{ marginRight: '6px', color: 'var(--folder)', flexShrink: 0 }} />
              ) : (
                <Folder size={16} style={{ marginRight: '6px', color: 'var(--folder)', flexShrink: 0 }} />
              )}
            </>
          ) : (
            <>
              <span style={{ width: '16px', marginRight: '4px', flexShrink: 0 }} />
              <File size={16} style={{ marginRight: '6px', flexShrink: 0 }} />
            </>
          )}
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {node.name}
          </span>
          {status && !node.is_dir && (
            <span style={{ marginLeft: 'auto', fontSize: '10px', color: statusColor, fontWeight: 'bold', paddingRight: '8px' }}>
              {status[0]}
            </span>
          )}
        </div>
        {node.is_dir && isExpanded && node.children && (
          <div>
            {node.children.map(child => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const filteredNodes = showHiddenFiles ? nodes : nodes.filter(node => !node.name.startsWith('.'));

  return <div style={{ padding: '4px 0' }}>{filteredNodes.map(node => renderNode(node))}</div>;
}
