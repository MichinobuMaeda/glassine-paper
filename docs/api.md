# API Documentation glassine-paper 1.2.7

## Modules

<dl>
<dt><a href="#module_glassine-paper">glassine-paper</a></dt>
<dd><p>Glassine Paper - Material Design 3 React Components</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#AppBar">AppBar</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Material Design 3 App bar component</p>
</dd>
<dt><a href="#Button">Button</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Material Design 3 Button component</p>
</dd>
<dt><a href="#Checkbox">Checkbox</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Material Design 3 Checkbox component.</p>
</dd>
<dt><a href="#Menu">Menu</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Material Design 3 Menu component</p>
</dd>
<dt><a href="#NavDrawer">NavDrawer</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Material Design 3 NavDrawer component</p>
</dd>
<dt><a href="#Radio">Radio</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Material Design 3 Radio button component.</p>
</dd>
<dt><a href="#Slider">Slider</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Material Design 3 Slider component</p>
</dd>
<dt><a href="#Switch">Switch</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Material Design 3 Switch component.</p>
</dd>
<dt><a href="#Tabs">Tabs</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Material Design 3 Tabs component</p>
</dd>
<dt><a href="#TextField">TextField</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Material Design 3 TextField component</p>
</dd>
<dt><a href="#Toolbar">Toolbar</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Material Design 3 Toolbar component</p>
</dd>
</dl>

<a name="module_glassine-paper"></a>

## glassine-paper
Glassine Paper - Material Design 3 React Components

<a name="AppBar"></a>

## AppBar ⇒ <code>JSX.Element</code>
Material Design 3 App bar component

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>AppBarProps</code> | The props for the AppBar component. |
| [props.id] | <code>string</code> | Element id |
| props.items | <code>Iterable.&lt;AppBarItemProps&gt;</code> | Array of AppBarItem configurations |
| [props.items[].key] | <code>string</code> \| <code>number</code> | Unique key for the item |
| [props.items[].id] | <code>string</code> | Element id for the item |
| [props.items[].type] | <code>&#x27;button&#x27;</code> \| <code>&#x27;appLogo&#x27;</code> \| <code>&#x27;title&#x27;</code> \| <code>&#x27;spacer&#x27;</code> | Item type: 'button', 'appLogo', 'title', or 'spacer' |
| [props.items[].icon] | <code>React.ReactNode</code> | Icon element (svg or img) |
| [props.items[].title] | <code>string</code> | Title text |
| [props.items[].subtitle] | <code>string</code> | Subtitle text |
| [props.items[].active] | <code>boolean</code> | Active state |
| [props.items[].hidden] | <code>boolean</code> | Hidden state |
| [props.items[].disabled] | <code>boolean</code> | Disabled state |
| [props.items[].onClick] | <code>function</code> | Click handler |
| [props.items[].href] | <code>string</code> | Link URL (renders as anchor tag) |
| [props.items[].style] | <code>React.CSSProperties</code> | Custom inline styles for the item |
| [props.items[].className] | <code>string</code> | Additional CSS classes for the item |
| [props.sticky] | <code>boolean</code> | Whether the app bar sticks to the top |
| [props.scrolled] | <code>boolean</code> | Whether the content is scrolled (affects styling) |
| [props.style] | <code>React.CSSProperties</code> | Custom inline styles |
| [props.className] | <code>string</code> | Additional CSS classes |

**Example**  
```js
import useDetectScroll, { Axis } from '@smakss/react-scroll-direction';

const [scrolled, setScrolled] = useState(false);
const { scrollPosition } = useDetectScroll({ axis: Axis.X });

useEffect(() => {
  setScrolled(scrollPosition.top > 0);
}, [scrollPosition]);

<AppBar
  sticky
  scrolled={scrolled}
  items={[
    {
      icon: <svg>...</svg>,
      onClick: () => {...},
    },
    {
      type: "appLogo",
      icon: <img src="./favicon.svg" alt="Glassine Paper" />,
    },
    {
      type: "title",
      title: "App name",
      subtitle: "Description",
    },
    { type: "spacer" },
    {
      icon: <svg>...</svg>,
      onClick: () => {...},
    },
  ]}
/>
```
<a name="Button"></a>

