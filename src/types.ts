export interface Call {
  direction: 'outbound' | 'inbound';
  from: string;
  to: string;
  via: string;
  duration: number;
  call_type: 'missed' | 'answered' | 'voicemail';
  is_archived: boolean;
  id: string;
  created_at: Date;
}

export type CallByDate = { [key: string]: Call[] };
