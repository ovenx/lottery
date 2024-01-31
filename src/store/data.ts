import { IPrizeConfig, IPersonConfig } from '@/types/storeType';
import musicUrl from '@/assets/music.mp3'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import { Nullable } from 'vitest';

export const defaultPersonList = <IPersonConfig[]> []
export const defaultMusicList = [
    {
        id: '',
        name: 'music.mp3',
        url: musicUrl
    },
]

export const defaultPrizeList = <IPrizeConfig[]>[
    {
        id: '001',
        name: '特等奖',
        sort: 1,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        picture: {
            id: '2',
            name: '特等奖',
            url: image1
        },
        separateCount: {
            enable: true,
            countList: []
        },
        desc: '特等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
        category: [1,0],
    },
    {
        id: '002',
        name: '一等奖',
        sort: 2,
        isAll: false,
        count: 2,
        isUsedCount: 0,
        picture: {
            id: '1',
            name: '一等奖',
            url: image1
        },
        separateCount: {
          enable: false,
          countList: []
        },
        desc: '一等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
        category: [2,0],
    },
    {
        id: '003',
        name: '二等奖',
        sort: 3,
        isAll: false,
        count: 6,
        isUsedCount: 0,
        picture: {
          id: '4',
          name: '二等奖',
          url: image2,
        },
        separateCount: {
            enable: false,
            countList: []
        },
        desc: '二等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
        category: [4,2],
    },
    {
        id: '004',
        name: '三等奖',
        sort: 4,
        isAll: false,
        count: 12,
        isUsedCount: 0,
        picture: {
          id: '4',
          name: '三等奖',
          url: image2,
        },
        separateCount: {
            enable: false,
            countList: []
        },
        desc: '三等奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
        category: [],
    },
    {
        id: '005',
        name: '幸运奖',
        sort: 5,
        isAll: false,
        count: 30,
        isUsedCount: 0,
        picture: {
            id: '4',
            name: '幸运奖',
            url: image2,
        },
        separateCount: {
            enable: false,
            countList: []
        },
        desc: '幸运奖',
        isShow: true,
        isUsed: false,
        frequency: 1,
        category: [],
    },
    {
      id: '006',
      name: '其它',
      sort: 5,
      isAll: false,
      count: 30,
      isUsedCount: 0,
      picture: {
        id: '4',
        name: '其它',
        url: image2,
      },
      separateCount: {
          enable: false,
          countList: []
      },
      desc: '其它',
      isShow: true,
      isUsed: false,
      frequency: 1,
      category: [],
  }
]
export const defaultCurrentPrize = null as Nullable<IPrizeConfig>

export const defaultTemporaryPrize = <IPrizeConfig>{
    id: '',
    name: '',
    sort: 0,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    picture: {
        id: '-1',
        name: '',
        url: ''
    },
    separateCount: {
        enable: true,
        countList: []
    },
    desc: '',
    isShow: false,
    isUsed: false,
    frequency: 1,
    category: [],
}

export const defaultImageList = [
    {
        id: '0',
        name: '一等奖',
        url: 'https://24years.top/resource/image/image1.png'
    },
    {
        id: '1',
        name: '二等奖',
        url: 'https://24years.top/resource/image/image2.png'
    },
    {
        id: '2',
        name: '三等奖',
        url: 'https://24years.top/resource/image/image3.png'
    },
    {
        id: '3',
        name: '超级奖',
        url: 'https://24years.top/resource/image/image4.png'
    },
    {
        id: '4',
        name: '特别奖',
        url: 'https://24years.top/resource/image/image5.png'
    }
]
export const defaultPatternList = [19, 20, 21, 38, 55, 54, 53, 70, 87, 88, 89, 23, 40, 57, 74, 91, 92, 93, 76, 59, 42, 25, 24, 27, 28, 29, 46, 63, 62, 61, 78, 95, 96, 97, 31, 48, 65, 66, 67, 33, 50, 84, 101]
