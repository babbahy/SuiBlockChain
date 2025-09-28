export type Project = {
  id: string;
  title: string;
  cover: string;
  location: string;
  date: string;
  summary: string;
  goal: string;
  category: 'Water' | 'Education' | 'Health' | 'Energy' | 'Emergency' | 'Environment';
  ngo: {
    name: string;
    successRate: number; // 0-100
    beneficiaries: number;
    journalistEndorsements: number;
  };
  beneficiariesCount: number;
  timelineMonths: number;
  // Milestones are completed sequentially. Only the current index is open for funding.
  currentMilestoneIndex: number; // 0-based index of the milestone currently open for funding
  milestones: { id: string; name: string; target: string }[];
  vault_id?: string; // Added vault_id to Project type
};

export const projects: Project[] = [
  {
    id: 'clean-water-ethiopia',
    title: 'Clean Water Wells in Rural Ethiopia',
    cover: 'https://res.cloudinary.com/dw5ba0va3/image/upload/v1759027880/Water_Wells_Ethiopia_uciuom.webp',
    location: 'Tigray, Ethiopia',
    date: 'Q4 2025',
    summary: 'Build and maintain community wells with local partners to secure year-round access to safe water.',
    goal: '$40,000',
    category: 'Water',
    ngo: { name: 'BlueSource Relief', successRate: 88, beneficiaries: 12500, journalistEndorsements: 6 },
    beneficiariesCount: 500,
    timelineMonths: 6,
    currentMilestoneIndex: 0,
    milestones: [
      { id: 'm1', name: 'Site Survey & Permits', target: '5,000 SUI' },
      { id: 'm2', name: 'Drilling & Casing', target: '20,000 SUI' },
      { id: 'm3', name: 'Pump & Solar Install', target: '10,000 SUI' },
      { id: 'm4', name: 'Community Training', target: '5,000 SUI' },
    ],
    vault_id: '0xYOUR_VAULT_ID_FOR_ETHIOPIA', // Placeholder vault ID
  },
  {
    id: 'school-rebuild-gaza',
    title: 'Rebuild Classrooms and Provide Learning Kits',
    cover: 'https://res.cloudinary.com/dw5ba0va3/image/upload/v1759027696/rebuid_classroom_ih9zrk.jpg',
    location: 'Gaza',
    date: 'Q1 2026',
    summary: 'Support reconstruction of safe learning spaces and supply learning kits for displaced children.',
    goal: '$120,000',
    category: 'Education',
    ngo: { name: 'TeachForward', successRate: 91, beneficiaries: 32000, journalistEndorsements: 9 },
    beneficiariesCount: 1200,
    timelineMonths: 9,
    currentMilestoneIndex: 0,
    milestones: [
      { id: 'm1', name: 'Structure Stabilization', target: '30,000 SUI' },
      { id: 'm2', name: 'Classroom Refurbishment', target: '45,000 SUI' },
      { id: 'm3', name: 'Equipment & Kits', target: '30,000 SUI' },
      { id: 'm4', name: 'Final Inspections', target: '15,000 SUI' },
    ],
    vault_id: '0xYOUR_VAULT_ID_FOR_GAZA', // Placeholder vault ID
  },
  {
    id: 'solar-kits-sudan',
    title: 'Off‑grid Solar Kits for Clinics',
    cover: 'https://res.cloudinary.com/dw5ba0va3/image/upload/v1759027948/Solar_Farm_Khartoum_krw1yo.jpg',
    location: 'Khartoum, Sudan',
    date: 'Q2 2026',
    summary: 'Deliver solar kits to stabilize cold chains and power essential medical equipment.',
    goal: '$65,000',
    category: 'Energy',
    ngo: { name: 'HealthPower Africa', successRate: 86, beneficiaries: 9200, journalistEndorsements: 5 },
    beneficiariesCount: 18_000,
    timelineMonths: 4,
    currentMilestoneIndex: 0,
    milestones: [
      { id: 'm1', name: 'Procurement', target: '15,000 SUI' },
      { id: 'm2', name: 'Deployment', target: '35,000 SUI' },
      { id: 'm3', name: 'Training & Handover', target: '15,000 SUI' },
    ],
    vault_id: '0xYOUR_VAULT_ID_FOR_SUDAN', // Placeholder vault ID
  },
  {
    id: 'shelter-kits-morocco',
    title: 'Earthquake‑Resilient Shelter Kits',
    cover: 'https://res.cloudinary.com/dw5ba0va3/image/upload/v1759028705/RS18195_RS40311_SNAN3384-scr.jpg_ucz2hf.webp',
    location: 'Al Haouz, Morocco',
    date: 'Q4 2025',
    summary: 'Provide rapid, weatherproof shelter kits and training for affected families.',
    goal: '$80,000',
    category: 'Emergency',
    ngo: { name: 'RapidRelief', successRate: 84, beneficiaries: 21000, journalistEndorsements: 7 },
    beneficiariesCount: 1600,
    timelineMonths: 3,
    currentMilestoneIndex: 0,
    milestones: [
      { id: 'm1', name: 'Sourcing & QA', target: '20,000 SUI' },
      { id: 'm2', name: 'Distribution', target: '40,000 SUI' },
      { id: 'm3', name: 'Follow‑up & Repairs', target: '20,000 SUI' },
    ],
    vault_id: '0xYOUR_VAULT_ID_FOR_MOROCCO', // Placeholder vault ID
  },
  {
    id: 'reforestation-drc',
    title: 'Community‑Led Reforestation & Agroforestry',
    cover: 'https://res.cloudinary.com/dw5ba0va3/image/upload/v1759028696/Mouss-Abdoulaye_Plantain_kxh0ch.jpg',
    location: 'Kivu, DR Congo',
    date: 'Q3 2026',
    summary: 'Restore degraded land, improve soil health, and create sustainable livelihoods.',
    goal: '$30,000',
    category: 'Environment',
    ngo: { name: 'GreenRoots DRC', successRate: 90, beneficiaries: 7000, journalistEndorsements: 3 },
    beneficiariesCount: 2500,
    timelineMonths: 12,
    currentMilestoneIndex: 0,
    milestones: [
      { id: 'm1', name: 'Nursery Setup', target: '6,000 SUI' },
      { id: 'm2', name: 'Planting', target: '12,000 SUI' },
      { id: 'm3', name: 'Training & Monitoring', target: '12,000 SUI' },
    ],
    vault_id: '0xYOUR_VAULT_ID_FOR_DRC', // Placeholder vault ID
  },
  {
    id: 'maternal-health-nepal',
    title: 'Maternal Health and Safe Birth Program',
    cover: 'https://res.cloudinary.com/dw5ba0va3/image/upload/v1759030521/Safe_Birth_Program_Nepal_arierk.jpg',
    location: 'Karnali, Nepal',
    date: 'Q2 2026',
    summary: 'Train midwives and equip clinics to reduce maternal and neonatal mortality.',
    goal: '$75,000',
    category: 'Health',
    ngo: { name: 'SafeBirth Nepal', successRate: 89, beneficiaries: 15400, journalistEndorsements: 4 },
    beneficiariesCount: 3200,
    timelineMonths: 8,
    currentMilestoneIndex: 0,
    milestones: [
      { id: 'm1', name: 'Midwife Training', target: '25,000 SUI' },
      { id: 'm2', name: 'Clinic Equipment', target: '35,000 SUI' },
      { id: 'm3', name: 'Community Outreach', target: '15,000 SUI' },
    ],
    vault_id: '0xYOUR_VAULT_ID_FOR_NEPAL', // Placeholder vault ID
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}


