
export interface MindMapNode {
  name: string;
  children?: MindMapNode[];
  _children?: MindMapNode[]; // Used for toggling
  description?: string;
  color?: string;
}

export type CategoryKey = 
  | 'culture' 
  | 'tech' 
  | 'emergency' 
  | 'om' 
  | 'consultancy' 
  | 'system' 
  | 'training' 
  | 'inspection' 
  | 'supply' 
  | 'support';
