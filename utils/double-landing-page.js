export function getActivePanel(hoveredPanel) {
  if (hoveredPanel !== 'apple' && hoveredPanel !== 'samsung') {
    throw new Error('Invalid panel');
  }
  return {
    active: hoveredPanel,
    inactive: hoveredPanel === 'apple' ? 'samsung' : 'apple'
  };
}

export function getPanelFlexState(hoveredPanel) {
  if (hoveredPanel === 'left') {
    return { left: '75%', right: '25%' };
  } else if (hoveredPanel === 'right') {
    return { left: '25%', right: '75%' };
  } else {
    return { left: '50%', right: '50%' };
  }
}


