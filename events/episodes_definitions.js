// Complete episode definitions with all episodes using a uniform stage-based structure.
// Each episode has a `stages` array where each stage can be:
// - { type: 'embed', title, description, image, rewards, nextStageTitle }
// - { type: 'fight', title, enemies: [ { id, name, health, attack: [min,max] }, ... ], nextStageTitle }
// - { type: 'accuracy', title, description, image, duration, tick, successWindow, nextStageTitle }
// - { type: 'reward', title, description, image }
// - { type: 'decision', title, description, image, Ifyes: { title, isloose }, Ifno: { title, isloose }, buttonYes, buttonNo, rewardsYes, rewardsNo }
// - { type: 'trivia', title, description, image, question, buttons: { '1': 'Option 1', ... }, answer: '1', rewards, nextStageTitle }
//
// Rewards format (displayed to player):
// - { type: 'beli', amount: 'min-max' | number, hardOnly: false }
// - { type: 'chest', rank: 'C'|'B'|'A'|'S', amount: number, hardOnly: false }
// - { type: 'card', name: 'CardName', hardOnly: false } (includes blueprints)
// - { type: 'xp', amount: number, hardOnly: false }
// - { type: 'karma', amount: number, hardOnly: false }
// - { type: 'reset', amount: number, hardOnly: false }
// - { type: 'reset', amount: number, hardOnly: false }

// Helper function to format rewards for display
export function formatRewardsList(rewards, difficulty) {
  if (!rewards || !Array.isArray(rewards)) return '';
  const lines = [];
  for (const reward of rewards) {
    if (reward.hardOnly && difficulty !== 'hard') continue;
    if (reward.type === 'beli') {
      if (typeof reward.amount === 'string') {
        lines.push(`${reward.amount} beli`);
      } else {
        lines.push(`${reward.amount} beli`);
      }
    } else if (reward.type === 'chest') {
      const label = reward.hardOnly ? ` (Hard mode exclusive)` : '';
      lines.push(`${reward.amount}x ${reward.rank} chest${label}`);
    } else if (reward.type === 'card') {
      const label = reward.hardOnly ? ` (Hard mode exclusive)` : '';
      lines.push(`1x ${reward.name}${label}`);
    } else if (reward.type === 'reset') {
      const label = reward.hardOnly ? ` (Hard mode exclusive)` : '';
      lines.push(`${reward.amount}x Reset Token${label}`);
    } else if (reward.type === 'xp') {
      const label = reward.hardOnly ? ` (Hard mode exclusive)` : '';
      lines.push(`${reward.amount} XP${label}`);
    } else if (reward.type === 'karma') {
      const label = reward.hardOnly ? ` (Hard mode exclusive)` : '';
      lines.push(`${reward.amount > 0 ? '+' : ''}${reward.amount} Karma${label}`);
    }
  }
  return lines.length > 0 ? '**Possible Rewards:**\n' + lines.join('\n') : '';
}

