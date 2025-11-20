import React, { useState, useEffect, type JSX } from 'react';
import useDetectScroll, { Axis } from '@smakss/react-scroll-direction';
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
import AppBar from './components/AppBar';
import NavDrawer from './components/NavDrawer';
import Tabs from './components/Tabs';
import Menu from './components/Menu';
import Toolbar from './components/Toolbar';
import TextField from './components/TextField';
import Button from './components/Button';
import Slider from './components/Slider';
import SvgMenu from './icons/SvgMenu';
import SvgMenuOpen from './icons/SvgMenuOpen';
import SvgKeep from './icons/SvgKeep';
import SvgKeepOff from './icons/SvgKeepOff';
import SvgMoreVert from './icons/SvgMoreVert';
import SvgSquare from './icons/SvgSquare';
import SvgGitHub from './icons/SvgGitHub';
import SvgResetSettings from './icons/SvgResetSettings';
import SvgDownload from './icons/SvgDownload';
import SvgBrightnessAuto from './icons/SvgBrightnessAuto';
import SvgLightMode from './icons/SvgLightMode';
import SvgDarkMode from './icons/SvgDarkMode';
import SvgAdd from './icons/SvgAdd';
import SvgDockToBottom from './icons/SvgDockToBottom';
import SvgColors from './icons/SvgColors';

type NavDrawerState = 'hidden' | 'visible' | 'modal';

const NavDrawerState = {
  HIDDEN: 'hidden' as const,
  VISIBLE: 'visible' as const,
  MODAL: 'modal' as const,
};

type ColorModel = 'RGB' | 'HSV';

const ColorModel = {
  RGB: 'RGB' as const,
  HSV: 'HSV' as const,
};

type LightDark = 'light' | 'dark' | 'light dark';

const LightDark = {
  LIGHT: 'light' as const,
  DARK: 'dark' as const,
  LIGHT_DARK: 'light dark' as const,
};

const LightDarkIcon = {
  [LightDark.LIGHT]: SvgLightMode,
  [LightDark.DARK]: SvgDarkMode,
  [LightDark.LIGHT_DARK]: SvgBrightnessAuto,
};

const LightDarkLabel = {
  [LightDark.LIGHT]: 'Light mode',
  [LightDark.DARK]: 'Dark mode',
  [LightDark.LIGHT_DARK]: 'Auto',
};

