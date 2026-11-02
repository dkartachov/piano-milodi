// Events shown on the Events page. Add, edit or remove entries here.
// `date` uses ISO format (YYYY-MM-DD). Events whose date has passed move to "Past events" automatically at build time.

export interface SiteEvent {
  date: string;
  title: { en: string; fr: string };
  venue: { en: string; fr: string };
  address: string;
  sessions: { time: string; label: { en: string; fr: string } }[];
  // Optional: link to a poster, ticket page or registration form.
  link?: { en: string; fr: string; url: string };
}

export const events: SiteEvent[] = [
  {
    date: '2026-06-21',
    title: { en: 'Summer 2026 Concert', fr: 'Concert d’été 2026' },
    venue: { en: 'Pointe-Claire, QC', fr: 'Pointe-Claire, QC' },
    address: '11 Av. Rodney, Pointe-Claire, QC H9R 4L8',
    sessions: [
      { time: '17:30', label: { en: 'Concert 1', fr: 'Concert 1' } },
      { time: '19:00', label: { en: 'Concert 2', fr: 'Concert 2' } },
    ],
  },
];
