import TwitterLogo from './assets/twitter.svg';
import Reddit from './assets/reddit.svg';
import Telegram from './assets/telegram.svg';
import Discord from './assets/discord.svg';
import Article from './assets/article.svg';
import Play from './assets/play.svg';
import Binance from './assets/binance.svg';

const tasks = [
  {
    platform: 'twitter',
    title: 'Twitter Engagement',
    buttonText: 'Engage',
    icon: TwitterLogo,
    tasks: [
      {
        description: 'Like, Retweet or reply to @TenEx_Official tweets.',
      },
      {
        description: 'Tag @TenEx_Official, $TENEX in your tweets.',
        expanded: true,
      },
      {
        description: 'Mention TENEX in your tweets without tagging.',
        expanded: true,
      },
    ],
    points: 'Score 5 points by completing this task',
  },

  {
    platform: 'discord',
    title: 'Discord Participation',
    buttonText: 'Participat',
    icon: Discord,
    points: 'Score 10 points by completing this task',
    tasks: [
      {
        description: 'Join our Discord community and engage in discussions.',
      },
      {
        description:
          'Offer support and answer questions for additional rewards.',

        expanded: true,
      },
    ],
  },
  {
    platform: 'telegram',
    title: 'Telegram Contribution',
    buttonText: 'Contribute',
    icon: Telegram,
    points: 'Score 10 points by completing this task',
    tasks: [
      {
        description: 'Join our Telegram community and engage in discussions.',
      },
      {
        description:
          'Offer support and answer questions for additional rewards.',

        expanded: true,
      },
    ],
  },
  {
    platform: 'reddit',
    title: 'Reddit Contribution',
    buttonText: 'Contribute',
    icon: Reddit,
    points: 'Score 5 points by completing this task',
    tasks: [
      {
        description: 'Create or comment on posts in r/TENEX.',
      },
      {
        description: 'Mention TENEX or $TENEX in other subreddits.',

        expanded: true,
      },
    ],
  },

  {
    platform: 'exchange-activity:',
    title: 'Exchange Activity:',
    buttonText: 'Swap',
    icon: Binance,
    points: 'Score points by trading $TENEX',
    tasks: [
      {
        description: 'Connect Exchange using a read-only API key.',
      },
    ],
  },

  {
    platform: 'article',
    title: 'Write an article about TENEX',
    buttonText: 'Upload',
    icon: Article,
    points: 'Score 20 points by completing this task',
    tasks: [
      {
        description: 'write and submit articles about TENEX.',
      },
      {
        description:
          'Earn points based on the quality and depth of your article.',

        expanded: true,
      },
    ],
  },

  {
    platform: 'video',
    title: 'Create a video about TENEX',
    buttonText: 'Upload',
    icon: Play,
    points:
      'More views equal more points! Earn up to 100 points per video depending on its reach.',
    tasks: [
      {
        description:
          'Capture an engaging video about TENEX to share on your social media platforms.',
      },
      {
        description:
          'After reaching 100 views , send us the link of your video to claim your points.',
      },
    ],
  },
];

export default tasks;
