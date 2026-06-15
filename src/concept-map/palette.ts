import type { ConceptNodeType } from './types';

export interface TypeStyle {
  label: string;
  /** colore pieno (bordo, accenti, badge) */
  color: string;
  /** tinta chiara per sfondi */
  tint: string;
}

/**
 * Palette "inchiostro su carta": quattro inchiostri editoriali leggibili
 * su fondo chiaro (contrasto AA su #FCFBF8 per testo/bordi).
 */
export const TYPE_STYLES: Record<ConceptNodeType, TypeStyle> = {
  person: { label: 'Persona', color: '#1D4ED8', tint: '#E4ECFC' },
  event: { label: 'Evento', color: '#B45309', tint: '#FBEEDC' },
  organization: { label: 'Organizzazione', color: '#047857', tint: '#DDF2EA' },
  other: { label: 'Altro', color: '#5B5F6E', tint: '#E9EAEF' },
};
