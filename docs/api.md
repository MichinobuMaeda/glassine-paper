# API Documentation glassine-paper 1.0.0

## Modules

<dl>
<dt><a href="#module_glassine-paper">glassine-paper</a></dt>
<dd><p>Glassine Paper - Material Design 3 React Components</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#AppBarItem">AppBarItem</a> ⇒</dt>
<dd><p>Material Design 3 App bar item component</p>
</dd>
<dt><a href="#AppBar">AppBar</a> ⇒</dt>
<dd><p>Material Design 3 App bar component</p>
</dd>
<dt><a href="#Button">Button</a> ⇒</dt>
<dd><p>Material Design 3 Button component</p>
</dd>
<dt><a href="#MenuItem">MenuItem</a> ⇒</dt>
<dd><p>Material Design 3 Menu item component</p>
</dd>
<dt><a href="#Menu">Menu</a> ⇒</dt>
<dd><p>Material Design 3 Menu component</p>
</dd>
<dt><a href="#Slider">Slider</a></dt>
<dd><p>Material Design 3 Slider component</p>
</dd>
<dt><a href="#TabItem">TabItem</a> ⇒</dt>
<dd><p>Material Design 3 Tab item component</p>
</dd>
<dt><a href="#Tabs">Tabs</a> ⇒</dt>
<dd><p>Material Design 3 Tabs component</p>
</dd>
<dt><a href="#TextField">TextField</a> ⇒</dt>
<dd><p>Material Design 3 TextField component</p>
</dd>
</dl>

<a name="module_glassine-paper"></a>

## glassine-paper
Glassine Paper - Material Design 3 React Components

<a name="AppBarItem"></a>

## AppBarItem ⇒
Material Design 3 App bar item component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | AppBarItemProps |

**Example**  
```js
<MenuItem onClick={() => {}} active={true}>
  <svg>...</svg>
  Item 1
</MenuItem>
```
**Example**  
```js
<MenuItem href="...">
  Item 2
</MenuItem>
```
<a name="AppBar"></a>

## AppBar ⇒
Material Design 3 App bar component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | AppBarProps |

**Example**  
```js
const [scrolled, setScrolled] = useState(false);

<div
  className="content-area"
  onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 0)}
>
  <AppBar sticky scrolled={scrolled}>
    <AppBarItem onClick={() => {}} active={true}>
      <svg>...</svg>
    </AppBarItem>
    <img src="./favicon.svg" alt="Glassine Paper" />
    <AppBarTitle title="App Title" subtitle="Subtitle" />
    <AppBarItem href="...">
      <svg>...</svg>
    </AppBarItem>
  </AppBar>
  ... ...
</div>
```
<a name="Button"></a>

## Button ⇒
Material Design 3 Button component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | ButtonProps |

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
<Button variant="tonal" size="md" radius="square">
  <svg>...</svg>
  Label
</Button>
```
**Example**  
```js
// Icon button
<Button variant="outlined" icon width="wide">
  <svg>...</svg>
</Button>
```
**Example**  
```js
// Link button
<Button variant="elevated" href="https://example.com">
  Go to Example
</Button>
```
**Example**  
```js
// Toggle button (checkbox)
<Button variant="filled" type="toggle" checked={isToggled}>
  <svg>...</svg>
  Toggle
</Button>
```
<a name="MenuItem"></a>

## MenuItem ⇒
Material Design 3 Menu item component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | MenuItemProps |

**Example**  
```js
<MenuItem onClick={() => {}} active={true}>
  <svg>...</svg>
  Item 1
</MenuItem>
```
**Example**  
```js
<MenuItem href="...">
  Item 2
</MenuItem>
```
<a name="Menu"></a>

## Menu ⇒
Material Design 3 Menu component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | MenuProps |

**Example**  
```js
<Menu id="example-menu">
  <MenuItem onClick={() => {}} active={true}>
    <svg>...</svg>
    Item 1
  </MenuItem>
  <MenuItem href="...">
    Item 2
  </MenuItem>
</Menu>
```
<a name="Slider"></a>

## Slider
Material Design 3 Slider component

**Kind**: global constant  
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
/>
```
**Example**  
```js
<Slider
  value={30}
  orientation="top-bottom"
  size="md"
  width="16em"
/>
```
<a name="TabItem"></a>

## TabItem ⇒
Material Design 3 Tab item component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | TabItemProps |

**Example**  
```js
<TabItem onClick={() => {}} active={true}>
  <svg>...</svg>
  Item 1
</TabItem>
```
**Example**  
```js
<TabItem href="...">
  Item 2
</TabItem>
```
<a name="Tabs"></a>

## Tabs ⇒
Material Design 3 Tabs component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | TabsProps |

**Example**  
```js
<Tabs id="example-tabs">
  <TabItem onClick={() => {}} active={true}>
    <svg>...</svg>
    Item 1
  </TabItem>
  <TabItem href="...">
    Item 2
  </TabItem>
</Tabs>
```
<a name="TextField"></a>

## TextField ⇒
Material Design 3 TextField component

**Kind**: global constant  
**Returns**: JSX.Element  

| Param | Description |
| --- | --- |
| props | TextFieldProps |

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