type ColorVariant = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const ColorVariant = {
  MONOCHROME: 0 as ColorVariant,
  NEUTRAL: 1 as ColorVariant,
  TONAL_SPOT: 2 as ColorVariant,
  VIBRANT: 3 as ColorVariant,
  EXPRESSIVE: 4 as ColorVariant,
  FIDELITY: 5 as ColorVariant,
  CONTENT: 6 as ColorVariant,
  RAINBOW: 7 as ColorVariant,
  FRUIT_SALAD: 8 as ColorVariant,
};

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
  const [colorModel, setColorModel] = useState<ColorModel>(ColorModel.HSV);
  const [rgbUpdating, setRgbUpdating] = useState(false);
  const [hsvUpdating, setHsvUpdating] = useState(false);
  const [contrast, setContrast] = useState(0);
  const [variant, setVariant] = useState(Number(Variant.TONAL_SPOT));
  const [variables, setVariables] = useState<Array<[string, string]>>([]);
  const [darkMode, setDarkMode] = useState<LightDark>(LightDark.LIGHT_DARK);
  const [scrolled, setScrolled] = useState(false);
  const [navDrawerState, setNavDrawerState] = useState<NavDrawerState>(
    NavDrawerState.HIDDEN
  );
  const [toolbarVariant, setToolbarVariant] = useState<'docked' | 'floating'>(
    'docked'
  );
  const [toolbarColor, setToolbarColor] = useState<'standard' | 'vibrant'>(
    'standard'
  );

  const { scrollPosition } = useDetectScroll({ axis: Axis.X });

  useEffect(() => {
    setScrolled(scrollPosition.top > 0);
  }, [scrollPosition]);

  useEffect(() => {
    document.documentElement.style.setProperty('color-scheme', darkMode);
  }, [darkMode]);

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
      <NavDrawer
        items={[
          {
            id: 'nav-drawer-hide-button',
            onClick: () => setNavDrawerState(NavDrawerState.HIDDEN),
            leadingIcon: <SvgMenuOpen />,
            label: 'Close',
          },
          {
            id: 'nav-drawer-modal-button',
            hidden: navDrawerState === NavDrawerState.MODAL,
            onClick: () => setNavDrawerState(NavDrawerState.MODAL),
            leadingIcon: <SvgKeepOff />,
            label: 'Keep off',
          },
          {
            id: 'nav-drawer-fix-button',
            hidden: navDrawerState === NavDrawerState.VISIBLE,
            onClick: () => setNavDrawerState(NavDrawerState.VISIBLE),
            leadingIcon: <SvgKeep />,
            label: 'Keep',
          },
          { divider: true },
          { label: 'Item 1' },
          {
            leadingIcon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z" />
              </svg>
            ),
            label: 'Item 2',
            active: true,
          },
          {
            leadingIcon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z" />
              </svg>
            ),
            label: 'Item 3',
          },
          { label: 'Item 4' },
          { label: 'Item 5' },
          { label: 'Item 6' },
          { label: 'Item 7' },
          { label: 'Item 8' },
          { label: 'Item 9' },
        ]}
        className={navDrawerState}
      />

      <div className="content-area">
        <AppBar
          sticky
          scrolled={scrolled}
          items={[
            {
              icon: <SvgMenu />,
              onClick: () => setNavDrawerState(NavDrawerState.MODAL),
              hidden: navDrawerState === NavDrawerState.VISIBLE,
            },
            {
              type: 'appLogo',
              icon: <img src="./favicon.svg" alt="Glassine Paper" />,
            },
            {
              type: 'title',
              title: 'Glassine Paper',
              subtitle: 'CSS for Material Design 3',
            },
            { type: 'spacer' },
            {
              icon: <SvgMoreVert />,
              onClick: () => setMenuVisible(!menuVisible),
            },
          ]}
        />

        <Tabs
          items={[
            {
              label: 'Sample',
              href: '../sample',
            },
            {
              label: 'Theme',
              active: true,
            },
            {
              leadingIcon: <SvgSquare />,
              label: 'Tab item',
              href: '#',
            },
          ]}
        />

        {menuVisible && (
          <Menu
            id="main-menu"
            items={[
              ...Object.values(LightDark).map((mode) => ({
                key: mode,
                leadingIcon: React.createElement(LightDarkIcon[mode]),
                label: LightDarkLabel[mode],
                onClick: () => {
                  setDarkMode(mode);
                  setMenuVisible(false);
                },
                active: darkMode === mode,
              })),
              { divider: true },
              {
                key: 'github',
                leadingIcon: <SvgGitHub />,
                label: 'GitHub',
                href: 'https://github.com/MichinobuMaeda/glassine-paper',
              },
              {
                key: 'menu-item',
                leadingIcon: <SvgSquare />,
                label: 'Menu Item',
                trailingIcon: <SvgSquare />,
              },
              { key: 'text-only', label: 'Text only' },
              {
                key: 'disabled-icon',
                leadingIcon: <SvgSquare />,
                label: 'Disabled icon',
                disabled: true,
              },
            ]}
            style={{
              position: 'fixed',
              top: 'calc(env(safe-area-inset-top) + 64px + 0.5rem)',
              right: '0.5rem',
              zIndex: 3,
            }}
          />
        )}

        <main>
          <Row align="center">
            <Row align="center">
              <TextField
                label="Seed Color"
                value={seedColor}
                onChange={(e) => setSeedColor(e.target.value)}
                style={{ fontFamily: 'monospace', width: '7rem' }}
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
                style={{ width: sliderWidth }}
                showValueIndicator
              />
            </Row>
            <Row align="center" style={{ gap: '0.5rem' }}>
              {Object.entries(ColorVariant).map(([key, value]) => (
                <Button
                  key={key}
                  variant="filled"
                  size="sm"
                  label={(
                    key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
                  ).replace('_', ' ')}
                  onClick={() => setVariant(value)}
                  checked={variant === value}
                  name="variant"
                  type="select"
                />
              ))}
            </Row>
            <Row align="center">
              <Button
                variant="outlined"
                size="sm"
                icon={<SvgResetSettings />}
                onClick={() => {
                  setSeedColor(defaultSeedColor);
                  setContrast(0);
                  setVariant(2);
                }}
              />
              <Button
                variant="filled"
                size="sm"
                icon={<SvgDownload />}
                onClick={() =>
                  downloadFile(
                    'theme.css',
                    generateThemeCss(variables, seedColor, contrast, variant)
                  )
                }
              />
            </Row>
          </Row>

          <Tabs
            items={Object.values(ColorModel).map((model) => ({
              key: model,
              label: model,
              active: colorModel === model,
              onClick: () => setColorModel(model),
            }))}
          />

          {colorModel === ColorModel.RGB && (
            <Row align="center">
              <Slider
                min={0}
                max={255}
                value={red}
                onChange={(val) => {
                  setRgbUpdating(true);
                  setRed(val);
                }}
                style={{ width: sliderWidth }}
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
                style={{ width: sliderWidth }}
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
                style={{ width: sliderWidth }}
                showValueIndicator
              />
            </Row>
          )}
          {colorModel === ColorModel.HSV && (
            <Row align="center">
              <Slider
                min={0}
                max={360}
                value={hue}
                onChange={(val) => {
                  setHsvUpdating(true);
                  setHue(val);
                }}
                style={{ width: sliderWidth }}
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
                style={{ width: sliderWidth }}
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
                style={{ width: sliderWidth }}
                showValueIndicator
              />
            </Row>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              maxWidth: '100vw',
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
                    whiteSpace: 'nowrap',
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
          <Toolbar
            variant={toolbarVariant}
            color={toolbarColor}
            items={[
              {
                icon: <SvgDockToBottom />,
                toggle: true,
                checked: toolbarVariant === 'floating',
                onClick: () =>
                  setToolbarVariant(
                    toolbarVariant === 'docked' ? 'floating' : 'docked'
                  ),
              },
              {
                icon: <SvgColors />,
                toggle: true,
                checked: toolbarColor === 'standard',
                onClick: () =>
                  setToolbarColor(
                    toolbarColor === 'standard' ? 'vibrant' : 'standard'
                  ),
              },
              { icon: <SvgAdd />, primary: true, fab: true },
              { icon: <SvgSquare /> },
              { icon: <SvgSquare />, href: '#' },
            ]}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
