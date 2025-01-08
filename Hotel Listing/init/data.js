const sampleListing = [
  {
    title: 'Ocean Breeze Villa',
    description: 'Panoramic ocean views with a private pool',
    image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    price: 2500,
    location: 'Anjuna, Goa',
    country: 'India'
  },
  {
    title: 'Mountain Haven',
    description: 'Secluded retreat in the hills',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    price: 1800,
    location: 'Manali, Himachal Pradesh',
    country: 'India'
  },
  {
    title: 'Desert Pearl',
    description: 'Luxurious stay in the heart of the desert',
    image: 'https://plus.unsplash.com/premium_photo-1667870036406-631ee715b494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwYW5kJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
    price: 2000,
    location: 'Jaisalmer, Rajasthan',
    country: 'India'
  },
  {
    title: 'Lakeside Bliss',
    description: 'Serene villa by the lake',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 2200,
    location: 'Udaipur, Rajasthan',
    country: 'India'
  },
  {
    title: 'Forest Retreat',
    description: 'A cozy escape amidst lush greenery',
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    price: 1500,
    location: 'Wayanad, Kerala',
    country: 'India'
  },
  {
    title: 'Hilltop Paradise',
    description: 'Modern villa with breathtaking valley views',
    image: 'https://images.unsplash.com/photo-1437751695201-298be97a82a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 2700,
    location: 'Munnar, Kerala',
    country: 'India'
  },
  {
    title: 'City Skyline Villa',
    description: 'Contemporary villa with urban views',
    image: 'https://images.unsplash.com/photo-1514053026555-49ce8886ae41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 3000,
    location: 'Mumbai, Maharashtra',
    country: 'India'
  },
  {
    title: 'Island Escape',
    description: 'Relaxing villa surrounded by azure waters',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    price: 3200,
    location: 'Havelock Island, Andaman and Nicobar',
    country: 'India'
  },
  {
    title: 'Countryside Charm',
    description: 'A peaceful getaway in the countryside',
    image: 'https://images.unsplash.com/photo-1434434319959-1f886517e1fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 1400,
    location: 'Alleppey, Kerala',
    country: 'India'
  },
  {
    title: 'Royal Heritage Villa',
    description: 'Stay like royalty in a heritage palace',
    image: 'https://plus.unsplash.com/premium_photo-1678297270837-990c65fd1b64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 4000,
    location: 'Jaipur, Rajasthan',
    country: 'India'
  },
  {
    title: 'Cliffside Sanctuary',
    description: 'Overlooking the cliffs and the ocean',
    image: 'https://images.unsplash.com/photo-1631857454437-985ffa9d2c43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 2800,
    location: 'Varkala, Kerala',
    country: 'India'
  },
  {
    title: 'Modern Beachfront Villa',
    description: 'Steps away from the sandy shores',
    image: 'https://images.unsplash.com/photo-1483190656465-2c49e54d29f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 2600,
    location: 'Calangute, Goa',
    country: 'India'
  },
  {
    title: 'Jungle Retreat',
    description: 'Hidden gem in the jungle',
    image: 'https://images.unsplash.com/photo-1448737933984-6d0ae61b2b57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 1600,
    location: 'Kabini, Karnataka',
    country: 'India'
  },
  {
    title: 'Tea Garden Bungalow',
    description: 'Nestled amidst sprawling tea estates',
    image: 'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 2000,
    location: 'Darjeeling, West Bengal',
    country: 'India'
  },
  {
    title: 'Sunset Paradise',
    description: 'Unwind with breathtaking sunsets',
    image: 'https://plus.unsplash.com/premium_photo-1726610747137-b1b28dee5b4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 2800,
    location: 'Rishikesh, Uttarakhand',
    country: 'India'
  },
  {
    title: 'Seaside Serenity',
    description: 'Calm and relaxing villa near the sea',
    image: 'https://images.unsplash.com/photo-1618466813439-cbb037f72b4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 2500,
    location: 'Pondicherry, Tamil Nadu',
    country: 'India'
  },
  {
    title: 'Riverfront Delight',
    description: 'Charming villa along the river',
    image: 'https://plus.unsplash.com/premium_photo-1661962288202-9f04aed88875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 1700,
    location: 'Rishikesh, Uttarakhand',
    country: 'India'
  },
  {
    title: 'Royal Desert Camp',
    description: 'A luxurious camp experience in the dunes',
    image: 'https://images.unsplash.com/photo-1641555127702-e9ffa206c15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 2400,
    location: 'Jaisalmer, Rajasthan',
    country: 'India'
  },
  {
    title: 'Rustic Farmhouse',
    description: 'A quaint and charming farmhouse',
    image: 'https://images.unsplash.com/photo-1515075507420-d451cea9d688?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG5hdHVyZSUyMGFuZCUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
    price: 2000,
    location: 'Ranchi, Jharkhand',
    country: 'India'
  }
 
];

module.exports = { data: sampleListing };
