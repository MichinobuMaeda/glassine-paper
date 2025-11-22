# API Documentation glassine-paper 1.0.0

## Modules

<dl>
<dt><a href="#module_glassine-paper">glassine-paper</a></dt>
<dd><p>Glassine Paper - Material Design 3 React Components</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#AppBar">AppBar</a> ⇒</dt>
<dd><p>Material Design 3 App bar component</p>
</dd>
<dt><a href="#Button">Button</a> ⇒</dt>
<dd><p>Material Design 3 Button component</p>
</dd>
<dt><a href="#Menu">Menu</a> ⇒</dt>
<dd><p>Material Design 3 Menu component</p>
</dd>
<dt><a href="#NavDrawer">NavDrawer</a> ⇒</dt>
<dd><p>Material Design 3 NavDrawer component</p>
</dd>
<dt><a href="#Slider">Slider</a> ⇒</dt>
<dd><p>Material Design 3 Slider component</p>
</dd>
<dt><a href="#Tabs">Tabs</a> ⇒</dt>
<dd><p>Material Design 3 Tabs component</p>
</dd>
<dt><a href="#TextField">TextField</a> ⇒</dt>
<dd><p>Material Design 3 TextField component</p>
</dd>
<dt><a href="#Toolbar">Toolbar</a> ⇒</dt>
<dd><p>Material Design 3 Toolbar component</p>
</dd>
</dl>

<a name="module_glassine-paper"></a>

## glassine-paper
Glassine Paper - Material Design 3 React Components

<a name="AppBar"></a>

## AppBar ⇒
Material Design 3 App bar component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | AppBarProps |
| props.id | Element id |
| props.items | Array of AppBarItem configurations |
| props.items[].key | Unique key for the item |
| props.items[].id | Element id for the item |
| props.items[].type | Item type: 'button', 'appLogo', 'title', or 'spacer' |
| props.items[].icon | Icon element (svg or img) |
| props.items[].title | Title text |
| props.items[].subtitle | Subtitle text |
| props.items[].active | Active state |
| props.items[].hidden | Hidden state |
| props.items[].disabled | Disabled state |
| props.items[].onClick | Click handler |
| props.items[].href | Link URL (renders as anchor tag) |
| props.sticky | Whether the app bar sticks to the top |
| props.scrolled | Whether the content is scrolled (affects styling) |
| props.style | Custom inline styles |

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

## Button ⇒
Material Design 3 Button component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | ButtonProps |
| props.id | Input id attribute |
| props.name | Input name attribute |
| props.variant | Button variant: 'filled', 'tonal', 'danger', 'error', 'outlined', 'elevated', or 'text' |
| props.size | Button size: 'xs', 'sm', or 'md' |
| props.radius | Button radius: 'default' or 'square' |
| props.label | Label text |
| props.icon | Leading icon element |
| props.width | Icon button width: 'narrow', 'default', or 'wide' |
| props.type | Button type: 'button', 'submit', 'reset', 'toggle', or 'select' |
| props.href | Link URL (renders as anchor tag) |
| props.checked | Checked state (for toggle/select types) |
| props.disabled | Disabled state |
| props.onClick | Click handler |
| props.className | Additional CSS class names |
| props.style | Custom inline styles |

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
<a name="Menu"></a>

## Menu ⇒
Material Design 3 Menu component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | MenuProps |
| props.id | Element id |
| props.items | Array of MenuItem configurations |
| props.items[].key | Unique key for the item |
| props.items[].id | Element id for the item |
| props.items[].label | Label text |
| props.items[].leadingIcon | Leading icon element |
| props.items[].trailingIcon | Trailing icon element |
| props.items[].divider | Show as divider (renders hr element) |
| props.items[].active | Active state |
| props.items[].disabled | Disabled state |
| props.items[].onClick | Click handler |
| props.items[].href | Link URL (renders as anchor tag) |
| props.style | Custom inline styles |

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

## NavDrawer ⇒
Material Design 3 NavDrawer component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | NavDrawerProps |
| props.id | Element id |
| props.items | Array of NavDrawerItem configurations |
| props.items[].key | Unique key for the item |
| props.items[].id | Element id for the item |
| props.items[].label | Label text |
| props.items[].leadingIcon | Leading icon element |
| props.items[].trailingIcon | Trailing icon element |
| props.items[].divider | Show as divider (renders hr element) |
| props.items[].active | Active state |
| props.items[].hidden | Hidden state |
| props.items[].disabled | Disabled state |
| props.items[].onClick | Click handler |
| props.items[].href | Link URL (renders as anchor tag) |
| props.className | Additional CSS class names |
| props.style | Custom inline styles |

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
<a name="Slider"></a>

## Slider ⇒
Material Design 3 Slider component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | SliderProps |
| props.id | Input id attribute |
| props.name | Input name attribute |
| props.min | Minimum value |
| props.max | Maximum value |
| props.step | Step increment |
| props.value | Current value |
| props.size | Size variant: 'xs', 'sm', or 'md' |
| props.orientation | Orientation: 'horizontal', 'top-bottom', or 'bottom-top' |
| props.showValueIndicator | Show value indicator |
| props.options | Datalist options array |
| props.options[].value | Option value |
| props.options[].key | Optional unique key for the option |
| props.onChange | Change handler function |
| props.className | Additional CSS class names |
| props.style | Custom inline styles |

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
<a name="Tabs"></a>

## Tabs ⇒
Material Design 3 Tabs component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | TabsProps |
| props.id | Element id |
| props.items | Array of TabItem configurations |
| props.items[].key | Unique key for the item |
| props.items[].id | Element id for the item |
| props.items[].label | Label text |
| props.items[].leadingIcon | Leading icon element |
| props.items[].active | Active state |
| props.items[].disabled | Disabled state |
| props.items[].onClick | Click handler |
| props.items[].href | Link URL (renders as anchor tag) |
| props.style | Custom inline styles |

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

## TextField ⇒
Material Design 3 TextField component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | TextFieldProps |
| props.id | Input id attribute |
| props.name | Input name attribute |
| props.variant | Variant of the text field: 'filled' or 'outlined' |
| props.type | Input type: 'text', 'email', 'number', 'password', 'tel', or 'url' |
| props.label | Label text |
| props.placeholder | Placeholder text (should match label) |
| props.value | Current value |
| props.error | Error state |
| props.disabled | Disabled state |
| props.supportingText | Supporting text or error message |
| props.leadingIcon | Leading icon element |
| props.trailingIcon | Trailing icon element |
| props.onChange | Change handler |
| props.onBlur | Blur handler |
| props.onFocus | Focus handler |
| props.className | Additional CSS class names |
| props.style | Custom inline styles |

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

## Toolbar ⇒
Material Design 3 Toolbar component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | ToolbarProps |
| props.id | Element id |
| props.items | Array of ToolbarItem configurations |
| props.items[].key | Unique key for the item |
| props.items[].id | Element id for the item |
| props.items[].label | Label text |
| props.items[].icon | Icon element |
| props.items[].disabled | Disabled state |
| props.items[].onClick | Click handler |
| props.items[].href | Link URL (renders as anchor tag) |
| props.items[].toggle | Renders as toggle button if true |
| props.items[].checked | Toggle button checked state |
| props.items[].primary | Primary button styling if true |
| props.items[].fab | Renders as floating action button if true on floating toolbars |
| props.variant | Toolbar variant: 'docked' or 'floating' |
| props.color | Toolbar color scheme: 'standard' or 'vibrant' |
| props.style | Custom inline styles |

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
