# Form

Form consists of input, select, radio, checkbox and other controls, for collecting, validating, and submitting data.

## Basic Usage

Basic form data control, including various form items.

::: preview
demo-preview=../../demo/form/Basic.vue
:::

## Form Validation

Form component provides the function of form validation.

::: preview
demo-preview=../../demo/form/Validation.vue
:::

## Label Position

You can change the position of form field labels by setting `label-position` attribute.

::: preview
demo-preview=../../demo/form/LabelPosition.vue
:::

## API

### Form Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| model | Form data object | `Record<string, any>` | — |
| rules | Form validation rules | `FormRules` | — |
| disabled | Whether to disable form | `boolean` | `false` |
| labelWidth | Label width | `number \| string` | — |
| labelPosition | Label position | `'left' \| 'right' \| 'top'` | `'right'` |
| labelSuffix | Label suffix | `string` | — |
| showMessage | Whether to show validation error message | `boolean` | `true` |
| hideRequiredAsterisk | Whether to hide red asterisk | `boolean` | `false` |
| requiredAsteriskPosition | Asterisk position | `'left' \| 'right'` | `'left'` |

### Form Events

| Event | Description | Parameters |
| --- | --- | --- |
| validate | Triggered after field validation | `(prop: string, isValid: boolean, message: string) => void` |

### Form Exposes

| Method | Description | Type |
| --- | --- | --- |
| validate | Validate the whole form | `(callback?: FormValidateCallback) => Promise<boolean>` |
| validateField | Validate specific fields | `(props?: string[], callback?: FormValidateCallback) => Promise<boolean>` |
| resetFields | Reset form fields | `(props?: string[]) => void` |
| clearValidate | Clear validation status | `(props?: string[]) => void` |

### FormItem Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| prop | Key name of model | `string \| string[]` | — |
| label | Label text | `string` | — |
| labelWidth | Label width | `number \| string` | — |
| required | Whether required | `boolean` | `false` |
| rules | Validation rules | `FormItemRule[]` | — |
| error | Error message | `string` | — |
| showMessage | Whether to show validation error | `boolean` | `true` |
| disabled | Whether disabled | `boolean` | `false` |

### FormItem Slots

| Slot | Description |
| --- | --- |
| default | Form item content |
| label | Custom label |
| error | Custom error message |
