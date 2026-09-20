import '../../style.scss';
import '../../components/header/header.scss';
import { renderHeader } from '../../components/header/header';

export function renderHomePage(): HTMLElement {
  const body = document.querySelector('body');
  const mainElement = document.createElement('main');
  mainElement.className = 'home-page';

  const header = renderHeader();

  body?.append(header);
  mainElement.append();

  return mainElement;
}
