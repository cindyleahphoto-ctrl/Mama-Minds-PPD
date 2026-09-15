/* ═══════════════════════════════════════════
   Mama Minds — Public Hospital Directory
   A small, best-effort list of major South African public hospitals,
   used on-device to suggest the nearest one from the phone's GPS —
   nothing here is sent anywhere, and nothing here is fetched live.

   This list is NOT exhaustive and NOT guaranteed current — hospital
   names, locations, and (especially) phone numbers change over time.
   Coordinates are city/site-level, not verified to street precision.
   Always treat the result as a starting point to confirm, not a
   verified emergency contact on its own.
   ═══════════════════════════════════════════ */

export const PUBLIC_HOSPITALS = [
  { name: 'Chris Hani Baragwanath Academic Hospital', city: 'Soweto, Gauteng', lat: -26.2485, lng: 27.9389 },
  { name: 'Charlotte Maxeke Johannesburg Academic Hospital', city: 'Johannesburg, Gauteng', lat: -26.1875, lng: 28.0403 },
  { name: 'Steve Biko Academic Hospital', city: 'Pretoria, Gauteng', lat: -25.7375, lng: 28.1875 },
  { name: 'Dr George Mukhari Academic Hospital', city: 'Ga-Rankuwa, Gauteng', lat: -25.6136, lng: 28.0089 },
  { name: 'Groote Schuur Hospital', city: 'Cape Town, Western Cape', lat: -33.9425, lng: 18.4642 },
  { name: 'Tygerberg Hospital', city: 'Cape Town, Western Cape', lat: -33.9086, lng: 18.6119 },
  { name: 'George Provincial Hospital', city: 'George, Western Cape', lat: -33.9628, lng: 22.4619 },
  { name: 'Livingstone Hospital', city: 'Gqeberha, Eastern Cape', lat: -33.9167, lng: 25.5850 },
  { name: 'Frere Hospital', city: 'East London, Eastern Cape', lat: -32.9833, lng: 27.8833 },
  { name: "Grey's Hospital", city: 'Pietermaritzburg, KwaZulu-Natal', lat: -29.6006, lng: 30.3794 },
  { name: 'Inkosi Albert Luthuli Central Hospital', city: 'Durban, KwaZulu-Natal', lat: -29.8333, lng: 30.9333 },
  { name: 'King Edward VIII Hospital', city: 'Durban, KwaZulu-Natal', lat: -29.8611, lng: 30.9958 },
  { name: 'Universitas Academic Hospital', city: 'Bloemfontein, Free State', lat: -29.1183, lng: 26.2011 },
  { name: 'Kimberley Hospital', city: 'Kimberley, Northern Cape', lat: -28.7333, lng: 24.7500 },
  { name: 'Rob Ferreira Hospital', city: 'Mbombela, Mpumalanga', lat: -25.4667, lng: 30.9833 },
  { name: 'Mankweng Hospital', city: 'Polokwane, Limpopo', lat: -23.8833, lng: 29.7333 },
  { name: 'Mahikeng Provincial Hospital', city: 'Mahikeng, North West', lat: -25.8500, lng: 25.6333 },
];
