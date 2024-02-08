Hooks.once('init', () => {

  // Override currencies
  CONFIG.DND5E.currencies.cp = {
    label: 'Copper',
    abbreviation: 'cp',
    conversion: 10000
  }

  CONFIG.DND5E.currencies.sp = {
    label: 'Silver',
    abbreviation: 'sp',
    conversion: 100
  }

  CONFIG.DND5E.currencies.gp = {
    label: 'Gold',
    abbreviation: 'gp',
    conversion: 1
  }

  CONFIG.DND5E.currencies.pp = {
    label: 'Platinum',
    abbreviation: 'pp',
    conversion: 0.01
  }

  CONFIG.DND5E.currencies.ep = {
    label: 'Dragoncoin',
    abbreviation: 'dc',
    conversion: 0.001
  }
})