## Button ⇒ <code>JSX.Element</code>
Material Design 3 Button component

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>ButtonProps</code> | ButtonProps |
| [props.id] | <code>string</code> | Input id attribute |
| [props.name] | <code>string</code> | Input name attribute |
| [props.variant] | <code>&#x27;filled&#x27;</code> \| <code>&#x27;tonal&#x27;</code> \| <code>&#x27;danger&#x27;</code> \| <code>&#x27;error&#x27;</code> \| <code>&#x27;outlined&#x27;</code> \| <code>&#x27;elevated&#x27;</code> \| <code>&#x27;text&#x27;</code> | Button variant: 'filled', 'tonal', 'danger', 'error', 'outlined', 'elevated', or 'text' |
| [props.size] | <code>&#x27;xs&#x27;</code> \| <code>&#x27;sm&#x27;</code> \| <code>&#x27;md&#x27;</code> | Button size: 'xs', 'sm', or 'md' |
| [props.radius] | <code>&#x27;default&#x27;</code> \| <code>&#x27;square&#x27;</code> | Button radius: 'default' or 'square' |
| [props.label] | <code>string</code> | Label text |
| [props.icon] | <code>React.ReactNode</code> | Leading icon element |
| [props.width] | <code>&#x27;narrow&#x27;</code> \| <code>&#x27;default&#x27;</code> \| <code>&#x27;wide&#x27;</code> | Icon button width: 'narrow', 'default', or 'wide' |
| [props.type] | <code>&#x27;button&#x27;</code> \| <code>&#x27;submit&#x27;</code> \| <code>&#x27;reset&#x27;</code> \| <code>&#x27;toggle&#x27;</code> \| <code>&#x27;select&#x27;</code> | Button type: 'button', 'submit', 'reset', 'toggle', or 'select' |
| [props.href] | <code>string</code> | Link URL (renders as anchor tag) |
| [props.checked] | <code>boolean</code> | Checked state (for toggle/select types) |
| [props.disabled] | <code>boolean</code> | Disabled state |
| [props.onClick] | <code>function</code> | Click handler |
| [props.className] | <code>string</code> | Additional CSS class names |
| [props.style] | <code>React.CSSProperties</code> | Custom inline styles |

**Example**  
```js
// Regular button
<Button variant="filled" size="sm">
  Click me
</Button>
```
**Example**  
```js
// Button with leading icon and text
<Button
  variant="tonal"
  size="md"
  radius="square"
  icon={<svg>...</svg>}
  label="Label"
/>
```
**Example**  
```js
// Icon button
<Button
  variant="outlined"
  icon
  width="wide"
  icon={<svg>...</svg>}
 />
```
**Example**  
```js
// Link button
<Button
  variant="elevated"
  href="https://example.com"
  label="Go to Example"
/>
```
**Example**  
```js
// Toggle button (checkbox)
<Button
  variant="filled"
  type="toggle"
  checked={isToggled}
  icon={<svg>...</svg>}
  label="Toggle"
/>
```
<a name="Checkbox"></a>

## Checkbox ⇒ <code>JSX.Element</code>
Material Design 3 Checkbox component.

**Kind**: global constant  
**Returns**: <code>JSX.Element</code> - A Checkbox component.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| props | <code>CheckboxProps</code> |  | The properties for the Checkbox component. |
| [props.id] | <code>string</code> |  | The ID of the checkbox. |
| [props.name] | <code>string</code> |  | The name of the checkbox. |
| [props.error] | <code>boolean</code> | <code>false</code> | Whether the checkbox is in an error state. |
| [props.disabled] | <code>boolean</code> | <code>false</code> | Whether the checkbox is disabled. |
| [props.value] | <code>string</code> |  | The value of the checkbox. |
| [props.checked] | <code>boolean</code> |  | Whether the checkbox is checked. |
| [props.onClick] | <code>function</code> |  | The function to call when the checkbox is clicked. |
| [props.className] | <code>string</code> |  | Additional CSS classes to apply to the checkbox. |
| [props.style] | <code>CSSProperties</code> |  | Additional CSS styles to apply to the checkbox. |

**Example**  
```js
<Checkbox
 id="my-checkbox"
 name="my-checkbox"
 checked={isChecked}
 onClick={() => setIsChecked(!isChecked)}
/>
```
<a name="Menu"></a>

