/**
 * Junior Jarvis Career — Career & Question Data
 * Source of truth for all game content.
 *
 * AI-First Design: Static dataset serves as the offline fallback.
 * When an AI provider is configured, the engine can dynamically generate
 * questions using natural language understanding.
 *
 * v2 — Career path discovery (not guessing). Questions are exploratory
 * interest/personality questions that lead naturally to a career match.
 * Each career includes AI impact info and concrete numbered success steps.
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
    fact: 'Doctors help people feel better and save lives! They combine deep science knowledge with genuine care for people to solve some of life\'s hardest problems.',
    gradient: ['#00ACC1', '#006064'],
    aiImpact: 'AI is already reading X-rays, predicting diseases, and helping surgeons with robotic precision. AI tools will soon help doctors catch illnesses earlier than ever before.',
    aiSuccessSteps: [
      'Take biology, chemistry, and anatomy classes as seriously as you can — they\'re your foundation.',
      'Volunteer at a hospital or shadow a doctor to see what the job looks, feels, and sounds like.',
      'Practice truly listening — great doctors understand emotions, not just symptoms.',
      'Get comfortable with technology early — AI diagnostic tools are coming to every clinic.',
      'Join a medical or science club and keep asking "why?" — curiosity is a doctor\'s superpower.'
    ],
    props: { helps: true, creates: false, discovery: true, outdoor: false, art: false, tech: true, strategy: false, physical: true }
  },
  {
    id: 'artist',
    name: 'Artist',
    emoji: '🎨',
    fact: 'Artists create paintings, music, movies, games, and stories that make people feel something real. Their unique human perspective is what makes great art impossible to replace.',
    gradient: ['#FF5722', '#E91E63'],
    aiImpact: 'AI can generate images and music, but it only remixes what humans already created. YOUR emotions, experiences, and original ideas are what give art its soul.',
    aiSuccessSteps: [
      'Create something every single day — a sketch, a song, a sentence. Daily practice beats talent.',
      'Learn the fundamentals: color theory, composition, music theory, or storytelling structure.',
      'Experiment with AI creative tools like Adobe Firefly or Suno — use them as a supercharged paintbrush.',
      'Build a portfolio of your best work. Even a simple folder of photos counts.',
      'Find your unique voice — that\'s what makes your art impossible for anyone (or any AI) to replicate.'
    ],
    props: { helps: false, creates: true, discovery: false, outdoor: false, art: true, tech: false, strategy: false, physical: false }
  },
  {
    id: 'scientist',
    name: 'Scientist',
    emoji: '🔬',
    fact: 'Scientists discover how the universe works — from the tiniest atoms to the largest galaxies. They ask big questions and design experiments to find answers nobody has found before.',
    gradient: ['#7C4DFF', '#311B92'],
    aiImpact: 'AI can analyze millions of data points in seconds and robots can run lab experiments 24/7. AI is already helping scientists discover new medicines and map the universe faster than ever.',
    aiSuccessSteps: [
      'Ask questions constantly — get in the habit of wondering why things happen the way they do.',
      'Do experiments at home or in science fair projects. Real discovery starts with trying things.',
      'Learn basic coding or data skills — almost all modern science requires working with data.',
      'Read about current research in areas you love. Science is advancing incredibly fast with AI.',
      'Find a science mentor, join a STEM club, or enter competitions to experience real research.'
    ],
    props: { helps: false, creates: false, discovery: true, outdoor: true, art: false, tech: true, strategy: false, physical: false }
  },
  {
    id: 'coder',
    name: 'Coder',
    emoji: '💻',
    fact: 'Coders build the apps, games, and websites that billions of people use every day. They turn creative ideas into real things using the language that computers understand.',
    gradient: ['#00C853', '#00695C'],
    aiImpact: 'AI can write basic code now, but it needs smart humans to direct it, catch its mistakes, and build truly complex and creative systems. AI is a coding assistant — not a replacement.',
    aiSuccessSteps: [
      'Start coding today — free tools like Scratch, Code.org, or Python are perfect right now.',
      'Build small projects: a simple game, a website, a tool that solves a problem you have.',
      'Learn to use AI coding assistants like GitHub Copilot — mastering them now gives you a huge edge.',
      'Solve puzzles and logic games — coding is all about breaking big problems into small steps.',
      'Join a coding club or hackathon. Building alongside others teaches you twice as fast.'
    ],
    props: { helps: false, creates: true, discovery: false, outdoor: false, art: false, tech: true, strategy: false, physical: false }
  },
  {
    id: 'leader',
    name: 'Leader',
    emoji: '👑',
    fact: 'Leaders run companies, guide teams, and make big decisions that shape the world. They inspire people to work together toward something bigger than any one person could achieve alone.',
    gradient: ['#FFB300', '#E65100'],
    aiImpact: 'AI handles data and routine tasks, giving leaders more powerful information to act on. But AI cannot inspire people, earn real trust, or make tough ethical calls — only humans can do that.',
    aiSuccessSteps: [
      'Practice leading now — join student council, organize a club event, or take charge of a group project.',
      'Work on communication: practice speaking confidently in front of others every chance you get.',
      'Study how businesses and organizations work — understanding systems makes you a smarter leader.',
      'Learn to use AI data and analytics tools — future leaders who understand data make far better decisions.',
      'Read biographies of great leaders and study what made them succeed — and where they failed.'
    ],
    props: { helps: true, creates: false, discovery: false, outdoor: false, art: false, tech: false, strategy: true, physical: false }
  },
  {
    id: 'engineer',
    name: 'Engineer',
    emoji: '⚙️',
    fact: 'Engineers design and build the world — bridges, rockets, computers, and robot factories. They take scientific knowledge and turn it into real things that solve real problems.',
    gradient: ['#546E7A', '#1565C0'],
    aiImpact: 'AI can design and test structures at incredible speed, and robots handle the most dangerous tasks. AI tools let engineers create things that would have been impossible just a decade ago.',
    aiSuccessSteps: [
      'Start building things now — LEGO robotics, electronics kits, or anything you can take apart and rebuild.',
      'Take math and physics seriously — they are the foundation of every engineering discipline.',
      'Learn a 3D design tool like TinkerCAD — start turning your ideas into digital models.',
      'Study how AI is being used in engineering design and testing right now — it\'s the future of the field.',
      'Enter science and engineering competitions to tackle real problems and build your résumé early.'
    ],
    props: { helps: false, creates: true, discovery: true, outdoor: false, art: false, tech: true, strategy: false, physical: true }
  },
  {
    id: 'teacher',
    name: 'Teacher',
    emoji: '📚',
    fact: 'Teachers are the people who change lives — one student at a time. They find the best way to explain complex ideas and create the kind of inspiration that sticks with someone forever.',
    gradient: ['#FF7043', '#BF360C'],
    aiImpact: 'AI tutors can deliver personalized lessons 24/7, but they can\'t understand a student\'s real struggles or create the kind of human connection that makes someone fall in love with learning.',
    aiSuccessSteps: [
      'Practice explaining things to others now — teach a friend or younger sibling something you know well.',
      'Develop patience and empathy — the best teachers truly meet each student where they are.',
      'Study learning science: understanding HOW people learn makes you a dramatically better teacher.',
      'Explore AI education tools and understand them deeply — great teachers will use AI to personalize learning.',
      'Start mentoring or tutoring younger kids today. Real teaching experience starts right now.'
    ],
    props: { helps: true, creates: false, discovery: false, outdoor: false, art: true, tech: false, strategy: false, physical: false }
  },
  {
    id: 'explorer',
    name: 'Explorer',
    emoji: '🌿',
    fact: 'Explorers go where nobody has gone before — deep oceans, ancient rainforests, and other planets. They protect and document our world\'s most incredible and endangered places.',
    gradient: ['#43A047', '#1B5E20'],
    aiImpact: 'AI drones and robots can venture into volcanoes, deep oceans, and Mars. AI analyzes environmental data to predict climate change and help protect ecosystems before it\'s too late.',
    aiSuccessSteps: [
      'Get outside as much as possible — hike, camp, and keep a journal of what you observe in nature.',
      'Learn to use field technology: GPS, drone basics, and data collection apps used by real researchers.',
      'Study biology, ecology, or earth science — explorers need to deeply understand what they\'re finding.',
      'Learn AI data analysis tools — environmental scientists use them to track and predict changes in real time.',
      'Join a nature club, citizen science project, or conservation group to start getting real field experience.'
    ],
    props: { helps: false, creates: false, discovery: true, outdoor: true, art: false, tech: false, strategy: false, physical: true }
  }
];

/**
 * Questions are written as natural interest/personality discovery prompts.
 * They should NOT obviously point to a specific career.
 * The engine selects the most informative question automatically.
 *
 * Phase 1 — Broad lifestyle questions (most balanced splits, asked earliest)
 * Phase 2 — Specific interest questions (narrow the field)
 * Phase 3 — Refinement questions (break ties)
 */
