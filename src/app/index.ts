import { renderHomePage } from '../pages/home/home-page';

function boostrap(): void {
  const appElement = document.createElement('div');
  appElement.id = 'app';

  const homePage = renderHomePage();

  appElement.append(homePage);

  document.body.append(appElement);
}

document.addEventListener('DOMContentLoaded', boostrap);