## Menu ⇒ <code>JSX.Element</code>
Material Design 3 Menu component

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>MenuProps</code> | MenuProps |
| [props.id] | <code>string</code> | Element id |
| props.items | <code>Iterable.&lt;MenuItemProps&gt;</code> | Array of MenuItem configurations |
| [props.items[].key] | <code>string</code> \| <code>number</code> | Unique key for the item |
| [props.items[].id] | <code>string</code> | Element id for the item |
| [props.items[].label] | <code>string</code> | Label text |
| [props.items[].leadingIcon] | <code>React.ReactNode</code> | Leading icon element |
| [props.items[].trailingIcon] | <code>React.ReactNode</code> | Trailing icon element |
| [props.items[].divider] | <code>boolean</code> | Show as divider (renders hr element) |
| [props.items[].active] | <code>boolean</code> | Active state |
| [props.items[].disabled] | <code>boolean</code> | Disabled state |
| [props.items[].onClick] | <code>function</code> | Click handler |
| [props.items[].href] | <code>string</code> | Link URL (renders as anchor tag) |
| [props.style] | <code>React.CSSProperties</code> | Custom inline styles |

**Example**  
```js
<Menu
  id="example-menu"
  items={[
    {
      leadingIcon: {<svg>...</svg>},
      label: "Item 1",
      trailingIcon: {<svg>...</svg>},
      active: true,
      onClick: () => {},
    },
    { divider: true },
    {
      label: "Item 2",
      href: "...",
    },
  ]}
/>
```
<a name="NavDrawer"></a>

## NavDrawer ⇒ <code>JSX.Element</code>
Material Design 3 NavDrawer component

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>NavDrawerProps</code> | NavDrawerProps |
| [props.id] | <code>string</code> | Element id |
| props.items | <code>Iterable.&lt;NavDrawerItemProps&gt;</code> | Array of NavDrawerItem configurations |
| [props.items[].key] | <code>string</code> \| <code>number</code> | Unique key for the item |
| [props.items[].id] | <code>string</code> | Element id for the item |
| [props.items[].label] | <code>string</code> | Label text |
| [props.items[].leadingIcon] | <code>React.ReactNode</code> | Leading icon element |
| [props.items[].trailingIcon] | <code>React.ReactNode</code> | Trailing icon element |
| [props.items[].divider] | <code>boolean</code> | Show as divider (renders hr element) |
| [props.items[].active] | <code>boolean</code> | Active state |
| [props.items[].hidden] | <code>boolean</code> | Hidden state |
| [props.items[].disabled] | <code>boolean</code> | Disabled state |
| [props.items[].onClick] | <code>function</code> | Click handler |
| [props.items[].href] | <code>string</code> | Link URL (renders as anchor tag) |
| [props.className] | <code>string</code> | Additional CSS class names |
| [props.style] | <code>React.CSSProperties</code> | Custom inline styles |

**Example**  
```js
<NavDrawer
  id="example-nav-drawer"
  items={[
    {
      leadingIcon: {<svg>...</svg>},
      label: "Item 1",
      trailingIcon: {<svg>...</svg>},
      active: true,
      onClick: () => {},
    },
    { divider: true },
    {
      label: "Item 2",
      href: "...",
    },
  ]}
/>
```
<a name="Radio"></a>

## Radio ⇒ <code>JSX.Element</code>
Material Design 3 Radio button component.

**Kind**: global constant  
**Returns**: <code>JSX.Element</code> - A Radio component.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| props | <code>RadioProps</code> |  | The properties for the Radio component. |
| [props.id] | <code>string</code> |  | The ID of the radio button. |
| [props.name] | <code>string</code> |  | The name of the radio button. |
| [props.disabled] | <code>boolean</code> | <code>false</code> | Whether the radio button is disabled. |
| [props.value] | <code>string</code> |  | The value of the radio button. |
| [props.checked] | <code>boolean</code> |  | Whether the radio button is checked. |
| [props.onClick] | <code>function</code> |  | The function to call when the radio button is clicked. |
| [props.className] | <code>string</code> |  | Additional CSS classes to apply to the radio button. |
| [props.style] | <code>CSSProperties</code> |  | Additional CSS styles to apply to the radio button. |

**Example**  
```js
<Radio
 id="my-radio"
 name="my-radio-group"
 value="option1"
 checked={selectedValue === 'option1'}
 onClick={() => setSelectedValue('option1')}
/>
```
<a name="Slider"></a>

