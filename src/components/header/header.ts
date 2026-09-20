import './header.scss';

export function renderHeader(): HTMLElement {
  const headerElement = document.createElement('header');
  headerElement.className = 'header';

  headerElement.innerHTML = `
    <div class="header__logo">MiniGames</div>
    <div class="header__right-elements">
      <nav class="header__nav">
        <ul class="header__menu">
          <li class="header__menu-item"><a href="/" class="header__link">Home</a></li>
          <li class="header__menu-item"><a href="/library" class="header__link">Library</a></li>
          <li class="header__menu-item"><a href="/tournaments" class="header__link">Tournaments</a></li>
          <li class="header__menu-item"><a href="/community" class="header__link">Community</a></li>
        </ul>
      </nav>
      <div class="header__buttons">
        <button class="header__login" type="button">Log In</button>
        <button class="header__register" type="button">Sign Up</button>
      </div>
      <div class="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
  </div>
  `;
  return headerElement;
}
