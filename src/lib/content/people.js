/**
 * Founders. Slugs are preserved from the Jekyll site (/tom-ashby, /rupert-wright).
 */
export const people = [
  {
    slug: 'tom-ashby',
    name: 'Tom Ashby',
    role: 'Founder and CEO',
    image: '/images/tom-ashby.webp',
    summary:
      'Tom Ashby is a strategic communications advisor with a background in global media. Founder and CEO of Ashbright, formerly Partner at Consulum and Group VP Corporate Communications at TAQA.',
    short:
      'Strategic communications advisor with a background in global media. Expert in counsel, building communications functions and campaigns at times of crisis and change.',
    body: [
      'Tom is a strategic communications advisor with a background in global media. He has experience in a wide range of government and business sectors, including royal courts, sovereign wealth funds, private equity, capital markets, real estate, financial services, defence and the global energy industry.',
      'He is an expert in providing strategic counsel, building and leading communications functions, creating strategies and designing campaigns, especially at times of crisis and change. He is an expert writer and editor and sits on the Board of the Middle East Public Relations Association.',
      'Tom has been involved in several successful startups in investor relations, communications and technology. In 2018, he completed a Certificate in Big Data and Social Analytics at Massachusetts Institute of Technology (MIT) and also successfully completed the Oxford Fintech Programme at the Saïd Business School at the University of Oxford.',
      'Before Ashbright, Tom was a Partner at Consulum, the international strategic communications consultancy. From 2012 to 2014, he was Group Vice President, Corporate Communications at Abu Dhabi National Energy Company (TAQA).',
      'Tom began his career as a journalist, spending 15 years with Reuters, the global news agency, where he held leadership roles in the UK, South America and West Africa. He moved to the Middle East in 2008 to establish The National newspaper in Abu Dhabi, where he spent four years as Business Editor. He graduated with honours in French with African and Asian Studies from the University of Sussex.'
    ],
    facts: [
      { label: 'Before Ashbright', value: 'Partner, Consulum; Group VP Corporate Communications, TAQA' },
      { label: 'Media', value: '15 years at Reuters; founding Business Editor, The National' },
      { label: 'Education', value: 'University of Sussex; MIT; Saïd Business School, Oxford' }
    ]
  },
  {
    slug: 'rupert-wright',
    name: 'Rupert Wright',
    role: 'Chairman',
    image: '/images/rupert-wright.webp',
    summary:
      'Rupert Wright is Chairman of Ashbright and a strategic communications counsellor who has advised the governments of Abu Dhabi, Dubai, St Kitts & Nevis and Dominica. Formerly Middle East Chairman of Edelman.',
    short:
      'Strategic communications counsellor who has advised governments in the Gulf and the Caribbean. Formerly Middle East Chairman of Edelman.',
    body: [
      'Rupert is a strategic communications counsellor who has advised the governments of Abu Dhabi and Dubai, St Kitts & Nevis and Dominica in the Caribbean.',
      'Before Ashbright, he was Middle East Chairman of Edelman, the world’s largest public relations company. He has worked with Shell, ADCB, General Electric and Mubadala, a sovereign wealth fund, among others. He has run media training courses for government and corporate clients including Shell, BlackBerry and Etihad Airways.',
      'He began his career in London at Euromoney in the 1990s, reporting from emerging markets such as Brazil, Russia, Poland and Indonesia. In 1996 he joined The European under the editorship of Andrew Neil, where he was business and finance editor. In 2000 he consulted for the World Bank, developing its Water Media Network, as well as LTP Trade and Deutsche Bank in London.',
      'He has written books on water and the Languedoc, and has written for most of the world’s major newspapers including the Financial Times, Washington Post, The Times and Wall Street Journal. He was instrumental in the start-up of The National newspaper in Abu Dhabi in 2008, where he was business comment editor. He graduated from London University with a degree in English and Classical Studies.'
    ],
    facts: [
      { label: 'Before Ashbright', value: 'Middle East Chairman, Edelman' },
      { label: 'Media', value: 'Euromoney; The European; The National' },
      { label: 'Education', value: 'London University, English and Classical Studies' }
    ]
  }
];

export function getPerson(slug) {
  return people.find((p) => p.slug === slug);
}