## Slider ⇒ <code>JSX.Element</code>
Material Design 3 Slider component

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>SliderProps</code> | SliderProps |
| [props.id] | <code>string</code> | Input id attribute |
| [props.name] | <code>string</code> | Input name attribute |
| [props.min] | <code>number</code> | Minimum value |
| [props.max] | <code>number</code> | Maximum value |
| [props.step] | <code>number</code> | Step increment |
| props.value | <code>number</code> | Current value |
| [props.displayValue] | <code>string</code> | Display value at indicator |
| [props.size] | <code>&#x27;xs&#x27;</code> \| <code>&#x27;sm&#x27;</code> \| <code>&#x27;md&#x27;</code> | Size variant: 'xs', 'sm', or 'md' |
| [props.orientation] | <code>&#x27;horizontal&#x27;</code> \| <code>&#x27;top-bottom&#x27;</code> \| <code>&#x27;bottom-top&#x27;</code> | Orientation: 'horizontal', 'top-bottom', or 'bottom-top' |
| [props.showValueIndicator] | <code>boolean</code> | Show value indicator |
| [props.options] | <code>Array.&lt;SliderOption&gt;</code> | Datalist options array |
| props.options[].value | <code>number</code> | Option value |
| [props.options[].key] | <code>string</code> | Optional unique key for the option |
| [props.onChange] | <code>function</code> | Change handler function |
| [props.className] | <code>string</code> | Additional CSS class names |
| [props.style] | <code>React.CSSProperties</code> | Custom inline styles |

**Example**  
```js
<Slider
  value={50}
  min={0}
  max={100}
  step={10}
  showValueIndicator
  options={[
    { value: 0 },
    { value: 25 },
    { value: 50 },
    { value: 75 },
    { value: 100 }
  ]}
  onChange={(value) => console.log(value)}
  style={{ width: "16em"}}
/>
```
**Example**  
```js
<Slider
  value={30}
  orientation="top-bottom"
  size="md"
  style={{ height: "16em"}}
/>
```
<a name="Switch"></a>

## Switch ⇒ <code>JSX.Element</code>
Material Design 3 Switch component.

**Kind**: global constant  
**Returns**: <code>JSX.Element</code> - A Switch component.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| props | <code>SwitchProps</code> |  | The properties for the Switch component. |
| [props.id] | <code>string</code> |  | The ID of the switch. |
| [props.name] | <code>string</code> |  | The name of the switch. |
| [props.disabled] | <code>boolean</code> | <code>false</code> | Whether the switch is disabled. |
| [props.value] | <code>string</code> |  | The value of the switch. |
| [props.checked] | <code>boolean</code> |  | Whether the switch is checked. |
| [props.onClick] | <code>function</code> |  | The function to call when the switch is clicked. |
| [props.className] | <code>string</code> |  | Additional CSS classes to apply to the switch. |
| [props.style] | <code>CSSProperties</code> |  | Additional CSS styles to apply to the switch. |

**Example**  
```js
<Switch
 id="my-switch"
 name="my-switch"
 checked={isChecked}
 onClick={() => setIsChecked(!isChecked)}
/>
```
<a name="Tabs"></a>

## Tabs ⇒ <code>JSX.Element</code>
Material Design 3 Tabs component

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>TabsProps</code> | TabsProps |
| [props.id] | <code>string</code> | Element id |
| props.items | <code>Iterable.&lt;TabItemProps&gt;</code> | Array of TabItem configurations |
| [props.items[].key] | <code>string</code> \| <code>number</code> | Unique key for the item |
| [props.items[].id] | <code>string</code> | Element id for the item |
| props.items[].label | <code>string</code> | Label text |
| [props.items[].leadingIcon] | <code>React.ReactNode</code> | Leading icon element |
| [props.items[].active] | <code>boolean</code> | Active state |
| [props.items[].disabled] | <code>boolean</code> | Disabled state |
| [props.items[].onClick] | <code>function</code> | Click handler |
| [props.items[].href] | <code>string</code> | Link URL (renders as anchor tag) |
| [props.style] | <code>React.CSSProperties</code> | Custom inline styles |

**Example**  
```js
<Tabs
  id="example-tabs"
  items={[
    {
      leadingIcon: {<svg>...</svg>},
      label: "Item 1",
    },
    {
      label: "Item 2",
    },
  ]}
/>
```
<a name="TextField"></a>

