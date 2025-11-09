import { useState, useEffect, type JSX } from 'react';
import convert from 'color-convert';
import './App.css';
import {
  generateScheme,
  convertToVariables,
  getContrastColor,
  generateThemeCss,
  Variant,
} from './material-theme';
import Row from './Row';
import TextField from './components/TextField';
import Button from './components/Button';
import Slider from './components/Slider';
import SvgMenu from './icons/SvgMenu';
import SvgMoreVert from './icons/SvgMoreVert';
import SvgSquare from './icons/SvgSquare';
import SvgGitHub from './icons/SvgGitHub';
import SvgResetSettings from './icons/SvgResetSettings';
import SvgDownload from './icons/SvgDownload';

const downloadFile = (filename: string, content: string) => {
  const data = new Blob([content]);
  const url = URL.createObjectURL(data);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  link.parentNode?.removeChild(link);
};

const variablesToLightDarkName = (
  variables: Array<[string, string]>
): Array<[string, string, string]> => {
  const lightColors = variables.filter(([name]) => name.includes('-light-'));
  const darkColors = variables.filter(([name]) => name.includes('-dark-'));
  return lightColors.map(([name, value], index) => [
    value,
    darkColors[index][1],
    name.replace('--color-light-', ''),
  ]);
};

function App(): JSX.Element {
  const defaultSeedColor = '#0000FF';
  const sliderWidth = '20rem';
  const [menuVisible, setMenuVisible] = useState(false);
  const [seedColor, setSeedColor] = useState(defaultSeedColor);
  const [r, g, b] = convert.hex.rgb(seedColor);
  const [red, setRed] = useState(r);
  const [green, setGreen] = useState(g);
  const [blue, setBlue] = useState(b);
  const [h, s, v] = convert.hex.hsv(seedColor);
  const [hue, setHue] = useState(h);
  const [saturation, setSaturation] = useState(s);
  const [brightness, setBrightness] = useState(v);
  const [colorModel, setColorModel] = useState<'RGB' | 'HSV'>('HSV');
  const [rgbUpdating, setRgbUpdating] = useState(false);
  const [hsvUpdating, setHsvUpdating] = useState(false);
  const [contrast, setContrast] = useState(0);
  const [variant, setVariant] = useState(Number(Variant.TONAL_SPOT));
  const [variables, setVariables] = useState<Array<[string, string]>>([]);

  useEffect(() => {
    setRgbUpdating(false);
    setHsvUpdating(false);

    if (seedColor.startsWith('#') && seedColor.length === 7) {
      const [r, g, b] = convert.hex.rgb(seedColor);
      setRed(r);
      setGreen(g);
      setBlue(b);

      const [h, s, v] = convert.hex.hsv(seedColor);
      setHue(h);
      setSaturation(s);
      setBrightness(v);
    }
  }, [seedColor]);

  useEffect(() => {
    if (colorModel === 'RGB' && rgbUpdating) {
      setSeedColor(`#${convert.rgb.hex([red, green, blue])}`);
    }
  }, [red, green, blue, colorModel, rgbUpdating]);

  useEffect(() => {
    if (colorModel === 'HSV' && hsvUpdating) {
      setSeedColor(
        `#${convert.hsv.hex([hue === 360 ? 0 : hue, saturation, brightness])}`
      );
    }
  }, [hue, saturation, brightness, colorModel, hsvUpdating]);

  useEffect(() => {
    generateScheme(seedColor, variant, contrast).then((scheme) =>
      setVariables(convertToVariables(scheme))
    );
  }, [seedColor, variant, contrast]);

  useEffect(() => {
    if (variables.length > 0) {
      variables.forEach(([varName, hex]: [string, string]) => {
        document.documentElement.style.setProperty(varName, hex);
      });
    }
  }, [variables]);

  return (
    <div className="nav-drawer-layout">
      <div className="content-area">
        <header className="app-bar sticky">
          <button>
            <SvgMenu />
          </button>
          <img src="./favicon.svg" alt="Glassine Paper" />
          <div className="title-area">
            <h1 className="title">Glassine Paper</h1>
            <div className="subtitle">CSS for Material Design 3</div>
          </div>
          <button onClick={() => setMenuVisible(!menuVisible)}>
            <SvgMoreVert />
          </button>
        </header>

        <div className="tabs">
          <a href="../sample">Sample</a>
          <div className="active">Theme</div>
          <a href="#">
            <SvgSquare />
            Tab item
          </a>
        </div>

        {menuVisible && (
          <div className="menu" id="main-menu">
            <a href="https://github.com/MichinobuMaeda/glassine-paper">
              <SvgGitHub />
              GitHub
            </a>
          </div>
        )}

        <main>
          <Row align="center">
            <Row align="center">
              <TextField
                label="Seed Color"
                value={seedColor}
                onChange={(e) => setSeedColor(e.target.value)}
                width="7rem"
                style={{ fontFamily: 'monospace' }}
              />
              <div
                style={{
                  width: '5.4rem',
                  height: '3.6rem',
                  backgroundColor: seedColor,
                  border: `1px solid #888888`,
                  borderRadius: '0.5rem',
                }}
              ></div>
            </Row>
            <Row align="center">
              Contrast:
              <Slider
                min={-1}
                max={1}
                step={0.01}
                value={contrast}
                onChange={(val) => setContrast(val)}
                width={sliderWidth}
                showValueIndicator
              />
            </Row>
            <Row align="center" style={{ gap: '0.5rem' }}>
              {Object.entries({
                MONOCHROME: 0,
                NEUTRAL: 1,
                TONAL_SPOT: 2,
                VIBRANT: 3,
                EXPRESSIVE: 4,
                FIDELITY: 5,
                CONTENT: 6,
                RAINBOW: 7,
                FRUIT_SALAD: 8,
              }).map(([key, value]) => (
                <label
                  key={key}
                  className="button filled sm"
                  style={{ marginRight: '0.5rem' }}
                >
                  {(
                    key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
                  ).replace('_', ' ')}
                  <input
                    type="radio"
                    name="variant"
                    value={value}
                    checked={variant === value}
                    onChange={() => setVariant(value)}
                  />
                </label>
              ))}
            </Row>
            <Row align="center">
              <Button
                variant="outlined"
                size="sm"
                icon
                onClick={() => {
                  setSeedColor(defaultSeedColor);
                  setContrast(0);
                  setVariant(2);
                }}
              >
                <SvgResetSettings />
              </Button>
              <Button
                variant="filled"
                size="sm"
                icon
                onClick={() =>
                  downloadFile(
                    'theme.css',
                    generateThemeCss(variables, seedColor, contrast, variant)
                  )
                }
              >
                <SvgDownload />
              </Button>
            </Row>
          </Row>

          <div className="tabs">
            <button
              className={rgbUpdating ? 'active' : ''}
              onClick={() => setColorModel('RGB')}
            >
              RGB
            </button>
            <button
              className={hsvUpdating ? 'active' : ''}
              onClick={() => setColorModel('HSV')}
            >
              HSV
            </button>
          </div>
          {colorModel === 'RGB' && (
            <Row align="center">
              <Slider
                min={0}
                max={255}
                value={red}
                onChange={(val) => {
                  setRgbUpdating(true);
                  setRed(val);
                }}
                width={sliderWidth}
                showValueIndicator
              />
              <Slider
                min={0}
                max={255}
                value={green}
                onChange={(val) => {
                  setRgbUpdating(true);
                  setGreen(val);
                }}
                width={sliderWidth}
                showValueIndicator
              />
              <Slider
                min={0}
                max={255}
                value={blue}
                onChange={(val) => {
                  setRgbUpdating(true);
                  setBlue(val);
                }}
                width={sliderWidth}
                showValueIndicator
              />
            </Row>
          )}
          {colorModel === 'HSV' && (
            <Row align="center">
              <Slider
                min={0}
                max={360}
                value={hue}
                onChange={(val) => {
                  setHsvUpdating(true);
                  setHue(val);
                }}
                width={sliderWidth}
                showValueIndicator
              />
              <Slider
                min={0}
                max={100}
                value={saturation}
                onChange={(val) => {
                  setHsvUpdating(true);
                  setSaturation(val);
                }}
                width={sliderWidth}
                showValueIndicator
              />
              <Slider
                min={0}
                max={100}
                value={brightness}
                onChange={(val) => {
                  setHsvUpdating(true);
                  setBrightness(val);
                }}
                width={sliderWidth}
                showValueIndicator
              />
            </Row>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              overflowX: 'scroll',
            }}
          >
            {variablesToLightDarkName(variables).map(([light, dark, name]) => (
              <div
                key={name}
                style={{
                  margin: 0,
                  padding: 0,
                  height: '1.5rem',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    margin: 0,
                    padding: '0 0.25rem',
                    backgroundColor: light,
                    fontFamily: 'monospace',
                    color: getContrastColor(light),
                  }}
                >
                  {light}
                </span>
                <span
                  style={{
                    margin: 0,
                    padding: '0 0.25rem',
                    backgroundColor: dark,
                    fontFamily: 'monospace',
                    color: getContrastColor(dark),
                  }}
                >
                  {dark}
                </span>
                <span
                  style={{
                    margin: 0,
                    fontFamily: 'monospace',
                    padding: '0 0.25rem',
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
