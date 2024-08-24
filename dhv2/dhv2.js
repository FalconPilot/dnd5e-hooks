const lore = label => ({
  label,
  advance: -20,
  starter: false,
  cost: 0,
})

const commonLores = {
  academics: lore('Academics'),
  administration: lore('Administration'),
  clergy: lore('Clergy'),
  cybernetics: lore('Cybernetics'),
  dominion: lore('Dominion'),
  enforcers: lore('Enforcers'),
  frontier: lore('Frontier'),
  navy: lore('Navy'),
  psychics: lore('Psychics'),
  solarSystem: lore('Solar System'),
  spacefarers: lore('Spacefarers'),
  spaceMarines: lore('Space Marines'),
  tech: lore('Tech'),
  underworld: lore('Underworld'),
  war: lore('War'),
}

Hooks.once('ready', () => {
  // const oldCommonLores = Object.keys(game.system.template.Actor.acolyte.skills.commonLore.specialities)
  // game.system.template.Actor.acolyte.skills.commonLore.specialities = commonLores
  // game.system.template.Actor.npc.skills.commonLore.specialities = commonLores

  // Array.from(game.actors).forEach(actor => {
  //   actor.update({
  //     skills: {
  //       ...actor.system.skills,
  //       commonLore: {
  //         ...actor.system.skills.commonLore,
  //         specialities: Object.entries(actor.system.skills.commonLore.specialities).reduce((acc, [k, v]) => {
  //           if (oldCommonLores.includes(k)) {
  //             return acc
  //           }
      
  //           return {
  //             ...acc,
  //             [k]: v,
  //           }
  //         })
  //       }
  //     }
  //   })
  // })

  const BaseNpcSheet = Actors.registeredSheets[1]

  class HideoutSheet extends BaseNpcSheet {
    static get defaultOptions () {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: 'modules/fpilot-dhv2-custom-hooks/templates/stash.hbs',
        tabs: [],
      })
    }
  }

  Actors.registerSheet('dark-heresy', HideoutSheet, { types: ['npc'] })
})
