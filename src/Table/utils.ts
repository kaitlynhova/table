export const calculateGridTemplateColumns = (columnsLength: number) => {
  const equalPercentage = 100 / columnsLength;
  return Array(columnsLength).fill(`${equalPercentage}%`);
};
