# API Documentation glassine-paper 1.0.0

## Modules

<dl>
<dt><a href="#module_glassine-paper">glassine-paper</a></dt>
<dd><p>Glassine Paper - Material Design 3 React Components</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#Button">Button</a></dt>
<dd><p>Material Design 3 Button component</p>
</dd>
<dt><a href="#Slider">Slider</a></dt>
<dd><p>Material Design 3 Slider component</p>
</dd>
<dt><a href="#TextField">TextField</a></dt>
<dd><p>Material Design 3 TextField component</p>
</dd>
</dl>

<a name="module_glassine-paper"></a>

## glassine-paper
Glassine Paper - Material Design 3 React Components

<a name="Button"></a>

## Button
Material Design 3 Button component

**Kind**: global constant  
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
<a name="TextField"></a>

## TextField
Material Design 3 TextField component

**Kind**: global constant  
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
