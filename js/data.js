/**
 * Junior Jarvis Career — Career & Question Data
 * Source of truth for all game content.
 *
 * AI-First Design: Static dataset serves as the offline fallback.
 * When an AI provider is configured, the engine can dynamically generate
 * questions using natural language understanding.
 *
 * v1 — 8 careers, 12 questions, AI impact + success content per career.
 *
 * Property matrix (min 2 diffs between any pair):
 *   helps  creates  discovery  outdoor  art  tech  strategy  physical
 * 1  T       F         T         F       F    T      F         T     Doctor
 * 2  F       T         F         F       T    F      F         F     Artist
 * 3  F       F         T         T       F    T      F         F     Scientist
 * 4  F       T         F         F       F    T      F         F     Coder
 * 5  T       F         F         F       F    F      T         F     Leader
 * 6  F       T         T         F       F    T      F         T     Engineer
 * 7  T       F         F         F       T    F      F         F     Teacher
 * 8  F       F         T         T       F    F      F         T     Explorer
 */
var JJ = window.JJ || {};

JJ.characters = [
  {
    id: 'doctor',
    name: 'Doctor',
    emoji: '🩺',
    fact: 'Doctors help sick people get better! They use their big brains to figure out what\'s wrong and how to fix it.',
    gradient: ['#00ACC1', '#006064'],
    aiImpact: 'AI can read X-rays and scans faster than any human, and robots are already helping in surgeries! AI tools help doctors find the right treatment in seconds instead of hours.',
    aiSuccess: 'Focus on caring for patients — only humans can truly understand feelings and give real comfort. Learn to use AI tools like a superpower. Doctors who team up with AI will save more lives than ever before!',
    props: { helps: true, creates: false, discovery: true, outdoor: false, art: false, tech: true, strategy: false, physical: true }
  },
  {
    id: 'artist',
    name: 'Artist',
    emoji: '🎨',
    fact: 'Artists create amazing paintings, music, movies, and games! They use their imagination to make things that make people feel something special.',
    gradient: ['#FF5722', '#E91E63'],
    aiImpact: 'AI can make art and music now, but it only copies what humans already created! YOUR creativity, emotions, and unique ideas are what make art truly special and new.',
    aiSuccess: 'Use AI tools to make your art even more awesome — they\'re like a supercharged paintbrush! Your human spark and storytelling are irreplaceable. Artists who learn AI tools will create things nobody has ever seen before!',
    props: { helps: false, creates: true, discovery: false, outdoor: false, art: true, tech: false, strategy: false, physical: false }
  },
  {
    id: 'scientist',
    name: 'Scientist',
    emoji: '🔬',
    fact: 'Scientists discover how the universe works! They ask big questions and do experiments to find answers nobody has ever found before.',
    gradient: ['#7C4DFF', '#311B92'],
    aiImpact: 'AI can analyze millions of experiments way faster than any human, and robots can run lab tests 24 hours a day! AI is already helping scientists discover new medicines and understand the universe.',
    aiSuccess: 'Learn to use AI and data tools to supercharge your experiments. The best scientists ask questions that AI can\'t think of on its own. You + AI = discoveries that will change the entire world!',
    props: { helps: false, creates: false, discovery: true, outdoor: true, art: false, tech: true, strategy: false, physical: false }
  },
  {
    id: 'coder',
    name: 'Coder',
    emoji: '💻',
    fact: 'Coders build apps, games, and websites! They tell computers exactly what to do using special computer languages.',
    gradient: ['#00C853', '#00695C'],
    aiImpact: 'AI can write code now! But it needs smart humans to give it ideas, check its work, and build the really amazing things. AI is a coding assistant, not a replacement!',
    aiSuccess: 'Learn to use AI coding tools — they\'re like having a super-fast helper who never sleeps! Focus on big-picture problem solving and creative ideas. Coders who master AI will build things that seem like magic!',
    props: { helps: false, creates: true, discovery: false, outdoor: false, art: false, tech: true, strategy: false, physical: false }
  },
  {
    id: 'leader',
    name: 'Leader',
    emoji: '👑',
    fact: 'Leaders run companies, lead teams, and make big decisions that affect lots of people! They inspire others and figure out the best path forward.',
    gradient: ['#FFB300', '#E65100'],
    aiImpact: 'AI will handle tons of data and routine tasks, making leaders way more powerful! But AI can\'t inspire people, build real trust, or make tough ethical decisions — only humans can do that.',
    aiSuccess: 'Develop your people skills — listening, inspiring, and making fair decisions. Learn to use AI data tools to make smarter choices. Future leaders who understand AI will build incredible teams and companies!',
    props: { helps: true, creates: false, discovery: false, outdoor: false, art: false, tech: false, strategy: true, physical: false }
  },
  {
    id: 'engineer',
    name: 'Engineer',
    emoji: '⚙️',
    fact: 'Engineers design and build the world around us — bridges, rockets, computers, and even robot factories! They solve problems using science and math.',
    gradient: ['#546E7A', '#1565C0'],
    aiImpact: 'AI can design and test structures super fast, and robots can do the most dangerous building work! AI tools help engineers create things that would have been impossible just a few years ago.',
    aiSuccess: 'Learn to design with AI tools and work alongside robots. Focus on creative problem-solving and big ideas. Engineers who combine human creativity with AI power will build things nobody has even dreamed of yet!',
    props: { helps: false, creates: true, discovery: true, outdoor: false, art: false, tech: true, strategy: false, physical: true }
  },
  {
    id: 'teacher',
    name: 'Teacher',
    emoji: '📚',
    fact: 'Teachers help kids and adults learn amazing things! They find the best way to explain ideas and inspire people to love learning.',
    gradient: ['#FF7043', '#BF360C'],
    aiImpact: 'AI tutors can teach subjects 24 hours a day, personalized just for each student! But AI can\'t truly understand what a kid is going through or create the kind of inspiration that changes someone\'s whole life.',
    aiSuccess: 'Focus on the human magic — mentoring, encouraging, and making students feel confident. Use AI to handle grading and planning so you have more time for the important conversations. Teachers who use AI will reach more students than ever!',
    props: { helps: true, creates: false, discovery: false, outdoor: false, art: true, tech: false, strategy: false, physical: false }
  },
  {
    id: 'explorer',
    name: 'Explorer',
    emoji: '🌿',
    fact: 'Explorers go where nobody has gone before — deep oceans, rainforests, and other planets! They study nature and help protect our incredible world.',
    gradient: ['#43A047', '#1B5E20'],
    aiImpact: 'AI drones and robots can explore super dangerous places — volcanoes, deep oceans, even Mars! AI can analyze climate data to predict weather and help protect our planet.',
    aiSuccess: 'Learn to fly AI drones and control robots as your exploration partners! Your ability to understand what you\'re seeing and ask the right questions is irreplaceable. Tech-savvy explorers will go further than anyone in human history!',
    props: { helps: false, creates: false, discovery: true, outdoor: true, art: false, tech: false, strategy: false, physical: true }
  }
];

