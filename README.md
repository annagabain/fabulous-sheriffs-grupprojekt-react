# Cocktail-Wiki

<details>
  <summary>Innehållsförteckning</summary>

- [Instruktioner](#instruktioner)
- [Krav](#krav)
  - [Första veckan: Landing Page & Search Page](#första-veckan-landing-page--search-page)
  - [Andra veckan: Cocktail Info Page & Favorites Page](#andra-veckan-cocktail-info-page--favorites-page)
  - [Tredje veckan: Ingredient Page & Bonusfunktioner](#tredje-veckan-ingredient-page--bonusfunktioner)
- [Extra funktioner](#extra-funktioner---välj-dina-utmaningar)
  - [Search Page++](#search-page-1)
  - [General features](#general-features)

</details>

## Instruktioner

Ni ska bygga en cocktail-wiki som använder data från [The Cocktail DB API](https://www.thecocktaildb.com/api.php). Ni kan se ett exempel på en cocktail-wiki på deras [hemsida](https://www.thecocktaildb.com/).

Uppgiften kommer att delas in i tre sprintar som sträcker sig över tre veckor. Varje sprint avslutas med en code review på fredagen, där ni ska presentera och granska varandras kod inom gruppen. Ni kommer också att sätta upp delmål inför varje sprint och planera vem som arbetar med vad inom gruppen. Detta kräver att ni aktivt samarbetar och kommunicerar.

Applikationen ska byggas med Vite och React TypeScript och innehålla minst sex olika sidor.

## Krav

### Första veckan: Landing Page & Search Page

Mål: Sätt upp projektet och skapa både en landningssida där användaren kan se en slumpmässig cocktail och en söksida där användaren kan söka efter cocktails.

- **Landing Page (Random Cocktail)**
  - Användare ska kunna se en slumpmässig cocktail när de besöker sidan.
  - Användare ska kunna hämta en ny slumpmässig cocktail genom att klicka på en knapp.
  - Cocktailens namn och bild ska visas som ett kort.
  - Användare ska kunna klicka på **Se mer** för att navigera till en `Cocktail Info Page`.

- **Search Page**
  - Användare ska kunna söka efter en cocktail med hjälp av dess namn.
  - Resultaten ska visas i en lista med max 10 resultat, och listan ska vara paginerad om det finns fler än 10 resultat.
  - Vid klick på en cocktail i listan ska användaren navigeras till `Cocktail Info Page`.

Denna vecka bör ni sätta upp projektet i Vite med React TypeScript. Implementera React Router för att kunna navigera mellan olika sidor. Använd useEffect och useState för att hantera API-anrop och lagra cocktails. Dessutom ska ni läsa på om loaders och actions i React Router för att senare kunna implementera dem i projektet.

#### Delmål

1. Sätt upp projektet med Vite och React TypeScript.
2. Implementera landningssidan med slumpmässig cocktail.
3. Implementera söksidan med sökfunktion och paginering.
4. Läs på om loaders och actions i React Router.

**Code Review på fredag:** Gå igenom koden tillsammans och säkerställ att alla förstår implementationen samt diskutera era första intryck av loaders och actions.

### Andra veckan: Cocktail Info Page & Favorites Page

Mål: Skapa en sida för detaljerad information om cocktails och en favoritsida där användaren kan spara sina favoritcocktails.

- **Cocktail Info Page**
  - Denna sida ska visa detaljerad information om en cocktail, inklusive kategori, bild, taggar, ingredienser och mått, samt vilket glas den ska serveras i.

- **Favorites Page**
  - Användare ska kunna spara sina favoritcocktails och visa dem på en separat sida.
  - Användare ska kunna ta bort favoriter.
  - Favoriter ska lagras mhs useContext.

Denna vecka ska ni fokusera på att implementera användning av React useContext för att hantera favoriterna mellan komponenter och React Router för navigering. Använd också useEffect för att hämta cocktailinformation baserat på URL-parametrar.

#### Delmål

1. Implementera detaljerad informationssida för cocktails.
2. Implementera favoritsidan med möjlighet att lägga till och ta bort favoriter.
3. Använd useContext för att hantera favoriterna.

**Code Review på fredag:** Diskutera användningen av useContext och hur ni hanterar data mellan sidorna.

### Tredje veckan: Ingredient Page & Bonusfunktioner

Mål: Skapa en sida för detaljerad information om ingredienser och implementera eventuella bonusfunktioner.

- **Ingredient Page**
  - Användare ska kunna se detaljerad information om en ingrediens genom att klicka på den. Informationen ska inkludera namn, beskrivning, alkoholhalt (om tillämpligt), och vilka andra cocktails som innehåller den.

Denna vecka ska ni också slutföra och implementera eventuella bonusfunktioner som ni har valt att arbeta med.

#### Delmål

1. Implementera detaljerad informationssida för ingredienser.
2. Implementera de bonusfunktioner ni valt.

**Code Review på fredag:** Granska hela applikationen, inklusive bonusfunktioner, och säkerställ att allt fungerar som det ska. Förbered för inlämning.

## Extra funktioner - välj dina utmaningar

Om ni blir klara med grundkraven kan ni välja att implementera några av dessa extra funktioner.

### Search Page++

- Användare ska kunna göra avancerade sökningar baserat på kategori, ingrediens eller glas.
- Resultaten ska cachas så att API-anrop inte görs om för redan besökta cocktails.

### Generella funktioner

- Implementera oändlig scroll för stora datamängder istället för paginering.
- Lägg till felhantering för API-anrop och visa användarvänliga felmeddelanden.
- Lägg till laddningstillstånd och platshållare för datahämtning.
- Användare ska kunna filtrera bort alkoholhaltiga drinkar.

## Gruppindelning:
![Gruppindelning](screenshot-groupie-1725867454486.png "Gruppindelning")
