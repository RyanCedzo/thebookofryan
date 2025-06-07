export interface TravelLocation {
    title: string
    description: string
    date: string
    lat: number
    lng: number
    slug: string
    imgSrc?: string
    isCurrent?: boolean
    type: 'City' | 'National Park' | 'State Park' | 'Other'
  }
  
const travelData: TravelLocation[] = [
    {
        title: 'Banff National Park',
        description: 'I don\'t know why I was so terrified of being eaten by a bear. Naked cold dunk in Peyto Lake hit different',
        date: 'July 2023',
        lat: 51.1784,
        lng: -115.5708,
        slug: 'banff-alberta',
        imgSrc: '/static/images/travel/banff.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Los Angeles, CA',
        description: 'Home Base from January 2023 - May 2025',
        date: 'Now',
        lat: 34.052235,
        lng: -118.243683,
        slug: 'los-angeles',
        imgSrc: '/static/images/travel/los-angeles.jpg',
        isCurrent: true,
        type: "City"
    },
    {
        title: 'White Sands National Park',
        description: 'Spent a week working from Alamogordo and exploring White Sands in the evenings. Wonderful sunsets.',
        date: 'December 2024',
        lat: 32.780361,
        lng: -106.171448,
        slug: 'white-sands',
        imgSrc: '/static/images/travel/white-sands.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Big Bend National Park',
        description: 'Hiked up the Rio Grande and made a pit stop on the Mexico side to explore a giant cave',
        date: 'December 2024',
        lat: 29.127487,
        lng: -103.242538,
        slug: 'big-bend',
        imgSrc: '/static/images/travel/big-bend.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Carlsbad Caverns National Park',
        description: 'A national park like no other',
        date: 'December 2024',
        lat: 32.723801,
        lng: -104.089119,
        slug: 'carlsbad-caverns',
        imgSrc: '/static/images/travel/carlsbad-caverns.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Death Valley National Park',
        description: 'Hiked to a plane crash from the 1950s among other wonderful explorations',
        date: 'November 2023,\n December 2024',
        lat: 36.532265,
        lng: -116.932541,
        slug: 'death-valley',
        imgSrc: '/static/images/travel/death-valley.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Guadalupe Mountains National Park',
        description: 'Honestly one of the lower ranked national parks in my book',
        date: 'December 2024',
        lat: 31.9235,
        lng: -104.8529,
        slug: 'guadalupe-mountains',
        imgSrc: '/static/images/travel/guadalupe-mountains.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Lake Havasu City',
        description: 'Celebrated Christmas with nomad group for A Very Havasu Christmas',
        date: 'December 2024',
        lat: 34.483696,
        lng: -114.325638,
        slug: 'lake-havasu',
        imgSrc: '/static/images/travel/lake-havasu.jpg',
        isCurrent: false,
        type: "City"
    },
    {
        title: 'Zion National Park',
        description: 'Hiked The Narrows in the dead of winter, saw dinosaur tracks and did a cold dunk at The Subway, and plenty of other beautiful hikes',
        date: 'February 2023\nDecember 2024',
        lat: 37.297817,
        lng: -113.028770,
        slug: 'zion',
        imgSrc: '/static/images/travel/zion.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Roswell, New Mexico',
        description: 'Didn\'t get abducted?',
        date: 'December 2024',
        lat: 33.393131,
        lng: -104.522758,
        slug: 'roswell',
        imgSrc: '/static/images/travel/roswell.jpg',
        isCurrent: false,
        type: "City"
    },
    {
        title: 'Grand Canyon National Park',
        description: 'Backpacked the Tanner Trail',
        date: 'June 2024\nNovember 2024',
        lat: 36.056595,
        lng: -112.125092,
        slug: 'grand-canyon',
        imgSrc: '/static/images/travel/grand-canyon.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Pinnacles National Park',
        description: 'Saw two California Condors',
        date: 'August 2024',
        lat: 36.491508,
        lng: -121.197243,
        slug: 'pinnacles',
        imgSrc: '/static/images/travel/pinnacles.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Redwoods National Park',
        description: 'The State Park is honestly a lot better than the National Park',
        date: 'September 2024',
        lat: 41.213181,
        lng: -124.004631,
        slug: 'redwoods',
        imgSrc: '/static/images/travel/redwoods.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Prairie Creek Redwoods State Park',
        description: 'The State Park is honestly a lot better than the National Park',
        date: 'September 2024',
        lat: 41.40383,
        lng: -124.03844,
        slug: 'redwoods-state',
        imgSrc: '/static/images/travel/redwoods-state.jpg',
        isCurrent: false,
        type: "State Park"
    },
    {
        title: 'Portland, OR',
        description: 'Stayed with my good friend Julian and cold dunked in a waterfall',
        date: 'September 2024',
        lat: 45.523064,
        lng: -122.676483,
        slug: 'portland',
        imgSrc: '/static/images/travel/portland.jpg',
        isCurrent: false,
        type: "City"
    },
    {
        title: 'Mt Rainier National Park',
        description: 'Beautiful park and spent some time hiking with a curious American Marten',
        date: 'September 2024',
        lat: 46.879967,
        lng: -121.726906,
        slug: 'rainier',
        imgSrc: '/static/images/travel/rainier.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Olympic National Park',
        description: 'My favorite national parl :)',
        date: 'February 2023\nSeptember 2024',
        lat: 47.80392754,
        lng: -123.6663848,
        slug: 'olympic',
        imgSrc: '/static/images/travel/olympic.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Horseshoe Bend',
        description: 'So overcrowded and honestly would never go back',
        date: 'November 2024',
        lat: 36.879047,
        lng: -111.510498,
        slug: 'horseshoe-bend',
        imgSrc: '/static/images/travel/horseshoe-bend.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Buckskin Gulch',
        description: 'Some cool petroglyphs and slot canyon',
        date: 'December 2024',
        lat: 37.001667,
        lng: -111.866111,
        slug: 'buckskin-gulch',
        imgSrc: '/static/images/travel/buckskin-gulch.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Grafton Ghost Town',
        description: 'Cool ghost town with a few well preserved houses',
        date: 'December 2024',
        lat: 37.167222,
        lng: -113.08,
        slug: 'grafton',
        imgSrc: '/static/images/travel/grafton.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Sedona, AZ',
        description: 'So many hiking and exploring opportunities',
        date: 'December 2024',
        lat: 34.871002,
        lng: -111.760826,
        slug: 'sedona',
        imgSrc: '/static/images/travel/sedona.jpg',
        isCurrent: false,
        type: "City"
    },
    {
        title: 'Bisbee, AZ',
        description: 'Wonderful quirky town with plenty of antique and knick-knack shops',
        date: 'December 2024',
        lat: 31.448114,
        lng: -109.928734,
        slug: 'bisbee',
        imgSrc: '/static/images/travel/bisbee.jpg',
        isCurrent: false,
        type: "City"
    },
    {
        title: 'Saguaro National Park',
        description: 'Almost stepped on a rattlesnake',
        date: 'December 2024',
        lat: 32.296738,
        lng: -111.166618,
        slug: 'saguaro',
        imgSrc: '/static/images/travel/saguaro.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Las Vegas, NV',
        description: 'I hate this city sorry',
        date: 'Too many times to count',
        lat: 36,
        lng: -115,
        slug: 'vegas',
        imgSrc: '/static/images/travel/vegas.jpg',
        isCurrent: false,
        type: "City"
    },
    {
        title: 'Valley of Fire State Park',
        description: 'One of the top State Parks per popular opinion',
        date: 'February 2023\nDecember 2024',
        lat: 36.4815,
        lng: -114.5344,
        slug: 'valley-of-fire',
        imgSrc: '/static/images/travel/valley-of-fire.jpg',
        isCurrent: false,
        type: "State Park"
    },
    {
        title: 'Sequoia National Park',
        description: 'One of the top State Parks per popular opinion',
        date: 'June 2024\nJuly 2024',
        lat: 36.486366,
        lng: -118.565750,
        slug: 'sequoia',
        imgSrc: '/static/images/travel/sequoia.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Puerto Escondido',
        description: 'One of the top State Parks per popular opinion',
        date: 'August 2024',
        lat: 15.861944,
        lng: -97.067222,
        slug: 'puerto-escondido',
        imgSrc: '/static/images/travel/puerto-escondido.jpg',
        isCurrent: false,
        type: "City"
    },
    {
        title: 'Hierve El Agua',
        description: 'Some cool pools to chill at the end with smelly water',
        date: 'August 2024',
        lat: 16.865519,
        lng: -96.276004,
        slug: 'hierve-el-agua',
        imgSrc: '/static/images/travel/hierve-el-agua.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'San Pablo Villa de Mitla',
        description: 'Interesting ruins and I think the cause of my food poisoning',
        date: 'August 2024',
        lat: 16.916667,
        lng: -96.4,
        slug: 'mitla',
        imgSrc: '/static/images/travel/mitla.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'El Centro de Oaxaca de Juárez',
        description: 'Wonderful place to get food poisoning and puke in the hostel bathroom all night',
        date: 'August 2024',
        lat: 17.06542,
        lng: -96.72365,
        slug: 'centro-oaxaca',
        imgSrc: '/static/images/travel/centro-oaxaca.jpg',
        isCurrent: false,
        type: "City"
    },
    {
        title: 'San Onofre',
        description: 'Great chill waves and camping on the bluffs makes for a good morning surf',
        date: 'August 2024',
        lat: 33.379167,
        lng: -117.5725,
        slug: 'san-onofre',
        imgSrc: '/static/images/travel/san-onofre.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Yosemite National Park',
        description: 'Always a wonderful time and so much to explore',
        date: 'October 2023\nMay 2024\nJune 2024\nFebruary 2025\nApril 2025',
        lat: 37.865101,
        lng: -119.538330,
        slug: 'yosemite',
        imgSrc: '/static/images/travel/yosemite.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Mt Galbraith',
        description: 'Hiked with my friend Kasra while visiting',
        date: 'September 2023',
        lat: 39.76448,
        lng: -105.25536,
        slug: 'galbraith',
        imgSrc: '/static/images/travel/galbraith.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Garden of the Gods',
        description: 'Beautiful spot for a sunset',
        date: 'September 2023',
        lat: 38.878445,
        lng: -104.869789,
        slug: 'garden-of-the-gods',
        imgSrc: '/static/images/travel/garden-of-the-gods.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Mt Yale',
        description: 'Started hike at 3AM to reach summit at sunrise',
        date: 'September 2023',
        lat: 38.844207,
        lng: -106.313805,
        slug: 'mt-yale',
        imgSrc: '/static/images/travel/mt-yale.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Canyonlands National Park',
        description: 'Need to do more hiking here',
        date: 'September 2023',
        lat: 38.24555783,
        lng: -109.8801624,
        slug: 'canyonlands',
        imgSrc: '/static/images/travel/canyonlands.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Arches National Park',
        description: 'Need to do more hiking here',
        date: 'September 2023',
        lat: 38.72261844,
        lng: -109.5863666,
        slug: 'arches',
        imgSrc: '/static/images/travel/arches.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Lone Pine Lake',
        description: 'First few miles towards Mt Whitney summit. I\'ll do that soon',
        date: 'November 2023',
        lat: 36.606045,
        lng: -118.062866,
        slug: 'lone-pine-lake',
        imgSrc: '/static/images/travel/lone-pine-lake.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Alabama Hills',
        description: 'Great place to camp out and chill',
        date: 'November 2023',
        lat: 36.5677117,
        lng: -118.0898097,
        slug: 'alabama-hills',
        imgSrc: '/static/images/travel/alabama-hills.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Channel Islands National Park (Santa Cruz)',
        description: 'Some wonderful wildife only seen here plus dolphins on the ferry ride',
        date: 'November 2023',
        lat: 34.0022,
        lng: -119.7225,
        slug: 'channel-islands',
        imgSrc: '/static/images/travel/channel-islands.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Anza-Borrego Desert State Park',
        description: 'Spent Thanksgiving alone here',
        date: 'November 2023',
        lat: 33.101543,
        lng: -116.301476,
        slug: 'anza-borrego',
        imgSrc: '/static/images/travel/anza-borrego.jpg',
        isCurrent: false,
        type: "State Park"
    },
    {
        title: 'Petrified Forest National Park',
        description: 'Could almost just be a state park. Very unique though',
        date: 'November 2023',
        lat: 34.909988,
        lng: -109.806793,
        slug: 'petrified-forest',
        imgSrc: '/static/images/travel/petrified-forest.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Bryce Canyon National Park',
        description: 'Was walking in snow up to my waist',
        date: 'February 2024',
        lat: 37.593048,
        lng: -112.187332,
        slug: 'bryce',
        imgSrc: '/static/images/travel/bryce.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Capitol Reef National Park',
        description: 'With all the other incredible Utah national parks, I would be fine with this being a state park',
        date: 'June 2024',
        lat: 38.089600,
        lng: -111.149910,
        slug: 'capitol-reef',
        imgSrc: '/static/images/travel/capitol-reef.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Goblin Valley State Park',
        description: 'They actually look like goblins. Well named park',
        date: 'June 2024',
        lat: 38.56667,
        lng: -110.71,
        slug: 'goblin-valley',
        imgSrc: '/static/images/travel/goblin-valley.jpg',
        isCurrent: false,
        type: "State Park"
    },
    {
        title: 'Hollow Mountain Gas Station',
        description: 'Only gas station in a mountain?',
        date: 'June 2024',
        lat: 38.373659,
        lng: -110.704747,
        slug: 'hollow-mountain',
        imgSrc: '/static/images/travel/hollow-mountain.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Sacramento, CA',
        description: 'A lot more trees for a city than I was expecting. Stayed with my good friend Michael',
        date: 'September 2024',
        lat: 38.575764,
        lng: -121.478851,
        slug: 'sacramento',
        imgSrc: '/static/images/travel/sacramento.jpg',
        isCurrent: false,
        type: "City"
    },
    {
        title: 'Joshua Tree National Park',
        description: 'Plenty of rocks to climb',
        date: 'June 2021\nMarch 2023',
        lat: 33.881866,
        lng: -115.900650,
        slug: 'joshua-tree',
        imgSrc: '/static/images/travel/joshua-tree.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'San Francisco, CA',
        description: 'There\'s a bridge',
        date: 'June 2021',
        lat: 37.773972,
        lng: -122.431297,
        slug: 'san-francisco',
        imgSrc: '/static/images/travel/san-francisco.jpg',
        isCurrent: false,
        type: "City"
    },
    {
        title: 'Indian Beach',
        description: 'Located in the cool town of Cannon Beach, OR. Last scene from Point Break filmed here',
        date: 'July 2021',
        lat: 45.9278849,
        lng: -123.9776394,
        slug: 'indian-beach',
        imgSrc: '/static/images/travel/indian-beach.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'McConaughy Lake',
        description: 'A lake? In Nebraska?',
        date: 'June 2021',
        lat: 41.225,
        lng: -101.716667,
        slug: 'mcconaughy-lake',
        imgSrc: '/static/images/travel/mcconaughy-lake.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Blue Lakes, CO',
        description: 'Lots of places called Blue Lakes. This one is next to Quandrary Peak 14er',
        date: 'June 2021',
        lat: 39.3875110,
        lng: -106.0887641,
        slug: 'blue-lake',
        imgSrc: '/static/images/travel/blue-lake.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Great Sand Dunes National Park',
        description: 'Fun sandboarding. One of my very first adult national parks. Wonderful moment',
        date: 'June 2021',
        lat: 37.7329,
        lng: -105.5121,
        slug: 'great-sand-dunes',
        imgSrc: '/static/images/travel/great-sand-dunes.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Muir Woods National Monument',
        description: 'Nice little walk through the trees. Taken here by my good friend Jez',
        date: 'June 2021',
        lat: 37.896980,
        lng: -122.581711,
        slug: 'muir-woods',
        imgSrc: '/static/images/travel/muir-woods.jpg',
        isCurrent: false,
        type: "Other"
    },
    {
        title: 'Glacier National Park',
        description: 'Didn\'t spend enough time here. Need to go back and spend at least a long week or two',
        date: 'July 2021',
        lat: 48.755,
        lng: -113.8,
        slug: 'glacier',
        imgSrc: '/static/images/travel/glacier.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Yellowstone National Park',
        description: 'Camped in the park. Could go for an extended trip to explore some of ther lesser known spots',
        date: 'July 2021',
        lat: 44.423691,
        lng: -110.588516,
        slug: 'yellowstone',
        imgSrc: '/static/images/travel/yellowstone.jpg',
        isCurrent: false,
        type: "National Park"
    },
    {
        title: 'Crater Lake National Park',
        description: 'Phone broke right before this so this is my only picture',
        date: 'July 2021',
        lat: 42.944611,
        lng: -122.109245,
        slug: 'crater-lake',
        imgSrc: '/static/images/travel/creater-lake.jpg',
        isCurrent: false,
        type: "National Park"
    },
]

export default travelData