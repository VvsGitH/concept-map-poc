import { useMemo, useState } from 'react';
import { ConceptMapViewer } from '../concept-map';
import { smallMap } from './data/small';
import { mediumMap, stressMap } from './data/medium-stress';
import { testDs1, usaIran, storiaFinaliChampions } from './data/test';
import './app.css';

const MAPS = {
  small: { label: 'Il caso Porto Vecchio · 11 nodi', data: smallMap },
  medium: { label: 'Dossier Appalti Sanità · 31 nodi', data: mediumMap },
  stress: { label: 'Operazione Cento Fili · 100 nodi', data: stressMap },
  testDs1: { label: 'Test DS 1', data: testDs1 },
  usaIran: { label: 'USA - Iran', data: usaIran },
  storiaFinaliChampions: { label: 'Storia Finali Champions', data: storiaFinaliChampions },
} as const;

type MapKey = keyof typeof MAPS;

export default function App() {
  const [mapKey, setMapKey] = useState<MapKey>('small');
  const map = useMemo(() => MAPS[mapKey].data, [mapKey]);

  return (
    <div className="demo">
      <header className="demo__header">
        <div className="demo__brand">
          <span className="demo__masthead">L'Archivio</span>
          <span className="demo__tagline">Mappe concettuali · PoC</span>
        </div>
        <label className="demo__picker">
          <span>Mappa</span>
          <select value={mapKey} onChange={(e) => setMapKey(e.target.value as MapKey)}>
            {Object.entries(MAPS).map(([key, m]) => (
              <option key={key} value={key}>
                {m.label}
              </option>
            ))}
          </select>
        </label>
      </header>
      <main className="demo__canvas">
        <ConceptMapViewer map={map} />
      </main>
    </div>
  );
}
