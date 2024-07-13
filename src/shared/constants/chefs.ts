export interface IChefsData {
  id: number
  avatar: string
  name: string
  speciality: string
  portfolio: string[]
}

export const chefsData: IChefsData[] = [
  {
    id: 1,
    avatar: 'images/Chefs/chef-1.png',
    name: 'Gregory Flores',
    portfolio: ['images/Chefs/portfolio-1-1.png', 'images/Chefs/portfolio-1-2.png', 'images/Chefs/portfolio-1-3.png'],
    speciality: 'Chef of the cold'
  },
  {
    id: 2,
    avatar: 'images/Chefs/chef-2.png',
    name: 'Annette Cooper',
    portfolio: ['images/Chefs/portfolio-2-1.png', 'images/Chefs/portfolio-2-2.png', 'images/Chefs/portfolio-2-3.png'],
    speciality: 'Chef of the hot'
  },
  {
    id: 3,
    avatar: 'images/Chefs/chef-3.png',
    name: 'Greg Fox',
    portfolio: ['images/Chefs/portfolio-3-1.png', 'images/Chefs/portfolio-3-2.png', 'images/Chefs/portfolio-3-3.png'],
    speciality: 'Сhef macro kitchen'
  }
]