JJ.questions = [
  // Phase 1: Broad interest discovery
  { id: 'drives_crazy',   text: 'When something doesn\'t make sense, does it drive you crazy until you figure it out?',   hint: 'You just HAVE to know how things work!',                    prop: 'discovery' },
  { id: 'feel_alive',     text: 'Do you feel most alive when you\'re creating or building something new?',                  hint: 'Making stuff that didn\'t exist before!',                   prop: 'creates' },
  { id: 'make_diff',      text: 'Does making a real difference in someone\'s life feel more rewarding than anything else?',  hint: 'The feeling of truly helping someone!',                    prop: 'helps' },
  { id: 'love_outside',   text: 'Do you feel most free and energized when you\'re outside and exploring?',                  hint: 'Nature, adventure, wide open spaces!',                     prop: 'outdoor' },

  // Phase 2: Specific interests
  { id: 'express_art',    text: 'Do you naturally express yourself through drawing, music, writing, or storytelling?',      hint: 'Creative expression feels natural to you!',                prop: 'art' },
  { id: 'tech_eyes',      text: 'Do gadgets, computers, and new technology make your eyes light up?',                       hint: 'Cool tech totally excites you!',                           prop: 'tech' },
  { id: 'take_charge',    text: 'When your group needs a plan, do people naturally look to you to figure it out?',          hint: 'You\'re the one who organizes and leads!',                 prop: 'strategy' },
  { id: 'hands_real',     text: 'Do you love working with your hands to build something real that you can actually hold?',  hint: 'Something physical — not just on a screen!',              prop: 'physical' },

  // Phase 3: Refinement
  { id: 'big_discovery',  text: 'Would discovering something that changes what the world knows sound incredible to you?',   hint: 'A real breakthrough that nobody has made before!',         prop: 'discovery' },
  { id: 'show_up',        text: 'Is being truly there for other people — showing up when it matters — one of your deepest values?', hint: 'You care about others in a deep way!',            prop: 'helps' },
  { id: 'hours_tech',     text: 'Could you spend hours tinkering with computers, robots, or electronics without getting bored?', hint: 'Totally absorbed in how tech works!',               prop: 'tech' },
  { id: 'blank_page',     text: 'Do you get a rush from turning a blank page or empty space into something amazing?',       hint: 'Inventing, designing, or building from nothing!',          prop: 'creates' }
];

JJ.messages = {
  welcome:          'Hi! I\'m Junior Jarvis! ' +
                    'Check out these amazing careers. Click any card to learn more about what that career is really like. ' +
                    'Then click Let\'s Find Out — I\'ll ask you some questions about what you enjoy ' +
                    'and find the career that\'s the best match for YOU!',
  start:            'Let\'s find out what career fits you best! I\'m going to ask you some questions about what you enjoy. Ready? Here we go!',
  matchPrefix:      'Based on everything you shared with me, the career we think is the best match for you is... ',
  matchConfirm:     'This career fits your interests and personality really well!',
  futureIntro:      'Here\'s what your future could look like — and how YOU can make it happen!',
  encourageRetry:   'Want to explore again? Try answering differently and see what comes up!'
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
  systemPrompt: 'You are Junior Jarvis Career, a friendly AI career guide helping kids discover what career might suit them at a NexusBlue expo booth. Ask yes/no questions about personality traits and what they enjoy — NOT directly about job skills — to identify their best career match. Be encouraging and fun. Use simple language a 3rd grader understands. The careers are: Doctor, Artist, Scientist, Coder, Leader, Engineer, Teacher, Explorer.'
};
