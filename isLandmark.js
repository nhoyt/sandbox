/*
*   isLandmark: If element is a landmark, return an object with properties
*   'role' and 'name'; otherwise return null.
*/
function isLandmark (element) {
  const roles = [
    'application',
    'banner',
    'complementary',
    'contentinfo',
    'form',
    'main',
    'navigation',
    'search'
  ];

  function isDescendantOfNames (element) {
    const names = ['article', 'aside', 'main', 'nav', 'section'];
    return names.some(name => element.closest(name));
  }

  function isDescendantOfRoles (element) {
    const roles = ['article', 'complementary', 'main', 'navigation', 'region'];
    return roles.some(role => element.closest(`[role="${role}"]`));
  }

  // determination is straightforward for element with 'role' attribute
  if (element.hasAttribute('role')) {
    const value = element.getAttribute('role');
    if (roles.includes(value)) {
      return getLandmarkInfo(element, value);
    }
    if (value === 'region') {
      const name = getAccessibleName(element);
      if (name.length) {
        return { role: 'region', name: name };
      }
    }
  }
  else { // element does not have 'role' attribute
    const tagName = element.tagName.toLowerCase();

    if (tagName === 'aside') {
      return getLandmarkInfo(element, 'complementary');
    }

    if (tagName === 'main') {
      return getLandmarkInfo(element, 'main');
    }

    if (tagName === 'nav') {
      return getLandmarkInfo(element, 'navigation');
    }

    if (tagName === 'footer') {
      if (!(isDescendantOfNames(element) || isDescendantOfRoles(element))) {
        return getLandmarkInfo(element, 'contentinfo');
      }
      else {
        return null;
      }
    }

    if (tagName === 'header') {
      if (!(isDescendantOfNames(element) || isDescendantOfRoles(element))) {
        return getLandmarkInfo(element, 'banner');
      }
      else {
        return null;
      }
    }

    if (tagName === 'form') {
      const name = getAccessibleName(element);
      if (name.length) {
        return { role: 'form', name: name };
      }
      else {
        return null;
      }
    }

    if (tagName === 'section') {
      const name = getAccessibleName(element);
      if (name.length) {
        return { role: 'region', name: name };
      }
      else {
        return null;
      }
    }

  } // end else

  return null;
}
