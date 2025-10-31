import { Photo } from '@/data/types/photo'

const photosData: Photo[] = [
    {
        title: 'Erie Street',
        imgSrc: '/static/images/gallery/erieStreet.jpg',
        isVertical: false,
        camera: "Vivitar PS:35",
        location: "Erie St, Bisbee, AZ",
        date: "December 7, 2024",
        description: "Example Description I took this photo driving through Bisbee, AZ"
    },
    {
        title: 'Kilauea',
        imgSrc: '/static/images/gallery/kilauea1.jpg',
        isVertical: false,
        camera: "Vivitar PS:35",
        location: "Hawaii Volcanoes National Park, Big Island, HI",
        date: "February 25, 2025",
        description: "Kilauea having an absolute blast"
    },
    {
      title: 'Kanoa Slackline',
      imgSrc: '/static/images/gallery/kanoaSlackline.jpg',
      isVertical: false,
      camera: "Vivitar PS:35",
      location: "Makalawena Beach, Big Island, HI",
      date: "March 1, 2025",
      description: "My incredible friend Kanoa slacking around"
    },
    {
        title: 'Kaua\'i Coast',
        imgSrc: '/static/images/gallery/kauaiCoast.png',
        isVertical: false,
        camera: "Vivitar PS:35",
        location: "Queen's Bath, Kaua'i Coast, HI",
        date: "April 3, 2025",
        description: "Kanoa, River, and Madeline waving at the camera on the Kaua'i coast"
    },
    {
        title: 'My Friends',
        imgSrc: '/static/images/gallery/friends.jpg',
        isVertical: false,
        camera: "Vivitar PS:35",
        location: "Los Angeles, CA",
        date: "April 26, 2025",
        description: "Going away party as I decided to leave LA to pursue fulltime nomadic life. I love all my friends in this photo. Such wonderful people and how lucky I am to have shared time with them."
    },
    {
        title: 'Skoolie Rainbow',
        imgSrc: '/static/images/gallery/skoolieRainbow.jpg',
        isVertical: true,
        camera: "Vivitar PS:35",
        location: "Skooliepalooza, Ehrenberg, AZ",
        date: "January 27, 2025",
        description: "A beautiful morning rainbow as I left camp at Skooliepalooza to drive into town to get some work done for the day"
    },
    {
        title: 'Yosemite Vernal Rainbow',
        imgSrc: '/static/images/gallery/yosemiteRainbow.jpg',
        isVertical: false,
        camera: "Vivitar PS:35",
        location: "Vernal Falls, Yosemite, CA",
        date: "April 12, 2025",
        description: "A small rainbow above the Merced river just beyond Vernal Falls in Yosemite National Park"
    },
    {
        title: 'River Backflip',
        imgSrc: '/static/images/gallery/riverBackflipColdPonds.jpg',
        isVertical: false,
        camera: "Vivitar PS:35",
        location: "Hilo, Big Island, HI",
        date: "February 23, 2025",
        description: "I have a surprisingly large number of pictures of River doing backflips in cool places"
    },
    {
        title: 'Erie Sunset Splash',
        imgSrc: '/static/images/blog/thumbs/sunsetSplash.jpg',
        isVertical: false,
        camera: "Pixel 5",
        location: "Presque Isle, Erie, PA",
        date: "November 8, 2021",
        description: "One of the first photos that helped me fall in love with capturing moments. This was taken near RP15 for those that know"
    },
    {
        title: 'Ventura Cove Jam',
        imgSrc: '/static/images/gallery/venturaCoveJam.png',
        isVertical: true,
        camera: "Vivitar PS:35",
        location: "Ventura Cove, San Diego, CA",
        date: "March 27, 2025",
        description: "Such talented friends! Nolan, James, and Wick jamming in Ventura Cove. Wick even taught me some baselines to jam with them. Time for me to pick up some strings and learn to make nice sounds with them."
    },
    {
        title: 'White Sands NP',
        imgSrc: '/static/images/gallery/whiteSands.jpg',
        isVertical: false,
        camera: "Vivitar PS:35",
        location: "White Sands National Park, NM",
        date: "December 8, 2024",
        description: "Part of my first ever film rolls. Ventured out amongst the dunes in search of the perfect shaded area for the black and white photo."
    },
    {
        title: 'Padres Game',
        imgSrc: '/static/images/gallery/padresGame.png',
        isVertical: false,
        camera: "Vivitar PS:35",
        location: "Petco Park, San Diego, CA",
        date: "April 1, 2025",
        description: "Guardians were playing the Padres while I was in San Diego so I had to go watch them lose 7-1"
    },
    {
        title: 'Parked Outside Yosemite',
        imgSrc: '/static/images/gallery/carsYosemite.png',
        isVertical: false,
        camera: "Vivitar PS:35",
        location: "Wawona, CA",
        date: "April 12, 2025",
        description: "J and I parked up on this land outside Yosemite for a week. What a nice place to work and sleep. Toto looking pretty."
    },
    // {
    //     title: 'Thomas + Alyssa',
    //     imgSrc: '/static/images/gallery/thomasAndAlyssa.jpg',
    //     isVertical: true,
    //     camera: "Vivitar PS:35",
    //     location: "Los Angeles, CA",
    //     date: "April 19, 2025",
    //     description: "Cutest couple. Still waiting to watch the final 2 episodes of Game of Thrones with these legends."
    // },
    {
        title: 'Yosemite in the Mirror',
        imgSrc: '/static/images/gallery/yosemiteMirror.jpg',
        isVertical: false,
        camera: "Vivitar PS:35",
        location: "Yosemite National Park, CA",
        date: "April 10, 2025",
        description: "Leaving Yosemite just past Tunnel View towards the South Entrance. I could've framed this better."
    },
    {
        title: 'DJ Sam',
        imgSrc: '/static/images/gallery/samDJ.jpg',
        isVertical: false,
        camera: "Vivitar PS:35",
        location: "Skooliepalooza, Ehrenberg, AZ",
        date: "January 25, 2025",
        description: "I think Sam actually has a DJ name? Someone let me know. His set was fire at Skooliepalooza."
    },
    // {
    //     title: 'J in SD',
    //     imgSrc: '/static/images/gallery/jInVan.png',
    //     isVertical: false,
    //     camera: "Vivitar PS:35",
    //     location: "San Diego, CA",
    //     date: "April 2, 2025",
    //     description: "A photo before we parted ways in San Diego (even tho we met back up in Yosemite shortly after)"
    // },
    {
        title: 'Chicken Film',
        imgSrc: '/static/images/gallery/chickenFilm.jpg',
        isVertical: false,
        camera: "Vivitar PS:35",
        location: "Sleeping Giant, Kaua'i, HI",
        date: "April 4, 2025",
        description: "It's a chicken. On film."
    },
    {
        title: 'Vernal Jump',
        imgSrc: '/static/images/gallery/nolanAndAliWaterfall.jpg',
        isVertical: false,
        camera: "Pentax IQZoom 105G",
        location: "Vernal Falls, Yosemite NP, CA",
        date: "October 21, 2025",
        description: "Nolan and Ali jumping in front of Vernal Falls in Yosemite. We climbed down and swam underneath the falls after this picture."
    },
    {
        title: 'Friend Stack',
        imgSrc: '/static/images/gallery/eaglesNest.jpg',
        isVertical: true,
        camera: "Pentax IQZoom 105G",
        location: "Big Island, HI",
        date: "October 23, 2025",
        description: "River, Kanoa, and Dante stacking it up at Eagles Nest"
    },
    {
        title: 'The Cracks',
        imgSrc: '/static/images/gallery/theCracks.jpg',
        isVertical: true,
        camera: "Pentax IQZoom 105G",
        location: "Big Island, HI",
        date: "October 26, 2025",
        description: "A wonderful group of people chilling in the cracks"
    },
    {
        title: '2nd Annual Yosemite Friends Trip',
        imgSrc: '/static/images/gallery/friendsYosemite.jpg',
        isVertical: false,
        camera: "Pentax IQZoom 105G",
        location: "Ahwahnee, CA",
        date: "October 18, 2025",
        description: "Hey, these are all my LA friends on our 2nd annual Yosemite trip"
    },
    {
        title: 'The NutHouse',
        imgSrc: '/static/images/gallery/nuthouse.jpg',
        isVertical: false,
        camera: "Pentax IQZoom 105G",
        location: "Ahwahnee, CA",
        date: "October 19, 2025",
        description: "The NutHouse"
    },
    {
        title: 'Soda Springs Cabin',
        imgSrc: '/static/images/gallery/sodaSprings.jpg',
        isVertical: true,
        camera: "Pentax IQZoom 105G",
        location: "Tuolumne Meadows, Yosemite NP, CA",
        date: "October 20, 2025",
        description: "The log cabin built over the springs at Soda Springs in Yosemite. John Lembert built and stayed in the cabin in the late 1800s. John Muir camped in this area of Tuolumne Meadows before the cabin was built."
    },
    {
        title: 'Fox in the Alabama Hills',
        imgSrc: '/static/images/gallery/foxAlabamaHills.jpg',
        isVertical: false,
        camera: "Pentax IQZoom 105G",
        location: "Alabama Hills, CA",
        date: "October 15, 2025",
        description: "This is my van, Fox, in black & white film in the Alabama Hills"
    },
    {
        title: 'Maple Pass',
        imgSrc: '/static/images/gallery/autumnPass.jpg',
        isVertical: false,
        camera: "Pentax IQZoom 105G",
        location: "Maple Pass, North Cascades NP, WA",
        date: "September 13, 2025",
        description: "What a beautiful hike. This is at the boundary of the hike. Couldn't really go much further beyond here anyways. Stayed a couple hours at this spot to wait for sunset."
    },
    {
        title: 'Mt Rainier in B&W',
        imgSrc: '/static/images/gallery/mtRainier.jpg',
        isVertical: false,
        camera: "Pentax IQZoom 105G",
        location: "Mt Rainier National Park, WA",
        date: "September 15, 2025",
        description: "This was taken from the SW side of Rainier on the paradise trail. Love mountains in black and white, especially with the clouds. The contrast is wonderful."
    },
    {
        title: 'Sophie on Mauna Loa',
        imgSrc: '/static/images/gallery/sophieLoa.jpg',
        isVertical: true,
        camera: "Pentax IQZoom 105G",
        location: "Mauna Loa, Big Island, HI",
        date: "October 24, 2025",
        description: "Taken while shadowing my friend Sophie doing her seabird job. We replaced batteries for cameras at certain nesting spots and reset/rebaited traps with sardines for rats and cats"
    },
    {
        title: 'Bison in the Badlands',
        imgSrc: '/static/images/gallery/badlands.jpg',
        isVertical: false,
        camera: "Sony A7iv",
        location: "Badlands National Park, SD",
        date: "September 10, 2025",
        description: "One of my first photos with my Sony A7iv. He was much closer before I was able to figure out how to actually use the camera, haha"
    },
    {
        title: 'Sleeping Marmot',
        imgSrc: '/static/images/gallery/sleepingMarmot.jpg',
        isVertical: false,
        camera: "Sony A7iv",
        location: "Mt Rainier National Park, WA",
        date: "September 15, 2025",
        description: "This marmot woke up a few moments after this and started screaming/whistling to alert us of a nearby bear"
    },
    {
        title: 'Friendly Black Bear',
        imgSrc: '/static/images/gallery/blackBear.jpg',
        isVertical: false,
        camera: "Sony A7iv",
        location: "Mt Rainier National Park, WA",
        date: "September 15, 2025",
        description: "Didn't even notice this black bear sneaking up until a marmot scream alerted me of his presence"
    },
    {
        title: 'Corona Arch Train Tracks',
        imgSrc: '/static/images/gallery/coronaArchTracks.jpg',
        isVertical: true,
        camera: "Vivitar PS:35",
        location: "Corona Arch Trail, Moab, UT",
        date: "May 12, 2025",
        description: "These are the train tracks you pass at the beginning of the short hike to the Corona Arch"
    },
    {
        title: 'Nervous Chipmunk',
        imgSrc: '/static/images/gallery/nervousChipmunk.jpg',
        isVertical: false,
        camera: "Sony A7iv",
        location: "Mt Rainier National Park, WA",
        date: "September 15, 2025",
        description: "Just a lil nervous guy. Very photogenic though"
    },
    {
        title: 'Oystercatchers',
        imgSrc: '/static/images/gallery/oystercatchers.jpg',
        isVertical: false,
        camera: "Sony A7iv",
        location: "Salt Creek Recreation Area, Olympic Peninsula, WA",
        date: "September 18, 2025",
        description: "Kept stalking closer to these oystercatchers while tide pooling for a good photo. I need a longer lens if I want to get a better shot than this. I had to get pretty close"
    },
    {
        title: 'Haystack Rock',
        imgSrc: '/static/images/gallery/cannonBeach.jpg',
        isVertical: false,
        camera: "Sony A7iv",
        location: "Cannon Beach, OR",
        date: "September 20, 2025",
        description: "The classic and crowded Haystack Rock in Cannon Beach. Took this after finishing a nice early morning surf session with my friend Austin at Indian Beach"
    },
    {
        title: 'Lone Pine Rainbow',
        imgSrc: '/static/images/gallery/lonePineRainbow.jpg',
        isVertical: false,
        camera: "Sony A7iv",
        location: "Lone Pine, CA",
        date: "October 14, 2025",
        description: "Just finished lunch at The Grill and walked outside to this rainbow forming. Chased it down to the east side of town where I was able to get this picture. Never edited it, but its already good enough as it is"
    },
    {
        title: 'Yosemite Falls',
        imgSrc: '/static/images/gallery/yosemiteFalls.jpg',
        isVertical: true,
        camera: "Sony A7iv",
        location: "Yosemite National Park, CA",
        date: "October 18, 2025",
        description: "A good view of the bottom of the upper fall and beginning of the lower fall. Didnt even walk off the path for this photo, as the group was headed to the lodge for lunch and no time to stop"
    },
    {
        title: 'The Squad & Yosemite Falls',
        imgSrc: '/static/images/gallery/groupPicYosemite.jpg',
        isVertical: true,
        camera: "Sony A7iv",
        location: "Yosemite National Park, CA",
        date: "October 18, 2025",
        description: "Originally wanted to take everyone to Vernal Falls, but we ran out of time and found this bridge on the walk back to cars. What a great photo opportunity"
    },
    {
        title: 'Yosemite Valley from Taft Point',
        imgSrc: '/static/images/gallery/yosemiteValley.jpg',
        isVertical: true,
        camera: "Sony A7iv",
        location: "Taft Point, Yosemite National Park, CA",
        date: "October 20, 2025",
        description: "Drove up for the sunset, but my favorite photo was black and white. The way the sun shines through the valley as it sets is unmatched"
    },
    {
        title: 'Halloween & Shrimp Baby Shower Party',
        imgSrc: '/static/images/gallery/halloweenPartyHawaii.jpg',
        isVertical: false,
        camera: "Pentax IQZoom 105G",
        location: "Big Island, HI",
        date: "October 25, 2025",
        description: "The reason for my most recent trip. Sophie and Alex had shrimp and one was pregnant, so it was a combination shrimp baby shower and halloween party. Holly, Brandon, Will, Tim, Kanoa, and River on the couch at the party"
    },
    
    
    
    // more photos...
  ]

  export default photosData