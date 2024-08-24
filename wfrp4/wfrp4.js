Hooks.once('init', () => {
  const baseConfig = game.wfrp4e.config

  // Util function to patch config
  const changeConfig = inherit => (key, configContent) => {
    const basis = inherit ? baseConfig[key] : {}
    game.wfrp4e.config[key] = {
      ...basis,
      ...configContent,
    }
  }

  const patchConfig = changeConfig(true)
  const overrideConfig = changeConfig(false)

  // Add fabric armor
  patchConfig('armorTypes', {
    fabric: 'WFRP4ECUSTOM.ArmorType.Fabric',
  })

  // Change money
  overrideConfig('moneyNames', {
    gc: 'Ducat',
    ss: 'Shilling',
    bp: 'Penny',
  })

  // Change money values
  overrideConfig('moneyValues', {
    bp: 1,
    ss: 10,
    gc: 1000,
  })
  
})