export const episodes = {
  0: {
    title: 'Introduction - Episode 0',
    stages: [
      {
        type: 'embed',
        title: 'Introduction - Episode 0',
        image: 'https://files.catbox.moe/6953qz.gif',
        description: '**Introduction - Episode 0**\n\nThis is where your journey starts, Pirate !\nIn this journey, you will be walking the same steps as Luffy into being the future pirate king!\nBuild your team, get your items ready and be ready to fight, because this will be a hard journey.. Or will it ? Choose the difficulty of your journey on the dropdown below. You can always change the difficulty later with command `op settings` or `/settings` if you ever change your mind.\n\nAs you progress, the enemies will get stronger. I recommend preserving your items for future stages.\n\n**%USERNAME%\'s Deck**\n%TEAMNAMES%\n\n**Next Episode**\nI\'m Luffy! The Man Who Will Become the Pirate King!',
        rewards: []
      }
    ]
  },
  1: {
    title: "I'm Luffy! The Man Who Will Become the Pirate King!",
    stages: [
      {
        type: 'embed',
        title: "I'm Luffy! The Man Who Will Become the Pirate King! - Episode 1",
        image: 'https://files.catbox.moe/zlda8y.webp',
        description: 'Luffy is found floating at sea by a cruise ship. After repelling an invasion by the Alvida Pirates, he meets a new ally, their chore boy Koby.',
        rewards: [
          { type: 'beli', amount: '200-400', hardOnly: false },
          { type: 'chest', rank: 'C', amount: 1, hardOnly: false },
          { type: 'card', name: 'Koby', hardOnly: false },
          { type: 'card', name: 'Alvida', hardOnly: true },
          { type: 'card', name: 'Heppoko', hardOnly: true },
          { type: 'card', name: 'Peppoko', hardOnly: true },
          { type: 'card', name: 'Poppoko', hardOnly: true },
          { type: 'card', name: 'Alvida pirates banner blueprint', hardOnly: true },
          { type: 'reset', amount: 1, hardOnly: true }
        ]
      },
       {
        type: 'embed',
        title: "Luffy's Entrance - Stage 1",
        image: 'https://files.catbox.moe/s38lnj.webp',
        description: 'Sailors on a passing cruise ship retrieve the barrel, but the ship is attacked with cannon fire by a nearby pirate ship, led by Alvida.Koby and other pirates notice the barrel in the kitchen and find Luffy inside, who was sleeping.'
      },
      {
        type: 'fight',
        title: 'VS 3 Alvida Pirates',
        enemies: [
          { id: 'Heppoko', name: 'Heppoko', health: 50, attack: [5, 10] },
          { id: 'Poppoko', name: 'Poppoko', health: 50, attack: [5, 10] },
          { id: 'Peppoko', name: 'Peppoko', health: 50, attack: [5, 10] }
        ]
      },
       {
        type: 'embed',
        title: "Luffy and koby's talk - stage 3",
        image: 'https://files.catbox.moe/fktdd1.webp',
        description: 'Koby explains that he was riding on a rowboat, but was kidnapped by the Alvida Pirates and forced to become a chore boy. He explains his desires to escape the Alvida Pirates some day and join the Marines.'
      },
      {
type: 'fight',
        title: 'VS 3 Alvida Pirates',
        enemies: [
          { id: 'Alvida', name: 'Alvida', health: 95, attack: [5, 15] },
        ]
      },
       {
        type: 'reward',
        title: "Luffy and koby's escape - stage 5",
        image: 'https://files.catbox.moe/6xc7up.webp',
        description: 'Having concluded the battle, Luffy boards a dinghy with Koby to continue his travels, catching a glimpse of the female burglar who was also departing the ship on her own dinghy. Luffy aims towards the Grand Line to search for the One Piece treasure but first looks to recruit the infamous Pirate Hunter Roronoa Zoro into his crew.'
      },
    ]
  },
  2: {
    title: 'The Great Swordsman Appears! Pirate Hunter Roronoa Zoro',
    stages: [
      {
        type: 'embed',
        title: 'The Great Swordsman Appears! Pirate Hunter Roronoa Zoro - Episode 2',
        image: 'https://files.catbox.moe/pdfqe1.webp',
        description: 'Luffy and Koby find Zoro captured in Shells Town Marine base, with the Marines intending to execute him. Luffy and Koby work together to retrieve Zoro\'s katanas, as well as confront the tyrannical Marine Captain Morgan and his son Helmeppo.',
        rewards: [
          { type: 'beli', amount: '100-150', hardOnly: false },
          { type: 'chest', rank: 'C', amount: 1, hardOnly: false },
          { type: 'card', name: 'Rika', hardOnly: false },
          { type: 'card', name: 'Roronoa Zoro', hardOnly: false },
          { type: 'card', name: 'Helmeppo', hardOnly: true },
           { type: 'card', name: 'Wado Ichimonji Blueprint', hardOnly: true }
        ]
      },
      {
        type: 'embed',
        title: "Zoro captured - stage 1",
        image: 'https://files.catbox.moe/nq8ngo.webp',
        description: 'Luffy and Koby arrive at Shells Town, a town where a Marine base is stationed. They find their target, Roronoa Zoro, crucified at the base.'
      },
      {
        type: 'trivia',
        title: "Bum helmeppo - stage 2",
        image: 'https://files.catbox.moe/g8kvc4.webp',
        description: 'A small girl, Rika, sneaks into the base to offer Zoro onigiri, but she is stopped by Helmeppo, a snobbish man who destroys the onigiri. However, Zoro later eats the dirt-stained rice.',
        question: 'Is helmeppo a bum?',
   buttons: {
    '1': 'yes',
    '2': 'no'
    },
    answer: '1',
     rewards: [{ type: 'beli', amount: '100' }]
      },
      {
        type: 'fight',
        title: 'VS Helmeppo - stage 3',
        enemies: [
          { id: 'Helmeppo', name: 'Helmeppo', health: 70, attack: [5, 15] }
        ]
      },
      {
        type: 'embed',
        title: "Yes my son, you ARE a bum. - stage 4",
        image: 'https://files.catbox.moe/r5860j.webp',
        description: 'Outside the Marine base, Rika reveals that the town was run by a tyrannical Captain Morgan, who allowed his son, Helmeppo, to regularly abuse his citizens. Soon enaugh, Helmeppo realized that his pops dgaf about him.'
      },
      {
        type: 'decision',
        title: 'Pirate hunter zoro - stage 5',
        image: 'https://files.catbox.moe/y6pah3.webp',
        description: 'You encounter infamous pirate hunter Zoro, help him ?',
        Ifyes: { title: 'Marine guards interrupt: stage - 6 (your decision didnt matter kid.)', isloose: false },
        Ifno: { title: 'secret_zorofight', isloose: false },
        buttonYes: 'Yes',
        buttonNo: 'No',
        rewardsYes: [{ type: 'card', name: 'Roronoa Zoro' }],
        rewardsNo: []
      },
      {
        type: 'fight',
        title: 'Marine guards interrupt: stage - 6 (your decision didnt matter kid.)',
        enemies: [
          { id: 'guard1', name: 'Marine Guard 1', health: 80, attack: [10, 15] },
          { id: 'guard2', name: 'Marine Guard 2', health: 80, attack: [10, 15] }
        ]
      },
      {
        type: 'reward',
        title: 'End, Next up: Morgan vs Luffy!',
        image: 'https://files.catbox.moe/6xc7up.webp',
        description: ''
      }
    ]
  },
  3: {
    title: "Morgan vs. Luffy! Who's This Mysterious Beautiful Young Girl?",
    stages: [
      {
        type: 'embed',
        title: "Morgan vs. Luffy! Who's This Mysterious Beautiful Young Girl? - Episode 3",
        image: 'https://files.catbox.moe/8os33p.webp',
        description: 'Luffy and Zoro battle and defeat Morgan, Helmeppo and the Marines. Koby parts ways with Luffy to join the Marines, and Zoro joins Luffy\'s crew as a permanent crew member.',
        rewards: [
          { type: 'beli', amount: '250-500', hardOnly: false },
          { type: 'chest', rank: 'C', amount: 2, hardOnly: false },
           { type: 'chest', rank: 'B', amount: 1, hardOnly: true },
           { type: 'reset', amount: 1, hardOnly: true },
          { type: 'card', name: 'Axe-Hand Morgan', hardOnly: true }
        ]
      },
      {
        type: 'accuracy',
        title: "Morgans tyranny - stage 1",
        image: 'https://files.catbox.moe/zjv7pb.webp',
        description: 'Morgan orders his men to open fire on them both; click as close as possible to the end of the progress bar to deflect the bullets, even if the bar is full!',
        duration: 10000,
        tick: 500,
        successWindow: 1500
      },
      {
        
        type: 'embed',
        title: "Deflected - stage 2",
        image: 'https://files.catbox.moe/m574vd.webp',
        description: 'They are stopped by Luffy, who deflects the bullets with his rubber body.'
      },
      {
        type: 'fight',
        title: 'Morgans tyranny - stage 3',
        enemies: [
          { id: 'Axehandmorgan', name: 'Axe-Hand Morgan', health: 200, attack: [20, 40] },
        ]
      },
      {
        type: 'trivia',
        title: "Bum helmeppo at it again - stage 4",
        image: 'https://files.catbox.moe/3mu566.webp',
        description: ' Helmeppo holds Koby hostage, threatening to shoot him.',
        question: 'Is helmeppo still a bum?',
   buttons: {
    '1': 'yes',
    '2': 'no'
    },
    answer: '1',
     rewards: [{ type: 'beli', amount: '200' }]
      },
      {
        type: 'embed',
        title: "Convince the navy - stage 5",
        image: 'https://files.catbox.moe/slvkof.webp',
        description: 'Ripper, the Marine who had succeeded Morgan as the new base commander, confronts Luffy. He agrees to accept Koby into the Marines upon his request. However, due to Luffy and Zoros statuses as pirates, he orders them both to leave the town, only promising not to inform headquarters as a gesture of gratitude.'
      },
      {
        type: 'reward',
        title: 'The journey continues - stage 6',
        image: 'https://files.catbox.moe/6xc7up.webp',
        description: 'Luffy and Zoro agree, and they both continue their travels.'
      }

    ]
  },
  4: {
    title: "Luffy's Past! The Red-Haired Shanks Appears",
    stages: [
      {
        type: 'embed',
        title: "Luffy's Past! The Red-Haired Shanks Appears",
        image: 'https://files.catbox.moe/t83zj9.webp',
        description: 'The significance of Luffy\'s straw hat is explained as the hat was entrusted to him by his idol, Shanks. Luffy then accidentally finds himself in Orange Town, territory of the pirate Buggy.',
        rewards: [
          { type: 'beli', amount: '100-200', hardOnly: false },
          { type: 'chest', rank: 'C', amount: 1, hardOnly: false },
          { type: 'card', name: 'Straw Hat', hardOnly: false },
          { type: 'card', name: 'Higuma', hardOnly: true },
          { type: 'card', name: 'Lord of the Coast', hardOnly: true }
        ]
      },
      {
        type: 'embed',
        title: "Traveling to shells town - stage 1",
        image: 'https://files.catbox.moe/9yaa17.webp',
        description: 'Meanwhile, Luffy and Zoro sail towards their next destination, but Luffy loses his signature straw hat when the boat jostles. Zoro recovers the hat.'
      },
      {
        type: 'embed',
        title: "Flashback: Befriending Shanks - stage 2",
        image: 'https://files.catbox.moe/2s69ir.webp',
        description: 'In his childhood, Luffy befriended Shanks, a pirate captain residing in his home village. While Luffy and the Red Hair Pirates were at a bar, Luffy unknowingly ate the Gomu Gomu no Mi.'
      },
      {
        type: 'embed',
        title: "Devil Fruit power - stage 3",
        image: 'https://files.catbox.moe/q5fgjc.webp',
        description: 'Upon eating the fruit, Luffy\'s body immediately gained rubber-like properties, but he had permanently lost the ability to swim.'
      },
      {
        type: 'fight',
        title: 'VS Higuma - stage 4',
        enemies: [
          { id: 'higuma', name: 'Higuma', health: 105, attack: [14, 24] }
        ]
      },
      {
        type: 'embed',
        title: "Sea King attack - stage 5",
        image: 'https://files.catbox.moe/e452zk.webp',
        description: 'However, Luffy was terrorized by Higuma and his bandits. Shanks rescued Luffy from a Sea King, but lost his left arm in the process.'
      },
      {
        type: 'fight',
        title: 'Buggy Pirates attack - stage 7',
        enemies: [
          { id: 'scout1', name: 'Buggy Scout 1', health: 100, attack: [12, 20] },
          { id: 'scout2', name: 'Buggy Scout 2', health: 100, attack: [12, 20] }
        ]
      },
      {
        type: 'embed',
        title: "Nami meets Luffy - stage 8",
        image: 'https://files.catbox.moe/znl1sz.webp',
        description: 'The bird lets go of Luffy after being shot down by cannon fire, causing Luffy to fall into Buggy\'s territory. He meets the female thief for the first time, who had stolen the map and was being pursued by Buggy Pirates.'
      },
      {
        type: 'reward',
        title: 'Next up: Fear, Mysterious Power! Pirate Clown Captain Buggy!',
        image: 'https://files.catbox.moe/6xc7up.webp',
        description: 'Dont feel like putting a description. just go to the next stage bud. You have a loooonggg journey ahead of you.'
      }
    ]
  },
  5: {
    title: 'Fear, Mysterious Power! Pirate Clown Captain Buggy!',
    stages: [
      {
        type: 'embed',
        title: 'Fear, Mysterious Power! Pirate Clown Captain Buggy!',
        image: 'https://files.catbox.moe/euwxw2.webp',
        description: 'Luffy, Nami, and Zoro confront Buggy the Clown. Buggy threatens to fire a Buggy Ball at Luffy, but this attack is redirected back at his men.',
        rewards: [
          { type: 'beli', amount: '100-200', hardOnly: false },
          { type: 'chest', rank: 'C', amount: 1, hardOnly: false },
          { type: 'card', name: 'Nami', hardOnly: false }
        ]
      },
      {
        type: 'embed',
        title: "Nami's goal - stage 1",
        image: 'https://files.catbox.moe/w4m2ut.webp',
        description: 'Nami reveals her goal of collecting 100 million Berries for an unknown cause. She then goes on and reveals her navigation skills.'
      },
      {
        type: 'embed',
        title: "Nami betrays Luffy - stage 2",
        image: 'https://files.catbox.moe/rdhntw.webp',
        description: 'Nami betrays Luffy, tying him up and handing him over to the Buggy Pirates as a gesture of good will. Buggy accepts, locks Luffy into a cage.'
      },
      {
        type: 'accuracy',
        title: 'Buggy Ball - stage 3',
        image: 'https://files.catbox.moe/59e3sq.webp',
        description: 'Buggy prepares a Buggy Ball, a powerful, explosive cannonball. Click as close as possible to the end of the progress bar to redirect it back, even if the bar is full!',
        duration: 8000,
        tick: 500,
        successWindow: 1200
      },
      {
        type: 'embed',
        title: "Zoro arrives - stage 4",
        image: '',
        description: 'Zoro, who has just arrived at the town, notices the explosion. Buggy then orders Nami to fire a Buggy Ball at Luffy, but she refuses.'
      },
      {
        type: 'fight',
        title: 'Zoro vs Buggy - stage 5',
        enemies: [
          { id: 'Buggy', name: 'Buggy', health: 160, attack: [18, 36] }
        ]
      },
      {
        type: 'embed',
        title: "Nami's change of heart - stage 6",
        image: 'https://files.catbox.moe/lbkoh1.webp',
        description: 'Zoro readjusts the cannon to aim at the Buggy Pirates, and allows Nami to reignite the fuse, firing the cannon. Nami agrees to temporarily sail with the crew.'
      },
      {
        type: 'reward',
        title: 'Next up: Desperate Situation! Beast Tamer Mohji vs. Luffy!',
        image: 'https://files.catbox.moe/6xc7up.webp',
        description: 'Nami reveals her true intentions and uneasy alliance with the crew.'
      }
    ]
  },
  6: {
    title: 'Desperate Situation! Beast Tamer Mohji vs. Luffy!',
    stages: [
      {
        type: 'embed',
        title: 'Desperate Situation! Beast Tamer Mohji vs. Luffy!',
        image: 'https://files.catbox.moe/gzwyfp.webp',
        description: 'Luffy defends himself from Buggy\'s assassin, Beast Tamer Mohji and his lion Richie. Allying himself with the town\'s mayor as well as a dog, the Straw Hats return to Buggy\'s base to confront him.',
        rewards: [
          { type: 'beli', amount: '100-200', hardOnly: false },
          { type: 'chest', rank: 'C', amount: 1, hardOnly: false },
          { type: 'card', name: 'ChouChou', hardOnly: false },
          { type: 'card', name: 'Boodle', hardOnly: false },
          { type: 'card', name: 'Mohji', hardOnly: true },
          { type: 'card', name: 'Richie', hardOnly: true }
        ]
      },
      {
        type: 'embed',
        title: "Chouchou the dog - stage 1",
        image: 'https://files.catbox.moe/xpthxv.webp',
        description: 'Meanwhile, Luffy interacts with Chouchou, a dog defending the shop. The mayor explains that Chouchou\'s owner passed away from illness, so he continues to defend the deceased owner\'s store.'
      },
      {
        type: 'embed',
        title: "Mohji attacks - stage 2",
        image: 'https://files.catbox.moe/i0e6hg.webp',
        description: 'Buggy sends his first mate, Mohji the Beast Tamer, to search for and eliminate Zoro. Riding his lion Richie, he finds Luffy still trapped in the cage.'
      },
      {
        type: 'fight',
        title: 'VS Richie and Mohji - stage 3',
        enemies: [
          { id: 'Richie', name: 'Richie', health: 118, attack: [10, 22] },
          { id: 'mohji', name: 'Mohji', health: 110, attack: [9, 19] }
        ]
      },
      {
        type: 'embed',
        title: "Chouchou's store destroyed - stage 4",
        image: 'https://files.catbox.moe/gkd2c7.webp',
        description: 'Richie raids the store for food and burns it to the ground. After seeing Mohji\'s actions, Luffy came to Chouchou\'s aid, defeating both Richie and Mohji.'
      },
      {
        type: 'embed',
        title: "Buggy's revenge - stage 5",
        image: 'https://files.catbox.moe/65c92o.webp',
        description: 'Mohji returns to Buggy to report his defeat. As an act of vengeance, Buggy fires a Buggy Ball into the town, destroying the mayor\'s house. Nami agrees to temporarily join forces with Luffy and Zoro.'
      },
      {
        type: 'decision',
        title: 'Stand up to Buggy - stage 6',
        image: 'https://files.catbox.moe/r45ir9.webp',
        description: 'The mayor decides to stand up to Buggy for his callous invasion of the town.',
        Ifyes: { title: 'Next up: Grand Duel! Zoro vs Cabaji', isloose: false },
        Ifno: { title: 'Next up: Grand Duel! Zoro vs Cabaji', isloose: false },
        buttonYes: 'Help',
        buttonNo: 'Escape',
        rewardsYes: [{ type: 'karma', amount: 1 }],
        rewardsNo: [{ type: 'xp', amount: 40 }]
      },
      {
        type: 'reward',
        title: 'Next up: Grand Duel! Zoro vs Cabaji',
        image: 'https://files.catbox.moe/6xc7up.webp',
        description: 'Luffy emerges victorious. The crew moves forward toward their dream of the Grand Line.'
      }
    ]
  },
  7: {
    title: 'Grand Duel! Zoro vs Cabaji',
    stages: [
      {
        type: 'embed',
        title: 'Grand Duel! Zoro vs Cabaji - Episode 7',
        image: 'https://files.catbox.moe/py6qcw.webp',
        description: 'Zoro takes on Buggy\'s acrobat and chief of staff, Cabaji, engaging in a one-on-one sword fight. After Zoro emerges victorious, Luffy battles against Buggy, where his straw hat is damaged by Buggy\'s attacks.',
        rewards: [
          { type: 'beli', amount: '100-200', hardOnly: false },
          { type: 'chest', rank: 'C', amount: 1, hardOnly: false },
          { type: 'card', name: 'Cabaji', hardOnly: true }
        ]
      },
      {
        type: 'accuracy',
        title: 'Buggy ball! - stage 1',
        image: 'https://files.catbox.moe/65c92o.webp',
        description: 'Buggy fires a Buggy Ball at the group; click as close as possible to the end of the progress bar to deflect it, even if the bar is full!',
        duration: 10000,
        tick: 500,
        successWindow: 1500
      },
      {
        type: 'embed',
        title: 'Deflected! - stage 2',
        image: 'https://files.catbox.moe/d9iwy0.webp',
        description: "The attack decimates Buggy's men, save for Buggy himself and his chief of staff Cabaji. Cabaji offers to battle the group on Buggy's behalf, and Zoro decides to duel him one-on-one."
      },
      {
        type: 'fight',
        title: 'Zoro vs Cabaji - stage 3',
        enemies: [
          { id: 'cabaji', name: 'Cabaji', health: 110, attack: [9, 20] }
        ]
      },
      {
        type: 'embed',
        title: "Nami steals the map - stage 4",
        image: 'https://files.catbox.moe/3nc588.webp',
        description: 'During Zoro\'s battle with Cabaji, Nami breaks away from the group, trespassing into the pub. She takes down a patrolling guard and uses his key to open a treasure chest, revealing a map of the Grand Line inside.'
      },
      {
        type: 'fight',
        title: 'Mini fight, Luffy vs Buggy - stage 5',
        enemies: [
          { id: 'Buggy', name: 'Buggy', health: Math.floor(160 * 1), attack: [Math.floor(18 * 1), Math.floor(36 * 1)], special: { name: 'Bara Bara Festival', range: [100, 140], usedAtStart: true } }
        ]
      },
      {
        type: 'trivia',
        title: "Buggy's grudge - stage 6",
        image: 'https://files.catbox.moe/2sj0l4.webp',
        description: 'Buggy reveals that he holds a very strong grudge against Shanks.',
        question: 'Why does Buggy hate Shanks?',
        buttons: {
          '1': 'Shanks stole map',
          '2': 'Shanks caught him defecting',
          '3': 'Shanks ate his Devil Fruit'
        },
        answer: '2',
        rewards: [{ type: 'xp', amount: 50 }]
      },
      {
        type: 'reward',
        title: 'Next up: Who Will Win? Showdown Between the True Powers of the Devil Fruit!',
        image: 'https://files.catbox.moe/6xc7up.webp',
        description: 'dont feel like putting a description here. to bad for you.'
      }
    ]
  },
  8: {
    title: 'Who Will Win? Showdown Between the True Powers of the Devil Fruit!',
    stages: [
      {
        type: 'embed',
        title: 'Who Will Win? Showdown Between the True Powers of the Devil Fruit! - Episode 8',
        image: 'https://files.catbox.moe/d40by6.webp',
        description: 'Buggy reveals how Shanks foiled his plans of stealing from their crew and making a fortune. The group defeat Buggy, expelling him from the island, before departing the island themselves toward their next destination.',
        rewards: [
          { type: 'beli', amount: '200-400', hardOnly: false },
          { type: 'chest', rank: 'C', amount: 1, hardOnly: false },
          { type: 'card', name: 'Buggy', hardOnly: true }
        ]
      },
      {
        type: 'embed',
        title: "Buggy's backstory - stage 1",
        image: 'https://files.catbox.moe/9k1a75.webp',
        description: 'Buggy planned to steal the fruit, escape the crew and sell both the fruit and the map. He ate a fake Devil Fruit in front of the pirates while he kept the real one for himself.'
      },
      {
        type: 'embed',
        title: "Buggy's backstory - stage 2",
        image: 'https://files.catbox.moe/yf5smm.webp',
        description: 'However, just before he was able to leave with the fruit, he was caught by Shanks, causing him to accidentally eat the fruit. Buggy also lost the treasure map as the wind blew the map overboard.'
      },
      {
        type: 'fight',
        title: 'Fight vs Buggy - stage 3',
        enemies: [
          { id: 'Buggy', name: 'Buggy', health: Math.floor(160 * 1.25), attack: [Math.floor(18 * 1.25), Math.floor(36 * 1.25)], special: { name: 'Bara Bara Festival', range: [100, 140], usedAtStart: true } }
        ]
      },
      {
        type: 'embed',
        title: "Buggy defeated - stage 4",
        image: 'https://files.catbox.moe/xov8y8.webp',
        description: 'Buggy attempts to reassemble himself, but Nami restrains many of his body parts with a rope, leaving Buggy much smaller. Luffy then strikes the weakened Buggy with Gomu Gomu no Bazooka, sending him flying into the air.'
      },
      {
        type: 'embed',
        title: 'Off you go bud - stage 5',
        image: 'https://files.catbox.moe/gbyds2.webp',
        description: 'Nami gives Luffy the map of the Grand Line while she keeps the rest of Buggy\'s treasures. She agrees to temporarily sail with the crew. Meanwhile, the citizens of Orange Town return and blame the crew for the destruction.'
      },
      {
        type: 'embed',
        title: "Chouchou saves the day - stage 6",
        image: 'https://files.catbox.moe/xoxyc0.webp',
        description: 'Chouchou stops the mob, allowing them to head to the pier to escape. Back in the town, Boodle wakes up and finds that the Buggy Pirates have been successfully repelled.'
      },
      {
        type: 'embed',
        title: "Nami's kindness - stage 7",
        image: 'https://files.catbox.moe/vun74n.webp',
        description: 'To Nami\'s horror, Luffy leaves her treasures behind so the citizens could fund repairs for the town. On a distant island, a mysterious man stands and awaits visitors to his land.'
      },
      {
        type: 'reward',
        title: 'End of Orange Town Arc',
        image: 'https://files.catbox.moe/6xc7up.webp',
        description: ''
      }
    ]
  }
};

export const locations = {
  orange_town: { name: 'Orange town - East Blue', color: 0xFA8628, episodes: [4,5,6,7,8] },
  shells_town: { name: 'Shells Town - East Blue', color: 0x3498db, episodes: [2,3] },
  beginning: { name: 'Starting Point', color: 0x90bafb, episodes: [1] }
};

export default { episodes, formatRewardsList, locations };