## TextField ⇒ <code>JSX.Element</code>
Material Design 3 TextField component

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>TextFieldProps</code> | TextFieldProps |
| [props.id] | <code>string</code> | Input id attribute |
| [props.name] | <code>string</code> | Input name attribute |
| [props.variant] | <code>&#x27;filled&#x27;</code> \| <code>&#x27;outlined&#x27;</code> | Variant of the text field: 'filled' or 'outlined' |
| [props.type] | <code>&#x27;text&#x27;</code> \| <code>&#x27;email&#x27;</code> \| <code>&#x27;number&#x27;</code> \| <code>&#x27;password&#x27;</code> \| <code>&#x27;tel&#x27;</code> \| <code>&#x27;url&#x27;</code> | Input type: 'text', 'email', 'number', 'password', 'tel', or 'url' |
| props.label | <code>string</code> | Label text |
| [props.placeholder] | <code>string</code> | Placeholder text (should match label) |
| [props.value] | <code>string</code> \| <code>number</code> | Current value |
| [props.lineCount] | <code>number</code> | Number of lines for multiline input |
| [props.error] | <code>boolean</code> | Error state |
| [props.readonly] | <code>boolean</code> | Readonly state |
| [props.disabled] | <code>boolean</code> | Disabled state |
| [props.supportingText] | <code>string</code> | Supporting text or error message |
| [props.leadingIcon] | <code>React.ReactNode</code> | Leading icon element |
| [props.trailingIcon] | <code>React.ReactNode</code> | Trailing icon element |
| [props.onChange] | <code>function</code> | Change handler |
| [props.onBlur] | <code>function</code> | Blur handler |
| [props.onFocus] | <code>function</code> | Focus handler |
| [props.className] | <code>string</code> | Additional CSS class names |
| [props.style] | <code>React.CSSProperties</code> | Custom inline styles |
| [props.innerStyle] | <code>React.CSSProperties</code> | Custom inline styles for input element |

**Example**  
```js
<TextField
  variant="filled"
  label="Email"
  placeholder="Email"
  type="email"
  supportingText="Enter your email address"
/>
```
**Example**  
```js
<TextField
  variant="outlined"
  label="Password"
  placeholder="Password"
  type="password"
  error={true}
  supportingText="Password is required"
/>
```
<a name="Toolbar"></a>

## Toolbar ⇒ <code>JSX.Element</code>
Material Design 3 Toolbar component

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>ToolbarProps</code> | ToolbarProps |
| [props.id] | <code>string</code> | Element id |
| props.items | <code>Iterable.&lt;ToolbarItemProps&gt;</code> | Array of ToolbarItem configurations |
| [props.items[].key] | <code>string</code> \| <code>number</code> | Unique key for the item |
| [props.items[].id] | <code>string</code> | Element id for the item |
| [props.items[].label] | <code>string</code> | Label text |
| [props.items[].icon] | <code>React.ReactNode</code> | Icon element |
| [props.items[].disabled] | <code>boolean</code> | Disabled state |
| [props.items[].onClick] | <code>function</code> | Click handler |
| [props.items[].href] | <code>string</code> | Link URL (renders as anchor tag) |
| [props.items[].toggle] | <code>boolean</code> | Renders as toggle button if true |
| [props.items[].checked] | <code>boolean</code> | Toggle button checked state |
| [props.items[].primary] | <code>boolean</code> | Primary button styling if true |
| [props.items[].fab] | <code>boolean</code> | Renders as floating action button if true on floating toolbars |
| [props.variant] | <code>&#x27;docked&#x27;</code> \| <code>&#x27;floating&#x27;</code> | Toolbar variant: 'docked' or 'floating' |
| [props.color] | <code>&#x27;standard&#x27;</code> \| <code>&#x27;vibrant&#x27;</code> | Toolbar color scheme: 'standard' or 'vibrant' |
| [props.style] | <code>React.CSSProperties</code> | Custom inline styles |

**Example**  
```js
<Toolbar
  id="example-toolbar"
  items={[
    {
      icon: {<svg>...</svg>},
      onClick: () => {},
    },
    { divider: true },
    {
      icon: {<svg>...</svg>},
      href: "...",
    },
  ]}
/>
```
