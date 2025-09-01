import { getActivePanel, getPanelFlexState } from "./utils/double-landing-page.js";

const leftPanel = document.querySelector('.split.left');
const rightPanel = document.querySelector('.split.right');
const container = document.querySelector('.dub-ctnr');

function applyFlex(state) {
  leftPanel.style.flex = `0 0 ${state.left}`;
  rightPanel.style.flex = `0 0 ${state.right}`;
}

leftPanel.addEventListener('mouseenter', () => {
  applyFlex(getPanelFlexState('left'));
});

rightPanel.addEventListener('mouseenter', () => {
  applyFlex(getPanelFlexState('right'));
});

container.addEventListener('mouseleave', () => {
  applyFlex(getPanelFlexState(null));
});