JJ.questions = [
  { id: 'helps_a',     text: 'Do you love helping people who are hurt or struggling?',        hint: 'Like a helper or a healer!',                       prop: 'helps' },
  { id: 'helps_b',     text: 'Is making people\'s lives better your biggest goal?',            hint: 'Caring about others is your superpower!',           prop: 'helps' },
  { id: 'creates_a',   text: 'Do you love making things that never existed before?',           hint: 'Inventing or building something totally new!',       prop: 'creates' },
  { id: 'creates_b',   text: 'Would you rather build something than study how it works?',      hint: 'Making it vs. figuring it out!',                    prop: 'creates' },
  { id: 'discovery_a', text: 'Do you love figuring out how things work?',                      hint: 'Taking things apart to see what\'s inside!',         prop: 'discovery' },
  { id: 'discovery_b', text: 'Does discovering something nobody has ever found sound amazing?', hint: 'Like a real-life science adventure!',               prop: 'discovery' },
  { id: 'outdoor_a',   text: 'Would you rather work outside than be stuck at a desk?',         hint: 'Fresh air and adventures all day!',                  prop: 'outdoor' },
  { id: 'art_a',       text: 'Do you love making art, music, or stories?',                     hint: 'Creating something beautiful, funny, or exciting!',  prop: 'art' },
  { id: 'tech_a',      text: 'Are computers and gadgets really exciting to you?',              hint: 'Cool technology is totally your thing!',             prop: 'tech' },
  { id: 'tech_b',      text: 'Would working with high-tech tools every day be awesome?',       hint: 'Robots, computers, and lab equipment!',             prop: 'tech' },
  { id: 'strategy_a',  text: 'Do you like to be in charge and make the big decisions?',        hint: 'Being the boss and leading the whole team!',         prop: 'strategy' },
  { id: 'physical_a',  text: 'Do you like working with your hands to build real things?',      hint: 'Stuff you can pick up, hold, and actually use!',    prop: 'physical' }
];

JJ.messages = {
  welcome:        'Hi! I\'m Junior Jarvis! ' +
                  'Check out these awesome careers. Click a card if you want to learn more about any of them. ' +
                  'Then pick the career YOU want to be someday and keep it in your head. ' +
                  'I\'m going to ask you my questions and see if I can guess it! Click Let\'s Play to get started!',
  start:          'OK, here we go! Here\'s my first question!',
  guessPrefix:    'I think I know your career! Is it... ',
  correct:        'I knew it! That\'s a great career choice!',
  futureIntro:    'Here\'s what your future looks like with AI!',
  incorrect:      'Oops! I didn\'t get it. But that\'s OK — even AI makes mistakes!',
  encourageRetry: 'Want to play again? I bet I can get it next time!',
  thinking:       'Hmm, let me think...'
};

/**
 * AI Provider Configuration (AI-First Design)
 * When configured, the engine uses AI for dynamic questioning.
 * Falls back to static decision tree when offline or unconfigured.
 */
JJ.aiConfig = {
  enabled: false,
  provider: null,
  endpoint: null,
  apiKey: null,
  model: null,
  systemPrompt: 'You are Junior Jarvis Career, a friendly AI buddy helping kids discover what career might suit them at a NexusBlue expo booth. Ask yes/no questions about what they enjoy to figure out which career they picked. Be nice, fun, and encouraging. Use easy words a 3rd grader would understand. Keep answers to 1-2 short sentences. The careers are: Doctor, Artist, Scientist, Coder, Leader, Engineer, Teacher, Explorer.'
};
