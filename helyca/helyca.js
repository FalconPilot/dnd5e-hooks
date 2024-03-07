Hooks.once('init', () => {

  // Override currencies
  CONFIG.DND5E.currencies = {
    cp: {
      label: 'Copper',
      abbreviation: 'cp',
      conversion: 10000
    },
    sp: {
      label: 'Silver',
      abbreviation: 'sp',
      conversion: 100
    },
    gp: {
      label: 'Gold',
      abbreviation: 'gp',
      conversion: 1
    },
    pp: {
      label: 'Platinum',
      abbreviation: 'pp',
      conversion: 0.01
    },
    ep: {
      label: 'Dragoncoins',
      abbreviation: 'dc',
      conversion: 0.001
    }
  }

  // Add Arcane damage
  CONFIG.DND5E.damageTypes.arcane = {
    label: 'Arcane'
  }

  // Add Firearms
  CONFIG.DND5E.weaponTypes.firearms = 'Firearm'
  CONFIG.DND5E.weaponProficiencies.fir = 'Firearms'
  CONFIG.DND5E.weaponProficienciesMap.firearms = 'fir'
  CONFIG.DND5E.weaponIds.musket = 'Compendium.forge-vtt-shared-compendiums-dnd-5e-extra-data.item-2-items.Item.gKfAkvq922QfWuFJ'
  CONFIG.DND5E.weaponIds.pistol = 'Compendium.forge-vtt-shared-compendiums-dnd-5e-extra-data.item-2-items.Item.LR8QS082gO80hnKL'

  // Add cartridges
  CONFIG.DND5E.consumableTypes.ammo.subtypes.cartridge = 'Cartridge'
  CONFIG.DND5E.ammoIds.cartridge = 'Compendium.forge-vtt-shared-compendiums-dnd-5e-extra-data.item-2-items.Item.OkZdmomVp3tdg2Dl'

  // Custom Shields
  CONFIG.DND5E.shieldIds.gauntlet = 'Compendium.forge-vtt-shared-compendiums-dnd-5e-extra-data.item-2-items.Item.h0AuEagn7VuMU2fC'

  // Add equipment types
  CONFIG.DND5E.equipmentTypes.helmet = 'Helmet'
  CONFIG.DND5E.equipmentTypes.mask = 'Mask'
  CONFIG.DND5E.equipmentTypes.cloak = 'Cloak'
  CONFIG.DND5E.equipmentTypes.boots = 'Boots'
  CONFIG.DND5E.equipmentTypes.gloves = 'Gloves'
  CONFIG.DND5E.equipmentTypes.belt = 'Belt'
  CONFIG.DND5E.equipmentTypes.ring = 'Ring'
  CONFIG.DND5E.equipmentTypes.earrings = 'Earrings'
  CONFIG.DND5E.equipmentTypes.necklace = 'Necklace'
  CONFIG.DND5E.equipmentTypes.bracelets = 'Bracelets'

  CONFIG.DND5E.miscEquipmentTypes.helmet = 'Helmet'
  CONFIG.DND5E.miscEquipmentTypes.mask = 'Mask'
  CONFIG.DND5E.miscEquipmentTypes.cloak = 'Cloak'
  CONFIG.DND5E.miscEquipmentTypes.boots = 'Boots'
  CONFIG.DND5E.miscEquipmentTypes.gloves = 'Gloves'
  CONFIG.DND5E.miscEquipmentTypes.belt = 'Belt'
  CONFIG.DND5E.miscEquipmentTypes.ring = 'Ring'
  CONFIG.DND5E.miscEquipmentTypes.earrings = 'Earrings'
  CONFIG.DND5E.miscEquipmentTypes.necklace = 'Necklace'
  CONFIG.DND5E.miscEquipmentTypes.bracelets = 'Bracelets'

  // Add ailments
  CONFIG.DND5E.featureTypes.ailment = {
    label: 'Ailment',
    subtypes: {
      curse: 'Curse',
      disease: 'Disease',
      wound: 'Wound',
    }
  }

  // Add consumables
  CONFIG.DND5E.consumableTypes.explosive = {
    label: 'Explosive',
  }

  CONFIG.DND5E.consumableTypes.gadget = {
    label: 'Gadget',
  }

  CONFIG.DND5E.consumableTypes.drug = {
    label: 'Drug',
  }
})
