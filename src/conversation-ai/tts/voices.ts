import { VoiceOption } from './tts.classes';

export const GoogleVoiceHQOptions: VoiceOption[] = [
  // French
  { provider: 'google', name: 'Man fr-FR-Studio-D', id: 'fr-FR-Studio-D', gender: 'male', lang: 'fr-FR' },
  { provider: 'google', name: 'Woman fr-FR-Studio-A', id: 'fr-FR-Studio-A', gender: 'female', lang: 'fr-FR' },
  // Italian
  { provider: 'google', name: 'Woman it-IT-Neural2-A', id: 'it-IT-Neural2-A', gender: 'female', lang: 'it-IT' },
  { provider: 'google', name: 'Man it-IT-Neural2-C', id: 'it-IT-Neural2-C', gender: 'male', lang: 'it-IT' },
  // Portuguese
  { provider: 'google', name: 'Woman pt-BR-Neural2-C', id: 'pt-BR-Neural2-C', gender: 'female', lang: 'pt-BR' },
  { provider: 'google', name: 'Man pt-BR-Neural2-B', id: 'pt-BR-Neural2-B', gender: 'male', lang: 'pt-BR' },
  // Spanish
  { provider: 'google', name: 'Man es-US-Studio-B', id: 'es-US-Studio-B', gender: 'male', lang: 'es-US' },
  { provider: 'google', name: 'Woman es-US-Neural2-A', id: 'es-US-Neural2-A', gender: 'male', lang: 'es-US' },
  // English
  {
    provider: 'google',
    name: 'Woman Studio O',
    id: 'en-US-Studio-O',
    gender: 'female',
    lang: 'en-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_Studio-O.mp3',
  },
  {
    provider: 'google',
    name: 'Man Studio Q',
    id: 'en-US-Studio-Q',
    gender: 'male',
    lang: 'en-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_Studio-Q.mp3',
  },
];

export const voices: VoiceOption[] = [
  // French
  {
    provider: 'google',
    name: '👨‍🦰 Man ♂️ 🇫🇷 fr-FR-Neural2-B',
    id: 'fr-FR-Neural2-B',
    gender: 'male',
    lang: 'fr-FR',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_fr-FR-Neural2-B.mp3',
  },
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇫🇷 fr-FR-Neural2-E',
    id: 'fr-FR-Neural2-E',
    gender: 'female',
    lang: 'fr-FR',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_fr-FR-Neural2-E.mp3',
  },
  // Italian
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇮🇹 it-IT-Neural2-A',
    id: 'it-IT-Neural2-A',
    gender: 'female',
    lang: 'it-IT',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_it-IT-Neural2-A.mp3',
  },
  {
    provider: 'google',
    name: '👨‍🦰 Man ♂️  🇮🇹 it-IT-Neural2-C',
    id: 'it-IT-Neural2-C',
    gender: 'male',
    lang: 'it-IT',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_it-IT-Neural2-C.mp3',
  },
  // Portuguese
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇧🇷 pt-BR-Neural2-C',
    id: 'pt-BR-Neural2-C',
    gender: 'female',
    lang: 'pt-BR',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_pt-BR-Neural2-C.mp3',
  },
  {
    provider: 'google',
    name: '👨‍🦰 Man ♂️ 🇧🇷 pt-BR-Neural2-B',
    id: 'pt-BR-Neural2-B',
    gender: 'male',
    lang: 'pt-BR',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_pt-BR-Neural2-B.mp3',
  },
  // Spanish
  {
    provider: 'google',
    name: '👨‍🦰 Man 🇲🇽 es-US-Neural2-B',
    id: 'es-US-Neural2-B',
    gender: 'male',
    lang: 'es-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_es-US-Neural2-B.mp3',
  },
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇲🇽 es-US-Neural2-A',
    id: 'es-US-Neural2-A',
    gender: 'female',
    lang: 'es-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_es-US-Neural2-A.mp3',
  },
  {
    provider: 'google',
    name: '👨‍🦰 Man ♂️ 🇲🇽 es-US-Neural2-C',
    id: 'es-US-Neural2-C',
    gender: 'male',
    lang: 'es-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_es-US-Neural2-C.mp3',
  },
  {
    provider: 'google',
    name: '👨‍🦰 Man ♂️ 🇪🇸 es-ES-Neural2-B',
    id: 'es-ES-Neural2-B',
    gender: 'male',
    lang: 'es-ES',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_es-ES-Neural2-B.mp3',
  },
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇪🇸 es-ES-Neural2-C',
    id: 'es-ES-Neural2-C',
    gender: 'female',
    lang: 'es-ES',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_es-ES-Neural2-C.mp3',
  },
  {
    provider: 'google',
    name: '👨‍🦰 Man ♂️ 🇪🇸 es-ES-Neural2-F',
    id: 'es-ES-Neural2-F',
    gender: 'male',
    lang: 'es-ES',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_es-ES-Neural2-F.mp3',
  },
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇪🇸 es-ES-Neural2-E',
    id: 'es-ES-Neural2-E',
    gender: 'female',
    lang: 'es-ES',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_es-ES-Neural2-E.mp3',
  },
  // English
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇺🇸 en-US-Journey-F',
    id: 'en-US-Journey-F',
    gender: 'female',
    lang: 'en-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_en-US-Journey-F.mp3',
  },
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇺🇸 en-US-Journey-O',
    id: 'en-US-Journey-O',
    gender: 'female',
    lang: 'en-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_en-US-Journey-O.mp3',
  },
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇺🇸 en-US-Journey-D',
    id: 'en-US-Journey-D',
    gender: 'female',
    lang: 'en-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_en-US-Journey-D.mp3',
  },
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇺🇸 en-US-News-N',
    id: 'en-US-News-N',
    gender: 'female',
    lang: 'en-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_en-US-News-N.mp3',
  },
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇺🇸 en-US-News-L',
    id: 'en-US-News-L',
    gender: 'female',
    lang: 'en-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_en-US-News-L.mp3',
  },
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇺🇸 en-US-Neural2-F',
    id: 'en-US-Neural2-F',
    gender: 'female',
    lang: 'en-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_en-US-Neural2-F.mp3',
  },
  {
    provider: 'google',
    name: '👩 Woman ♀️ 🇺🇸 en-US-Neural2-H',
    id: 'en-US-Neural2-H',
    gender: 'female',
    lang: 'en-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_en-US-Neural2-H.mp3',
  },
  {
    provider: 'google',
    name: '👨‍🦰 Man ♂️ 🇺🇸 en-US-Neural2-J',
    id: 'en-US-Neural2-J',
    gender: 'male',
    lang: 'en-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_en-US-Neural2-J.mp3',
  },
  {
    provider: 'google',
    name: '👨‍🦰 Man ♂️ 🇺🇸 en-US-Neural2-I',
    id: 'en-US-Neural2-I',
    gender: 'male',
    lang: 'en-US',
    exampleUrl: 'https://storage.googleapis.com/appingles-pro.appspot.com/voice_demos/google_en-US-Neural2-I.mp3',
  },
];
