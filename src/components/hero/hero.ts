import './hero.scss';

export function renderHero(): HTMLElement {
  const heroElement = document.createElement('section');
  heroElement.className = 'hero';
  heroElement.innerHTML = `
    <div class="container">
      <div class="hero__wrapper">
        <h1 class="hero__title_h1">Take a Short Break & Have Fun</h1>
        <p class="hero__text">
          Discover hundreds of curated casual mini-games. Play instantly in your
          browser — puzzle, match 3, farm, and board classics.
        </p>
        <button class="hero__button" type="button">Browse Library</button>
      </div>
    </div>
  `;
  return heroElement;
}
