import { getActivePanel, getPanelFlexState } from "../utils/double-landing-page";


describe('getActivePanel', () => {
  test('returns correct active and inactive panels for apple', () => {
    const result = getActivePanel('apple');
    expect(result).toEqual({ active: 'apple', inactive: 'samsung' });
  });

  test('returns correct active and inactive panels for samsung', () => {
    const result = getActivePanel('samsung');
    expect(result).toEqual({ active: 'samsung', inactive: 'apple' });
  });

  test('throws error for invalid input', () => {
    expect(() => getActivePanel('nokia')).toThrow('Invalid panel');
  });
});

describe('getPanelFlexState', () => {
  test('returns 75/25 when hovering left', () => {
    expect(getPanelFlexState('left')).toEqual({ left: '75%', right: '25%' });
  });

  test('returns 25/75 when hovering right', () => {
    expect(getPanelFlexState('right')).toEqual({ left: '25%', right: '75%' });
  });

  test('returns 50/50 when hovering neither', () => {
    expect(getPanelFlexState(null)).toEqual({ left: '50%', right: '50%' });
  });
});
