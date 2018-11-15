export const SectionNames = {
  TECNOLOGY: 'Ciência & Tecnologia',
  HEALTH: 'Saúde',
  POLITICS: 'Política',
  WORLD: 'Mundo',
};

export default (section, action) => {
  section = action.type;
  return section;
};
