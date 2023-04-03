export const DIALOGUES: Dialogue[] = [
  {
    key: 'enia',
    dialogues: [
      {
        key: 'enia_0',
      },
    ],
  },
];

export interface DialogueFragment {
  key: string;
}

export interface Dialogue {
  key: string;
  image?: string;
  dialogues: DialogueFragment[];
}
