export interface IRecipesData {
  id: number
  recipesGroup: 'breakfast' | 'dinner' | 'lunch' | 'sweets'
  date: string
  socialData: { views: number; comments: number }
  description: string
  author: string
}

export const recipesData: IRecipesData[] = [
  {
    id: 1,
    author: 'Sophie Keller',
    date: '05 Jul 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    socialData: {
      comments: 19,
      views: 126
    },
    recipesGroup: 'dinner'
  },
  {
    id: 2,
    author: 'Oscar Jones',
    date: '28 Feb 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    socialData: {
      comments: 19,
      views: 126
    },
    recipesGroup: 'lunch'
  },
  {
    id: 3,
    author: 'Jacob Roberts',
    date: '01 Jan 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    socialData: {
      comments: 19,
      views: 126
    },
    recipesGroup: 'breakfast'
  },
  {
    id: 4,
    author: 'Emma Brigs',
    date: '30 Apr 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    socialData: {
      comments: 19,
      views: 126
    },
    recipesGroup: 'sweets'
  }
]
