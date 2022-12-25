# Project template for Tizen Web Apps based on ReactJS.

#### This template base includes:

- [Typescritpt](https://www.npmjs.com/package/typescript);
- [Create react app](https://www.npmjs.com/package/create-react-app);
- [Craco](https://www.npmjs.com/package/@craco/craco);
- [@tize-tv/wits](https://github.com/Samsung/Wits);
- [ESlint](https://www.npmjs.com/package/eslint), [Prettier](https://www.npmjs.com/package/prettier), [StyleLint](https://www.npmjs.com/package/stylelint), [Editor config](https://editorconfig.org/), [husky](https://www.npmjs.com/package/husky) and [LintStaged](https://www.npmjs.com/package/lint-staged);

#### Related packages:

- [Sass](https://www.npmjs.com/package/sass);
- [TizenTV web api](https://www.npmjs.com/package/tizen-tv-webapis);
- [@noriginmedia/norigin-spatial-navigation](https://www.npmjs.com/package/@noriginmedia/norigin-spatial-navigation);
- [axios](https://www.npmjs.com/package/axios);
- [classnames](https://www.npmjs.com/package/classnames);
- [react-route-dom](https://reactrouter.com/en/main);

## Availeble scripts:

`npm start` - to start project in develompent mode;

`npm start:tv` - to start project in develompent mode remote on TV with hot reaload;

`npm run build` - to build project;

`lint:es:fix` - to fix JS and TS problems;

`lint:css:fix` - to fix CSS and SCSS problems;

## Configaration files:

`craco.config.ts` - for configuring **React** application;

`tsconfig.json` - for configuring **typescript**;

`.witsconfig.json` - for configuring remote running and debugging;

`.eslintrc.json, .eslintrc-stage.json` - for configuring **ESLint** for development and stage;

`.stylelintrc.json, .stylelintrc-stage.json` - for configuring **StyleLint** for development and stage;

`.prettierrc` - for configuring **prettier** for development and stage;

`.editorconfig` - for configuring **Editor config**;

## Development and debugging in browser:

1. Open `Developer tools`;

2. Create emulated device:

   - Go to `Developer tools` -> `Settings` -> `Devices`;
   - Press `Add custom device` button and create device with 1920 x 1080 resolution;
     > ![Device creating UI image](readme_assets/emulated-devices.png)

3. Enable `Toggle device toolbar`;

   > ![Toolbar image](readme_assets/toolbar-image.png)

4. Select created device;

   > ![Selecting device image](readme_assets/select-device.png)

5. You are ready to development :)

## Development:

Creating focusable components:

### **<Focusable/>**

For creating component focusable use **`<Focusable/>`** component.

This component create focusable wrapper for you.

#### **`<Focusable>`** component interface:

    interface IProps extends UseFocusableConfig {
        as?: any;
        className?: string;
        focusedClassName?: string;
        defaultFocused?: boolean;
        children?: ReactNode | Array<ReactNode>;
        style?: CSSProperties;
    }

**`as?: any`** - specify this property to explicitly specify a **`tag`** for the generated wrapper.

**Default:** `"div"`.

**Available:** any `HTML5` tag specified as a `string`. If you want to specify a tag that doesn't require closing, use the following syntax:

```
<Focusable as='img' />`
```

> **Don't use** this syntax for unclosed tags( `img`,`hr` etc. ):

```
<Focusable as="img">...</Focusable>
```

`className?: string` - `className` prop.

**Default:** `''`

`focusedClassName?: string` - `className` prop for focused element.

**Default:** `'focused'`

`defaultFocused?: boolean` -
a property indicating whether the element will have focus on the first render.

**Default:** `false`

`style?: CSSProperties` - React `style` attribute.

`children?: ReactNode | Array<ReactNode>` - child nodes. Don't use this as prop.

`UseFocusableConfig?` - props for [`useFocusable`](https://github.com/NoriginMedia/norigin-spatial-navigation#usefocusable-hook) hook;

### **<FocusableContainer/>**

For creating focusable container use **`<FocusableContainer>...</FocusableContainer>`** component.

This component create focusable container for you **`<Focusable/>`** components.

#### **`<FocusableContainer>`** component interface:

    interface IProps extends UseFocusableConfig {
        children: ReactNode | Array<ReactNode>;
    	as?: any;
        className?: string;
        hasFocusedChildClassName?: string;
        defaultFocused?: boolean;
        style?: CSSProperties;
    }

**`as?: any`** - specify this property to explicitly specify a **`tag`** for the generated wrapper.

**Default:** `"div"`.

**Available:** any `HTML5` closing tag specified as a `string`.

> **Don't use** this unclosed tags ( `img`,`hr` etc. ) for this component.

`className?: string` - `className` prop.

**Default:** `''`

`hasFocusedChildClassName?: string` - `className` prop when container has focused children.

**Default:** `''`

`defaultFocused?: boolean` -
a property indicating whether the element will have focus on the first render.

**Default:** `false`

`style?: CSSProperties` - React `style` attribute.

`children?: ReactNode | Array<ReactNode>` - child nodes. Don't use this as prop.

`UseFocusableConfig?` - props for [`useFocusable`](https://github.com/NoriginMedia/norigin-spatial-navigation#usefocusable-hook) hook;

### <FocusProvider />

This component wrapping you application and provides **`useFocusContext`** hook.

**`useFocusContext`** - hook take you possibility for managing focus in any component.

Hook output decribed [here](https://github.com/NoriginMedia/norigin-spatial-navigation#hook-output).

**Using:**

Call **`useFocusContext`** in any place of your application. Hook was return you result decribed [here](https://github.com/NoriginMedia/norigin-spatial-navigation#hook-output).

- Use `setFocus` method to manually set the focus to a component providing its `focusKey`.

- Use `getCurrentFocusKey` method to get the currently focused component's focus key.

- Use `navigateByDirection(direction: string, focusDetails: FocusDetails)` method to manually navigation to a certain direction.

- Use `pause` method to pause all the key event handlers.

- Use `resume` method to resume all the key event handlers.
