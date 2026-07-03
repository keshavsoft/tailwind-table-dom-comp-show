const getUniqueTruthyValues = data => [
    ...new Set(data.filter(Boolean))
];

export default getUniqueTruthyValues;
