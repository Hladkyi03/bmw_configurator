export const getSearchWith = (
  currentParams,
  key,
  value,
) => {
  const newParams = new URLSearchParams(
    currentParams.toString(),
  );

  newParams.set(key, value.toString());

  return newParams;
};
