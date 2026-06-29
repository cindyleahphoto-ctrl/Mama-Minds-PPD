/* ═══════════════════════════════════════════
   Mama Minds — EPDS Questions
   Edinburgh Postnatal Depression Scale
   10 validated questions with scoring
   ═══════════════════════════════════════════ */

export const EPDS_QUESTIONS = [
  {
    id: 1,
    text: 'I have been able to laugh and see the funny side of things',
    hint: 'As much as I always could',
    options: [
      'As much as I always could',
      'Not quite so much now',
      'Definitely not so much now',
      'Not at all'
    ],
    // Questions 1 & 2 are reverse-scored
    scores: [0, 1, 2, 3],
    reverse: false
  },
  {
    id: 2,
    text: 'I have looked forward with enjoyment to things',
    hint: 'Think about the past 7 days',
    options: [
      'As much as I ever did',
      'Rather less than I used to',
      'Definitely less than I used to',
      'Hardly at all'
    ],
    scores: [0, 1, 2, 3],
    reverse: false
  },
  {
    id: 3,
    text: 'I have blamed myself unnecessarily when things went wrong',
    hint: 'Think about the past 7 days',
    options: [
      'No, never',
      'Not very often',
      'Yes, some of the time',
      'Yes, most of the time'
    ],
    scores: [0, 1, 2, 3],
    reverse: false
  },
  {
    id: 4,
    text: 'I have been anxious or worried for no good reason',
    hint: 'Think about the past 7 days',
    options: [
      'No, not at all',
      'Hardly ever',
      'Yes, sometimes',
      'Yes, very often'
    ],
    scores: [0, 1, 2, 3],
    reverse: false
  },
  {
    id: 5,
    text: 'I have felt scared or panicky for no good reason',
    hint: 'Think about the past 7 days',
    options: [
      'No, not at all',
      'No, not much',
      'Yes, sometimes',
      'Yes, quite a lot'
    ],
    scores: [0, 1, 2, 3],
    reverse: false
  },
  {
    id: 6,
    text: 'Things have been getting on top of me',
    hint: 'Think about the past 7 days',
    options: [
      'No, I have been coping as well as ever',
      'No, most of the time I have coped quite well',
      'Yes, sometimes I haven\'t been coping as well as usual',
      'Yes, most of the time I haven\'t been able to cope at all'
    ],
    scores: [0, 1, 2, 3],
    reverse: false
  },
  {
    id: 7,
    text: 'I have been so unhappy that I have had difficulty sleeping',
    hint: 'Think about the past 7 days',
    options: [
      'No, not at all',
      'Not very often',
      'Yes, sometimes',
      'Yes, most of the time'
    ],
    scores: [0, 1, 2, 3],
    reverse: false
  },
  {
    id: 8,
    text: 'I have felt sad or miserable',
    hint: 'Think about the past 7 days',
    options: [
      'No, not at all',
      'Not very often',
      'Yes, quite often',
      'Yes, most of the time'
    ],
    scores: [0, 1, 2, 3],
    reverse: false
  },
  {
    id: 9,
    text: 'I have been so unhappy that I have been crying',
    hint: 'Think about the past 7 days',
    options: [
      'No, never',
      'Only occasionally',
      'Yes, quite often',
      'Yes, most of the time'
    ],
    scores: [0, 1, 2, 3],
    reverse: false
  },
  {
    id: 10,
    text: 'The thought of harming myself has occurred to me',
    hint: 'This is a private and important question. Your answer is confidential and helps ensure you get the right support.',
    options: [
      'Never',
      'Hardly ever',
      'Sometimes',
      'Yes, quite often'
    ],
    scores: [0, 1, 2, 3],
    reverse: false,
    sensitive: true
  }
];

/* Score interpretation thresholds */
export const SCORE_THRESHOLDS = {
  low:  { min: 0,  max: 8,  category: 'low',  color: '#4A7C59' },
  mid:  { min: 9,  max: 12, category: 'mid',  color: '#B8860B' },
  high: { min: 13, max: 30, category: 'high', color: '#C9736A' }
};

export function getScoreCategory(score) {
  if (score <= 8)  return 'low';
  if (score <= 12) return 'mid';
  return 'high';
}

export function getScoreColor(score) {
  const cat = getScoreCategory(score);
  return SCORE_THRESHOLDS[cat].color;
}

export function calculateScore(answers) {
  return answers.reduce((total, answerIndex, qIndex) => {
    if (answerIndex === null || answerIndex === undefined) return total;
    return total + EPDS_QUESTIONS[qIndex].scores[answerIndex];
  }, 0);
}
