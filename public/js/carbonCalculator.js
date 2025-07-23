function estimateCarbon(kg, transport) {
  const factors = { 'bike': 0, 'van': 0.2, 'truck': 0.5 };
  return kg * (factors[transport] || 0.2);
}
