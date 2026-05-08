const STORAGE_KEY = "savedProperties";

/**
 * Get all saved properties
 */
export const getSavedProperties = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

/**
 * Save a new property
 */
export const saveProperty = (property) => {
  const existing = getSavedProperties();

  const alreadySaved = existing.find((item) => item.id === property.id);
  if (alreadySaved) return existing;

  const updated = [...existing, property];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return updated;
};

/**
 * Remove a property
 */
export const removeSavedProperty = (id) => {
  const existing = getSavedProperties();
  const updated = existing.filter((item) => item.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

/**
 * Clear all saved properties (optional)
 */
export const clearSavedProperties = () => {
  localStorage.removeItem(STORAGE_KEY);
};
