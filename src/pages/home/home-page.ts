import '../../style.scss';
import '../../components/header/header.scss';
import { renderHeader } from '../../components/header/header';
import { renderHero } from '../../components/hero/hero.ts';

export function renderHomePage(): HTMLElement {
  const body = document.querySelector('body');
  const mainElement = document.createElement('main');
  mainElement.className = 'home-page';

  const header = renderHeader();
  const hero = renderHero();
  mainElement.append(hero);
  body?.append(header);

  return mainElement;
}
