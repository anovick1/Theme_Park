const db = require('../db')
const { Park, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  Park.collection.drop()
  Review.collection.drop()
  const disneyland = await new Park({
    name: 'Disneyland',
    address: '1313 Disneyland Dr Anaheim, CA',
    url: 'https://disneyland.disney.go.com/',
    image:
      'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1593556896598'
  })
  await disneyland.save()
  const sixFlags = await new Park({
    name: 'Six Flags',
    address: '13710 Central Ave, Bowie, MD 20721',
    url: 'https://www.sixflags.com/america',
    image:
      'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfa-coaster.jpg'
  })
  await sixFlags.save()
  const dollywood = await new Park({
    name: 'Dollywood',
    address: '2700 Dollywood Parks Blvd, Pigeon Forge, TN',
    url: 'https://www.dollywood.com/',
    image:
      'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/220328-dollywood-mb-1156-380d7b.jpg'
  })
  await dollywood.save()
  const disneyworld = await new Park({
    name: 'Walt Disney World',
    address: '1375 E Buena Vista Dr Orlando, FL',
    url: 'https://disneyworld.disney.go.com/vacation-planning/',
    image:
      'https://www.travelandleisure.com/thmb/9MPWdqyhl8T8bjI8Q8OA1QCGdjs=/1800x1200/filters:fill(auto,1)/cinderellas-castle-disneyworld-DISPLUSSALE0422-b8989ddbc34f4c2d87c83bf08f498cbd.jpg'
  })
  await disneyworld.save()
  const reviews = [
    {
      name: 'Daniel M.',
      location: 'Fullerton, CA',
      park: disneyland._id,
      text: "Love it the truly happiest place in the world I grew up in Anaheim and I love Disneyland the fire works the rides it's so much fun and my kids really really love it",
      date: '7/2/2022',
      rating: '5',
      pfp: 'https://www.pikpng.com/pngl/b/541-5413318_matt-round-png-round-portrait-pic-png-clipart.png'
    },
    {
      name: 'Ana W.',
      location: 'Seal Beach, CA',
      park: disneyland._id,
      text: 'The MAGIC began 67 years ago today... Happy birthday  Disneyland The Happiest Place on Earth...is my HAPPY place',
      date: '7/17/2022',
      rating: '5',
      pfp: 'https://media-exp1.licdn.com/dms/image/C4D03AQH_Uv8r7668Lw/profile-displayphoto-shrink_800_800/0/1593284538774?e=1663804800&v=beta&t=J5TnfDPIp-RrG-3IfJN4h_Gu6PJnloHoxBe5eHmcMbU'
    },
    {
      name: 'Linda B.',
      location: 'Edmonton, Canada',
      park: disneyland._id,
      text: "WOW!!! Who hired the Disney CEO? You have nickeled and dimed us ....... And we still can't get on rides because of the crowds!! The Cast Members must dislike the CEO too as 75% of them need to get some Public Relations Classes and learn how to become 'Disney' again! This is not the 'Happiest Place on Earth' anymore.",
      date: '7/13/2022',
      rating: '1',
      pfp: 'https://media-exp1.licdn.com/dms/image/C4D03AQHCi-3KMk0vyg/profile-displayphoto-shrink_800_800/0/1516559659175?e=1663804800&v=beta&t=Mt15FgzG870oKg67t74TaGIAXlWA0dSEwd5QWPd4vu4'
    },
    {
      name: 'David S.',
      location: 'Arlington, VA',
      park: sixFlags._id,
      text: "We had a great time, rides and food were great! Only negative was most of the restaurants were closed cuz the staff is still in school, but apparently next week everything will be open! Check out the park, you'll have a blast!",
      date: '6/23/2022',
      rating: '4',
      pfp: 'https://www.pngkit.com/png/full/329-3298620_jon-circle-headshot-p-computer-network.png'
    },
    {
      name: 'Michael N.',
      location: 'Alexandria, VA',
      park: sixFlags._id,
      text: "Ghetto amusement park. If you can get passed by it's ghettoness, it's not a bad park. Of course King's Dominion is much better, but six flags is closer and cheaper. It will fulfill your needs for riding roller coasters and swimming. I only swam here once so there's not much memory to it.",
      date: '9/21/2021',
      rating: '3',
      pfp: 'https://fullcirclecare.com/wp-content/uploads/2019/08/Dan-Reed-Headshot-Circle-Crop-300x300.png'
    },
    {
      name: 'Susan B.',
      location: 'Falls Church, VA',
      park: sixFlags._id,
      text: "If you want to criticize theme parks for not being like a movie, go back to Disney and pay $5000 for a weekend. In lieu of great rides and a responsible staff to keep the rides safe which the young staff at Six Flags America does consistently on every ride, Disney hired 10,000 actors to provide you with the fake world you foolishly think you want to teach to your kids. Six Flags America is not 'ghetto,' as many reviewers have called it, this is normal life, it is a good place.",
      date: '6/28/2022',
      rating: '5',
      pfp: 'https://media-exp1.licdn.com/dms/image/C4D03AQGK2mK9UacYpg/profile-displayphoto-shrink_800_800/0/1651725479683?e=1663804800&v=beta&t=ZuDzYh2LMCVJ5pCUIImQnCHXUR5oFEtrwB-tNu1a64I'
    },
    {
      name: 'Gali S.',
      location: 'Chandler, AZ',
      park: dollywood._id,
      text: "Such a wonderful and enjoyable time my husband and I had today and we will be back tomorrow. Dolly you have made this park magical to me at my age of 63. I rode my first roller coaster since my late 50's and more than anything was the shows which we fabulous. We got to see a rain storm that was special being from AZ and saw Dolly's story 'Heartstrings' and it was raining in the theater which it was supposed to but then when it was over it was still raining but outside. We laughed because we thought it was part of the show. Thanks Dolly! Wished you were here to meet you and who knows someday I hope I do.  Food was filling and liked you",
      date: '7/18/2022',
      rating: '5',
      pfp: 'https://media-exp1.licdn.com/dms/image/C4D03AQEoEq-lRrre_Q/profile-displayphoto-shrink_800_800/0/1588615880800?e=1663804800&v=beta&t=ORabOXDTjS_nbaRmUxtbQDUUoXsLpaFPsYPRMExFTes'
    },
    {
      name: 'Carlena P.',
      location: 'Highmore, SD',
      park: dollywood._id,
      text: "One of the most beautiful family parks I've ever visited.  The fireworks and drone show was awesome.  I really enjoyed the team of people working and learning together, all the shops were delightful.  I will be bring the family back as soon as possible.",
      date: '7/20/2022',
      rating: '5',
      pfp: 'https://media-exp1.licdn.com/dms/image/C5603AQEMoern61m8Fg/profile-displayphoto-shrink_800_800/0/1610131601126?e=1663804800&v=beta&t=KiMrZJPjqRXxlRRR3CoDjqWu6uCLnD36No07zvlTHhY'
    },
    {
      name: 'Dusty S.',
      location: 'Williamsburg, MI',
      park: dollywood._id,
      text: 'This was a terrible experience.  The park was utterly oversold and there were way too many people.   Hours long waits for rides.   At least a 40 minute wait for snacks.  We were only able to ride a few less popular rides and spent most of our time waiting in lines. The end result was two exhausted parents and two very disappointed kids. A heartbreaking day to be sure.',
      date: '3/30/2022',
      rating: '1',
      pfp: 'https://media-exp1.licdn.com/dms/image/C5603AQGzMFSWpL4KCw/profile-displayphoto-shrink_400_400/0/1588019000866?e=1663804800&v=beta&t=kTQhGVPRL9WYv9o9GkxHtmKxwYn-c9INPNmTFYzqTNg'
    },
    {
      name: 'Mandesa N.',
      location: 'New York, NY',
      park: disneyworld._id,
      text: ' just does not feel the same as I remember growing up. Although this was my husbands first visit to WDW we still enjoyed!  All the characters we encountered were engaging. Clean parks as usual and good funnel cakes.',
      date: '7/20/2022',
      rating: '4',
      pfp: 'https://media-exp1.licdn.com/dms/image/C4E03AQHSm4ZJ7c91fA/profile-displayphoto-shrink_800_800/0/1517734114550?e=1663804800&v=beta&t=YX2taS4N3lE2xkCD4JwqsySdNO2JWk4bRcggdtK-Mn4'
    },
    {
      name: 'Chris M.',
      location: 'Tampa. FL',
      park: disneyworld._id,
      text: 'Overpriced. Not accommodating. Shockingly few healthy options for a family. Lost their way of family focus and values.',
      date: '7/16/2022',
      rating: '1',
      pfp: 'https://media-exp1.licdn.com/dms/image/C5603AQF7lYYTtn2ppQ/profile-displayphoto-shrink_800_800/0/1627838533451?e=1663804800&v=beta&t=nwz1fauInLa-IBOx9PzyoQ2VJcrrUSWEVcZ1haSG6rE'
    },
    {
      name: 'Stan C.',
      location: 'Canyon Lake, TX',
      park: disneyworld._id,
      text: 'Incredible Resort. 4 Theme Parks and 2 Water Parks. Food is amazing everywhere you go. The Cast Members are  helpful and polite. Resort Hotels are amazing. Unbeatable summer vacation resort.',
      date: '6/25/2022',
      rating: '5',
      pfp: 'https://media-exp1.licdn.com/dms/image/C5603AQHH2PHd9QAHXQ/profile-displayphoto-shrink_800_800/0/1625247806814?e=1663804800&v=beta&t=lBWB5Oqbp8wRwjyFcBHLq8JBKavJ8Wd_ohdRjd85Zkw'
    }
  ]

  await Review.insertMany(reviews)
}
const run = async () => {
  await main()
  db.close()
}

run()
