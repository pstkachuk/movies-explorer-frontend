const SHORTSMOVIE_DURATION = 40;
const SCREEN_CONFIG = {
  wide: {
    screenWidth: 1280,
    cardsCount: {
      atFirst: 12,
      more: 3,
    }
  },
  medium: {
    screenWidth: 1024,
    cardsCount: {
      atFirst: 8,
      more: 2,
    }
  },
  narrow: {
    screenWidth: 767,
    cardsCount: {
      atFirst: 5,
      more: 2,
    }
  }
}

export {
  SHORTSMOVIE_DURATION,
  SCREEN_CONFIG
}