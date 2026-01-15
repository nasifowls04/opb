// Special stages for decision redirects and side paths.
// These are sequences of stages that can be triggered from decisions.
// Each special stage has:
// - stages: array of stage objects (same format as episode stages)
// - nextStage: the title of the stage to return to after completing all special stages

export const specialStages = {
  // Example: A secret path with multiple stages
  'secret_zoro_help': {
    stages: [
      {
        type: 'embed',
        title: 'Secret: Zoro\'s Training',
        description: 'You help Zoro train in secret. He teaches you some sword techniques.',
        image: 'https://files.catbox.moe/zoro_training.jpg',
        rewards: [{ type: 'xp', amount: 50 }]
      },
      {
        type: 'fight',
        title: 'Zoro practice fight',
        enemies: [
          { id: 'zoro_practice', name: 'Zoro (Practice)', health: 100, attack: [10, 20] }
        ]
      },
      {
        type: 'embed',
        title: 'Training Complete',
        description: 'Zoro nods approvingly. You feel stronger.',
        rewards: [{ type: 'karma', amount: 10 }]
      }
    ],
    nextStage: 'Marine guards interrupt: stage - 6'  // Return to main episode
  },

  // Another example: A trivia detour
  'trivia_detour': {
    stages: [
      {
        type: 'trivia',
        title: 'Trivia: One Piece Knowledge',
        description: 'Answer this to prove your worth!',
        question: 'What is Luffy\'s dream?',
        buttons: {
          '1': 'To be the Pirate King',
          '2': 'To find treasure',
          '3': 'To eat meat'
        },
        answer: '1',
        rewards: [{ type: 'beli', amount: 100 }]
      }
    ],
    nextStage: 'Zoro Joins! - Episode 2'  // Return to reward stage
  },
  'secret_zorofight': {
    stages: [
      {
        type: 'fight',
        title: 'Fight vs Roronoa Zoro - Secret stage',
        enemies: [
          { id: 'Roronoa zoro', name: 'Roronoa zoro', health: 210, attack: [25, 50] }
        ]
      },
      ],
    nextStage: 'Marine guards interrupt: stage - 6 (your decision didnt matter kid.)'  // Return to main episode
  },

};

export default { specialStages };