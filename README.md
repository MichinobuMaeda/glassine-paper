# glassine-paper-css

CSS and some React components for Material Design 3

- [API Documentation](docs/api.md)
- [Sample](https://pages.michinobu.jp/glassine-paper/sample)
- [Theme color generator](https://pages.michinobu.jp/glassine-paper/theme)

## Usage

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
