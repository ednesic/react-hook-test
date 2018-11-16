export const SectionNames = {
  TECNOLOGY: { text: 'Ciência & Tecnologia', api: 'technology' },
  HEALTH: { text: 'Saúde', api: 'health' },
  POLITICS: { text: 'Política', api: 'politics' },
  WORLD: { text: 'Mundo', api: 'world' },
};

export default (_, action) => SectionNames[action.type].api;
