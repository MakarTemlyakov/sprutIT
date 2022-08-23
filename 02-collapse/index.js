const collapseButton = document.querySelector('.collapsible__button');
const collapseContent = document.querySelector('.collapsible__content');
const visibleTextSpan = collapseButton.querySelector('.collapsible__action--visible');
const hiddenTextSpan = collapseButton.querySelector('.collapsible__action--hidden');

let easyChangeVisible = [
  {
    opacity: 0,
    height: '0px',
  },
  {
    opacity: 0.3,
    color: '#ffffff',
    background: '#c84d4d',
    height: '5px',
  },
  {
    opacity: 0.6,
    color: '#ffffff',
    background: '#c84d4d',
    height: '10px',
  },
  {
    opacity: 1.0,
    color: '#ffffff',
    background: '#c84d4d',
    height: '20px',
  },
];

const playAnimation = async (isVisibleContent) => {
  const playbackRate = isVisibleContent ? 1 : -1;
  const collapseAnimation = collapseContent.animate(easyChangeVisible, {
    duration: 300,
    easing: 'ease',
    fill: 'forwards',
  });

  collapseAnimation.playbackRate = playbackRate;
  await collapseAnimation.play();
  return await collapseAnimation.finished;
};

const collapseClickAnimation = async () => {
  if (collapseContent.hidden) {
    collapseContent.hidden = false;
    toggleCollapseButtonText(collapseContent.hidden);
    await playAnimation(true);
    return;
  }

  toggleCollapseButtonText(!collapseContent.hidden);
  await playAnimation(false);
  collapseContent.hidden = true;
};

const toggleCollapseButtonText = (isContentHidden) => {
  if (isContentHidden) {
    hiddenTextSpan.hidden = false;
    visibleTextSpan.hidden = true;
  } else {
    visibleTextSpan.hidden = false;
    hiddenTextSpan.hidden = true;
  }
};

document.addEventListener('DOMContentLoaded', (e) => {
  collapseContent.hidden = true;
  toggleCollapseButtonText(collapseContent.hidden);
});

collapseButton.addEventListener('click', collapseClickAnimation);
