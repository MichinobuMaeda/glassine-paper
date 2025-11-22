# Glassine Paper

CSS and some React components for Material Design 3

- [API Documentation](https://github.com/MichinobuMaeda/glassine-paper/blob/main/docs/api.md)
- [Sample](https://pages.michinobu.jp/glassine-paper/sample)
- [Theme color generator](https://pages.michinobu.jp/glassine-paper/theme)

## Components

| Component    | CSS | React |
|--------------|:---:|:-----:|
| App Bar      |  o  |   o   |
| Toolbar      |  o  |   o   |
| Menu         |  o  |   o   |
| Tabs         |  o  |   o   |
| Button       |  o  |   o   |
| Text Field   |  o  |   o   |
| Nav Drawer   |  o  |   o   |
| Nav Bar      |  o  |   x   |
| Nav Rail     |  o  |   x   |
| Fab          |  o  |   x   |
| Checkbox     |  o  |   x   |
| Switch       |  o  |   x   |
| Radio Button |  o  |   x   |
| Divider      |  o  |   x   |
| Search       |  x  |   x   |
| Card         |  x  |   x   |
| List         |  x  |   x   |
| Chips        |  x  |   x   |
| Badges       |  x  |   x   |
| Sheets       |  x  |   x   |
| Dialogs      |  x  |   x   |
| Snackbar     |  x  |   x   |
| ... ...      |  x  |   x   |

## Usage

```css
@import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i');
@import './glassine-paper-variables.css';
@import './theme.css';
@import './glassine-paper.min.css';
```

`glassine-paper-variables.css` with default values

```css
:root {
  --color-scheme: light dark;

  --root-font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --root-font-size: 16px;
  --root-font-weight: 400;

  --app-bar-z-index: 4;
  --nav-bar-z-index: 6;
  --nav-bar-height: calc(64px + env(safe-area-inset-bottom));
  --nav-rail-z-index: 8;
  --nav-rail-width: 240px;
  --nav-drawer-z-index: 10;
  --nav-drawer-width: 360px;

  --menu-width: 256px;
}
```

### Installation

Install from GitHub repository:

```bash
npm install github:MichinobuMaeda/glassine-paper
```

### Import CSS

```javascript
import 'glassine-paper/css';
```

```css
@import 'glassine-paper/css';
```

### Import React Components

```javascript
// Import all components
import { Button, Slider, TextField } from 'glassine-paper';

// Or import individual components
import { Button } from 'glassine-paper/Button';
import { Slider } from 'glassine-paper/Slider';
import { TextField } from 'glassine-paper/TextField';
```

## Development

```bash
git clone https://github.com/MichinobuMaeda/glassine-paper.git
cd glassine-paper
npm install

# Build all
npm run build

# Watch and compile SCSS changes
npm run watch

# Start development server (theme generator UI)
npm start
```
