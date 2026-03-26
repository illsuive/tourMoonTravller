import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: "Govinda-spiritual-immersion",
      title: "Divine Radha-Krishna",
      duration: "3N/4D",
      price: "₹6,499/per person",
      tag: "Holy City Special",
      image: "https://images.unsplash.com/photo-1726266140487-39c194e3af48?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Walk the ancient lanes of the world's oldest living city. Experience the soul-stirring Ganga Aarti and sacred temples.",
      perks: [
        "2n stay in 3star hptel",
        "full sightseeing by private car",
        "pickup/drop mathura railwy/bus satnd",
        "Pure Veg Meal Plan(breakfast and dinner)"
      ],
      itinerary: [
        { 
          day: "Day 1 => Arrival than Mathura & Gokul sightseeing.", 
          desc: `*Mathura sightseeing*
    • Shri Krishna Janmabhoomi Temple
    • Dwarkadhish Temple
    • Vishram Ghat
*Gokul*
   • Chinta Haran Ghat
   • Gokul Temple
   • Raman Reti 
   • Chaurasi kahmba ` 
        },
        { 
          day: "Day 2 => Vrindavan sightseeing", 
          desc: `Vrindavan sightseeing - 

* Banke Bihari Temple
* ISKCON Temple
* Nidhivan 
* Radha Raman 
* Radha Vallabh 
* Char dham 
* Vaishnudevi mandir 
* Prem Mandir (Light Show)` 
        },
        { 
          day: "Day 3 => Goverdhan - barasana - departure", 
          desc: `*Goverdhan*
  • goverdhan temple
  • kusum sarovar 
  • Radha kund
*Barsana* • Shri Radha Rani Temple (Ladli Ji)
   • Barsana Hills Viewpoint
   • Optional: Nandgaon – Nand Bhawan
* Departure 
* Drive to mathura  railway station / Bus stand 
* Tour Ends with Divine Blessings` 
        }
      ]
    },
    {
      id: "Dordham-yatra-express",
      title: "Do Dham Yatr",
      duration: "9N/10D",
      price: "₹17,999/per person",
      tag: "Himalayan Pilgrimage",
      image: "https://images.unsplash.com/photo-1657215753692-408aca0b2934?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A spiritually charged journey to Kedarnath and Badrinath, the holiest shrines in the Garhwal Himalayas.",
      perks: [
        "Kedarnath-Badrinath",
        "Delhi to Delhi",
        "All basic sightseeing with chardham sector",
        "breakfast and dinner"
      ],
      itinerary: [
        { day: "Day 0 => ", desc: "DEPARTURE FROM DELHI." },
        { day: "Day 1 => ", desc: "ARRIVAL IN GUPTKASHI/PHATA." },
        { day: "Day 2 => ", desc: "TREK TO KEDARNATH JI." },
        { day: "Day 3 => ", desc: "KEDARNATH JI DARSHAN." },
        { day: "Day 4 => ", desc: "GUPTKASHI TO JOSHIMATH." },
        { day: "Day 5 => ", desc: "BADRINATH DARSHAN." },
        { day: "Day 6 => ", desc: "RISHIKESH SIGHTSEEING." }
      ]
    },
    {
      id: "chardham-yatra-express",
      title: "Char Dham Yatra",
      duration: "9N/10D",
      price: "₹31,999/per person",
      tag: "Himalayan Pilgrimage",
      image: "https://images.unsplash.com/photo-1657215753692-408aca0b2934?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A spiritually charged journey to Kedarnath and Badrinath, the holiest shrines in the Garhwal Himalayas.",
      perks: [
        "Yamunotri-Gangotri-Kedarnath-Badrinath",
        "Delhi to Delhi",
        "All basic sightseeing with chardham sector",
        "breakfast and dinner"
      ],
      itinerary: [
        { day: "Day 1 => Delhi to Barkot", desc: "Pickup from the Delhi / Gwalior/Haridwar railway station and Drive to Barkot via visit Kempty Fall, outer Mussoorie and after that drive straight to Barkot on arrival check in to the hotel, after refreshment having dinner and overnight stay in Barkot." },
        { day: "Day 2 => BARKOT-YAMUNOTRI", desc: "Barkot-Jankichatti-(50 km/01 hr)-Yamunotri (06 km Trek)-Back to Barkot same route. Morning after breakfast drive to Jankichatti by road and from Jankichatti start 6 km of trek for Yamunotri Temple (can use also Potter, Poni, Ghori for the trek at own cost) after visit Yamunotri temple back to Jankichatti by trek and after that back to hotel by drive, taking dinner, overnight stay in Barkot" },
        { day: "Day 3 => BARKOT TO UTTARKASHI ", desc: "Barkot-Uttarkashi (100kms/4hr) Morning after breakfast checkout from the hotel and Drive to Uttarkashi. Visit Vishwanath Temple & Others. Later Check in Hotel. Rest day at leisure. Night stay in Uttarkashi. Uttarkashi: Situated at the bank of river Bhagirathi. The temple of Lord Vishwanath is located here where a massive iron trident is erected." },
        { day: "Day 4 => UTTARKASHI- GANGOTRI", desc: "Uttarkashi-Harsil -Gangotri (100kms/3-4 each side) Back to Uttarkashi. Morning after breakfast we proceed to Gangotri (3048 mts), enroute we enjoy picturesque Harsil village, Bhagirathi River and the most magnificent view of the Himalayas. After Gangotri Darshan we return to Uttarkashi. Overnight stay at Uttarkashi." },
        { day: "Day 5 => UTTARKASHI-GUPTAKASHI", desc: "Uttarkashi-Guptkashi (218 kms/7-8hr) Morning after breakfast checkout from the hotel and drive to straight to Guptkashi. On arrival check in hotel, night halt" },
        { day: "Day 6 => GUPTAKASHI-KEDARNATH", desc: "Guptkashi-Sonprayag (30kms by road)-Gaurikund- Kedarnath (14 km by Trek one side) Morning after breakfast checkout from the hotel and drive to Sonprayag from Sonprayag drive to Gauri Kund by local transport at own cost, on arrival Gauri Kund, Trek starts from Gauri Kund to Kedarnath (14 Km) (can also use Poni, Ghori, doli for trek by own cost). Reaching in Kedarnath premises, check in to the hotel and overnight stay in hotel." },
        { day: "Day 7 => KEDARNATH-GUPTAKASHI", desc: "Kedarnath-Guptkashi (By Same route) Early morning visit to Kedarnath Temple and check out from the hotel and back to Sonprayag via Gaurikund by trek and from Sonprayag drive to Guptkashi by cab, back to hotel and overnight stay in Guptkash" },
        { day: "Day 8 => GUPTAKASHI-BADRINATH", desc: "Guptkashi-Joshimath-Pandukeshwar/Govindghat - Badrinath (218 kms/7-8hr) Morning Breakfast check out from the hotel and drive to Badrinath via Joshimath and visit Narsingh Dev Temple after that back to Badrinath on arrival check in to the hotel after refreshment visit Badrivishal and dinner overnight stay in Badrinath." },
        { day: "Day 9 => BADRINATH-RUDRAPRAYAG", desc: "Badrinath-Panchprayag-Rudraprayag (155 km/5-6 hr) Early morning, pilgrims after having a bath in the Tapt Kund have the Darshan of Badrivishal. Brahamakapal is significant for Pinddan Shraddh of ancestors (Pitrus). Later after breakfast checkout from the hotel and drive back to Srinagar via visit Panchprayag on arrival Srinagar Check in to the Hotel dinner overnight stay in Srinagar" },
        { day: "Day 10 => RUDRAPRYAG-DELHI", desc: "Rudraprayag-Rishikesh-Haridwar/Rishikesh/ Dehradun (130km/3-4 hr) Morning Breakfast checkout from the hotel and drive to Haridwar enroute visit Rishikesh Sight Seeing covering with Ram Jhula, Lakshman Jhula, Parmarth Niketan and back to Haridwar attain Ganga Aarti and drop in Haridwar/Rishikesh Railway Station.." }
      ]
    }
  ],
  selectedPackage: null 
};

const spiritualSlice = createSlice({
  name: 'spiritual',
  initialState,
  reducers: {
    setSelectedSpiritual: (state, action) => {
      state.selectedPackage = action.payload;
    },
    clearSelection: (state) => {
      state.selectedPackage = null;
    }
  }
});

export const { setSelectedSpiritual, clearSelection } = spiritualSlice.actions;
export default spiritualSlice.reducer;