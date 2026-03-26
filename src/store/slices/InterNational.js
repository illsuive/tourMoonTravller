import {createSlice} from '@reduxjs/toolkit';
import inter from '../../resourse/inter.jpeg'

const initialState = {
  items: [
    {
      id: "bali-romantic-paradise",
      title: "Bali Ultimate Honeymoon",
      duration: "6N/7D",
      price: "₹45,500/per person",
      tag: "Best-Seller",
      image: inter,
      description: "Experience the magic of Bali, from the lush jungles of Ubud to the stunning sunset beaches of Seminyak.",
      perks: [
        "Private Pool Villa Stay (2 Nights)",
        "Floating Breakfast & Flower Bath",
        "Romantic Candlelight Dinner on Beach",
        "Private Car with English Speaking Guide"
      ],
      itinerary: [
        { day: "Day 1", desc: "Arrival at Denpasar Airport, meet & greet, and transfer to your Ubud jungle resort." },
        { day: "Day 2", desc: "Ubud Tour: Tegalalang Rice Terrace, Bali Swing, and Sacred Monkey Forest Sanctuary." },
        { day: "Day 3", desc: "Kintamani Volcano tour followed by a visit to the holy Tirta Empul Temple." },
        { day: "Day 4", desc: "Transfer to Seminyak. Check-in to Private Pool Villa and enjoy a sunset at Tanah Lot Temple." },
        { day: "Day 5", desc: "Nusa Penida Island Day Trip: Visit Kelingking Beach, Broken Beach, and Angel’s Billabong." },
        { day: "Day 6", desc: "Leisure day for Balinese Spa and shopping at Seminyak Square. Evening beach dinner." },
        { day: "Day 7", desc: "Breakfast and airport drop-off for your flight back home." }
      ]
    },
    {
      id: "malvia-luxury-escape",
      title: "Maldives Blue Lagoon Stay",
      duration: "4N/5D",
      price: "₹1,15,000/per person",
      tag: "Luxury All-Inclusive",
      image: inter,
      description: "A turquoise dream featuring stay in overwater villas, crystal clear lagoons, and world-class hospitality.",
      perks: [
        "Overwater Villa with Direct Lagoon Access",
        "All-Inclusive Meals & Unlimited Drinks",
        "Complimentary Sunset Cruise",
        "Snorkeling Gear & Guided Reef Tour"
      ],
      itinerary: [
        { day: "Day 1", desc: "Speedboat transfer from Male Airport to your luxury private island resort." },
        { day: "Day 2", desc: "Relax in your water villa. Enjoy non-motorized water sports like kayaking or paddleboarding." },
        { day: "Day 3", desc: "Guided Snorkeling safari to spot Manta Rays and Sea Turtles. Evening Sunset Cruise." },
        { day: "Day 4", desc: "Spa Day: Indulge in a couple's massage followed by a private beach picnic lunch." },
        { day: "Day 5", desc: "Final morning dip in the ocean, breakfast, and departure via speedboat." }
      ]
    },
    {
      id: "thailand-island-hopper",
      title: "Thailand: Islands & City Lights",
      duration: "5N/6D",
      price: "₹38,900/per person",
      tag: "Trending",
      image: inter,
      description: "A perfect blend of Bangkok's vibrant street life and Phuket's pristine Andaman coastline.",
      perks: [
        "Phi Phi Island Speedboat Tour",
        "Bangkok Dinner Cruise",
        "4-Star Luxury Accommodation",
        "Private Inter-city Transfers"
      ],
      itinerary: [
        { day: "Day 1", desc: "Arrival in Phuket. Transfer to hotel and evening at Patong Beach." },
        { day: "Day 2", desc: "Full-day Phi Phi Island tour with snorkeling and Maya Bay sightseeing." },
        { day: "Day 3", desc: "Flight to Bangkok. Check-in and evening Chao Phraya River Dinner Cruise." },
        { day: "Day 4", desc: "Bangkok City Tour: Grand Palace, Wat Pho (Reclining Buddha), and Wat Arun." },
        { day: "Day 5", desc: "Free day for shopping at MBK Center and Siam Paragon. Optional Thai massage." },
        { day: "Day 6", desc: "Leisure breakfast and transfer to BKK Airport for departure." }
      ]
    },
    {
      id: "dubai-desert-glam",
      title: "Dubai Sky-High Adventure",
      duration: "4N/5D",
      price: "₹52,000/per person",
      tag: "Family Favorite",
      image: inter,
      description: "Witness the architectural marvels of Dubai, from the Burj Khalifa to the golden sand dunes.",
      perks: [
        "Burj Khalifa 124th Floor Entry",
        "Premium Desert Safari with BBQ Dinner",
        "Dhow Cruise at Dubai Marina",
        "Aura Skypool Access"
      ],
      itinerary: [
        { day: "Day 1", desc: "Arrival at DXB Airport. Luxury transfer to hotel. Marina Dhow Cruise in the evening." },
        { day: "Day 2", desc: "Modern Dubai Tour: Photo stop at Burj Al Arab, Palm Jumeirah, and Dubai Mall." },
        { day: "Day 3", desc: "Morning at leisure. Afternoon 4x4 Desert Safari with belly dancing and BBQ." },
        { day: "Day 4", desc: "Visit the Museum of the Future and afternoon tea at the Burj Khalifa." },
        { day: "Day 5", desc: "Souk shopping for gold and spices. Transfer to airport for return flight." }
      ]
    }
  ],
  selectedPackage: null
};

const internationalSlice = createSlice({
  name: 'international',
  initialState,
  reducers: {
    setSelectedInternational: (state, action) => {
      state.selectedPackage = action.payload;
    },
    clearSelection: (state) => {
      state.selectedPackage = null;
    }
  }
}); 

export const { setSelectedInternational, clearSelection } = internationalSlice.actions;
export default internationalSlice.reducer;