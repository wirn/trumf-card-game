import { Card, SpecialCard } from './card.model';

export const mainCards: Card[] = [
  new Card('Bananmonster', 10, 10, 10, 65, 20, 'Bananmonster.webp'),
  new Card('Bergsmonster', 65, 15, 70, 20, 50, 'Bergsmonster.jpg'),
  new Card('Bilmonster', 55, 75, 50, 15, 60, 'Bilmonster.webp'),
  new Card('Blixtmonster', 55, 98, 55, 40, 60, 'Blixtmonster.webp'),
  new Card('Blommonster', 5, 5, 5, 75, 5, 'Blommonster.webp'),
  new Card('Chilimonster', 99, 40, 10, 20, 30, 'Chilimonster.webp'),
  new Card('Broccolimonster', 2, 60, 2, 60, 1, 'Broccolimonster.webp'),
  new Card('Cykelmonster', 15, 55, 35, 25, 20, 'Cykelmonster.webp'),
  new Card('Djuphavsmonster', 15, 80, 15, 10, 70, 'Djuphavsmonster.jpg'),
  new Card('Eldmonster', 55, 20, 45, 30, 60, 'Eldmonster.webp'),
  new Card('Gigantus', 85, 25, 100, 40, 55, 'Gigantus.webp'),
  new Card('Gruvmonster', 65, 15, 50, 30, 55, 'Gruvmonster.webp'),
  new Card('Guldväktaren', 75, 70, 60, 40, 50, 'Guldväktaren.webp'),
  new Card('Hajmonster', 85, 75, 65, 10, 75, 'Hajmonster.jpeg'),
  new Card('Havsmonster', 75, 50, 50, 25, 45, 'Havsmonster.jpg'),
  new Card('Honungsmonster', 25, 75, 35, 45, 40, 'Honungsmonster.webp'),
  new Card('Husätarn', 70, 35, 75, 25, 65, 'Husätarn.webp'),
  new Card('Ismonster', 50, 30, 50, 40, 60, 'Ismonster.webp'),
  new Card('Järnglöden', 65, 45, 75, 35, 70, 'Järnglöden.webp'),
  new Card('Julmonster', 20, 15, 25, 65, 5, 'Julmonster.jpg'),
  new Card('Karatemonster', 55, 55, 45, 55, 45, 'Karatemonster.webp'),
  new Card('Legokastarn', 25, 55, 35, 50, 40, 'Legokastarn.webp'),
  new Card('Leopardmonster', 35, 100, 30, 35, 35, 'Leopardmonster.webp'),
  new Card('Mardrömsmonster', 10, 20, 20, 15, 99, 'Mardrömsmonster.webp'),
  new Card('Molnmonster', 5, 5, 95, 55, 0, 'Molnmonster.webp'),
  new Card('Muskelmonstret', 100, 40, 50, 35, 50, 'Muskelmonstret.webp'),
  new Card('Ökenmonster', 25, 25, 30, 35, 25, 'Ökenmonster.jpg'),
  new Card('Djävulsstryparn', 65, 60, 40, 25, 60, 'Ormmonster.webp'),
  new Card('Pluggmonstret', 25, 30, 35, 100, 45, 'Pluggmonstret.webp'),
  new Card('Regnbågsmonster', 30, 10, 70, 40, 40, 'Regnbågsmonster.webp'),
  new Card('Riddarslukarn', 50, 50, 50, 40, 60, 'Riddarslukarn.jpg'),
  new Card('Saxofonmonster', 25, 20, 15, 80, 35, 'Saxofonmonster.jpeg'),
  new Card('Skateboardsmonster', 40, 60, 40, 55, 30, 'Skateboardsmonster.jpg'),
  new Card('Skogsmonster', 70, 50, 50, 30, 50, 'Skogsmonster.jpg'),
  new Card('Skräpätarn', 20, 50, 40, 25, 15, 'Skräpmonster.jpeg'),
  new Card('Spöket', 5, 75, 20, 50, 100, 'Spöket.webp'),
  new Card('Stadsmonster', 60, 15, 85, 40, 60, 'Stadsmonster.webp'),
  new Card('Toamonster', 10, 50, 10, 60, 60, 'Toamonster.webp'),
  new Card('Trädmonster', 75, 5, 55, 25, 75, 'Trädmonstern.webp'),
  new Card('Träskmonster', 60, 50, 40, 30, 40, 'Träskmonster.jpg'),
  new Card('Underjordsmonster', 40, 50, 50, 40, 60, 'Underjordsmonster.webp'),
  new Card('Vårtmonster', 35, 39, 40, 20, 85, 'Vårtmonster.webp'),
  new Card('Varulven', 65, 65, 45, 25, 80, 'Varulven.webp'),
  new Card('Zombien Leif', 20, 15, 30, 1, 69, 'Zombien Bert.webp'),
  new Card('Kodmonster', 20, 15, 30, 1, 69, 'Programmerarmonster.webp'),
];

export const specialCards: SpecialCard[] = [
  new SpecialCard(
    'Joker',
    'Om du förlorar denna runda så får du prova igen',
    'Joker.webp'
  ),
  new SpecialCard(
    'Lyckliga Jokern',
    'Den egenskap du väljer får dubbelt värde',
    'Lyckliga Jokern.webp'
  ),
  new SpecialCard(
    'Olyckliga Jokern',
    'Motståndarens egenskap får halverat värde',
    'Olyckliga Jokern.webp'
  ),
];
