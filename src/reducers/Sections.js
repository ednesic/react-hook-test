export const SectionNames = {
  TECNOLOGY: { text: 'Technology', api: 'technology' },
  HEALTH: { text: 'Health', api: 'health' },
  POLITICS: { text: 'Politics', api: 'politics' },
  WORLD: { text: 'World', api: 'world' },
};

export default (_, action) => SectionNames[action.type];
