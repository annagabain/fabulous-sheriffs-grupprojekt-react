# Cocktail-Wiki

<details>
  <summary>Innehållsförteckning</summary>

- [Instruktioner](#instruktioner)
- [Krav](#krav)
  - [Första veckan: Landing Page](#första-veckan-landing-page-random-cocktail)
  - [Andra veckan: Search Page](#andra-veckan-search-page)
  - [Tredje veckan: Cocktail Info Page](#tredje-veckan-cocktail-info-page)
- [Extra funktioner](#extra-funktioner---välj-dina-utmaningar)
  - [Search Page++](#search-page-1)
  - [Favorites Page](#favorites-page)
  - [Ingredient Page](#ingredient-page)
  - [Generella funktioner](#generella-funktioner)

</details>

## Instruktioner

Ni ska bygga en cocktail-wiki som använder data från [The Cocktail DB API](https://www.thecocktaildb.com/api.php). Ni kan se ett exempel på en cocktail-wiki på deras [hemsida](https://www.thecocktaildb.com/).

Uppgiften kommer att delas in i tre sprintar som sträcker sig över tre veckor. Varje sprint avslutas med en code review på fredagen, där ni ska presentera och granska varandras kod inom gruppen. Ni kommer också att sätta upp delmål inför varje sprint och planera vem som arbetar med vad inom gruppen. Detta kräver att ni aktivt samarbetar och kommunicerar.

Applikationen ska byggas med Vite och React TypeScript och innehålla minst tre olika sidor.

## Krav

### Första veckan: Landing Page (Random Cocktail)

Mål: Sätt upp projektet och skapa en landningssida där användaren kan se en slumpmässig cocktail.

- Användare ska kunna se en slumpmässig cocktail när de besöker sidan.
- Användare ska kunna hämta en ny slumpmässig cocktail genom att klicka på en knapp.
- Cocktailens namn och bild ska visas som ett kort.
- Användare ska kunna klicka på **Se mer** för att navigera till en `Cocktail Info Page`.

Under denna vecka bör ni sätta upp projektet i Vite med React TypeScript. Implementera React Router för att kunna navigera mellan olika sidor. Använd även useEffect och useState för att hantera API-anropet och lagra den slumpmässiga cocktailen.

#### Delmål

1. Sätt upp projektet med Vite och React TypeScript.
2. Implementera landningssidan med slumpmässig cocktail.
3. Använd React Router för att förbereda navigation till kommande sidor.

**Code Review på fredag:** Gå igenom koden tillsammans och säkerställ att alla förstår implementationen.

### Andra veckan: Search Page

Mål: Skapa en söksida där användare kan söka efter cocktails.

- Användare ska kunna söka efter en cocktail med hjälp av dess namn.
- Resultaten ska visas i en lista med max 10 resultat, och listan ska vara paginerad om det finns fler än 10 resultat.
- Vid klick på en cocktail i listan ska användaren navigeras till `Cocktail Info Page`.

Denna vecka ska ni använda React useContext för att dela sökresultaten mellan olika komponenter, och ni kan även använda useRef för att hantera referenser i formuläret.

#### Delmål

1. Skapa sökformuläret och implementera sökfunktionen.
2. Visa resultaten i en lista med paginering.
3. Använd useContext för att dela data mellan komponenter.

**Code Review på fredag:** Diskutera kodstrukturen och samarbetet inom gruppen.

### Tredje veckan: Cocktail Info Page

Mål: Skapa en sida för detaljerad information om en specifik cocktail.

- Denna sida ska visa detaljerad information om en cocktail, inklusive kategori, bild, taggar, ingredienser och mått, samt vilket glas den ska serveras i.

Nu ska ni använda useEffect för att hämta cocktailinformationen baserat på URL-parametrar via React Router. Fokusera på att optimera er kod och göra en slutlig genomgång av hela applikationen.

#### Delmål

1. Implementera detaljerad informationssida för cocktails.
2. Hämta data från API:t baserat på URL-parametrar.
3. Testa och säkerställ att hela applikationen fungerar som den ska.

**Code Review på fredag:** Granska hela applikationen och förbered inför inlämning.

## Extra funktioner - välj dina utmaningar

Om ni blir klara med grundkraven kan ni välja att implementera några av dessa extra funktioner.

### Search Page++

- Användare ska kunna göra avancerade sökningar baserat på kategori, ingrediens eller glas.
- Resultaten ska cachas så att API-anrop inte görs om för redan besökta cocktails.

### Favorites Page

- Användare ska kunna spara sina favoritcocktails och visa dem på en separat sida.
- Favoriter ska lagras lokalt i webbläsarens localStorage.

### Ingredient Page

- Genom att klicka på en ingrediens ska användaren kunna se detaljerad information om ingrediensen, inklusive om den är alkoholhaltig, och vilka andra cocktails som innehåller den.

### Generella funktioner

- Implementera oändlig scroll för stora datamängder istället för paginering.
- Lägg till felhantering för API-anrop och visa användarvänliga felmeddelanden.
- Lägg till laddningstillstånd och platshållare för datahämtning.
- Användare ska kunna filtrera bort alkoholhaltiga drinkar.
