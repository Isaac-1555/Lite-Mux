import { useState } from 'react';
import { X, Keyboard, Palette } from 'lucide-react';
import { KeymapPanel } from './KeymapSettings';
import { ThemeSettings } from './ThemeSettings';
import type { KeymapOverride } from './keymap';
import type { ThemeState } from './theme';
import './SettingsModal.css';

type Section = 'keyboard' | 'themes';

type Props = {
  overrides: KeymapOverride;
  onSaveKeymap: (o: KeymapOverride) => void;
  themeState: ThemeState;
  onThemeChange: (state: ThemeState) => void;
  onClose: () => void;
};

export function SettingsModal({
  overrides,
  onSaveKeymap,
  themeState,
  onThemeChange,
  onClose,
}: Props) {
  const [section, setSection] = useState<Section>('keyboard');

  return (
    <div className="st-backdrop" onClick={onClose}>
      <div className="st-card" onClick={(e) => e.stopPropagation()}>
        <div className="st-header">
          <div className="st-title">Settings</div>
          <button className="st-icon-btn" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </div>

        <div className="st-body">
          <nav className="st-nav">
            <button
              className={`st-nav-item${section === 'keyboard' ? ' active' : ''}`}
              onClick={() => setSection('keyboard')}
            >
              <Keyboard size={14} />
              Keyboard shortcuts
            </button>
            <button
              className={`st-nav-item${section === 'themes' ? ' active' : ''}`}
              onClick={() => setSection('themes')}
            >
              <Palette size={14} />
              Themes
            </button>
          </nav>

          <div className="st-panel">
            {section === 'keyboard' ? (
              <KeymapPanel overrides={overrides} onSave={onSaveKeymap} />
            ) : (
              <ThemeSettings state={themeState} onChange={onThemeChange} />
            )}
          </div>
        </div>

        <div className="st-footer">
          <button className="st-btn st-btn-primary" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
