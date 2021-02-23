import { Box, Input as ThemeInput, Textarea, Label } from 'theme-ui';

/**
 * Create Dynamic input
 *
 * @param {Object} props
 */
const Input = ({ label, name, input, placeholder, required }) => {
  let Component = input != 'textarea' ? ThemeInput : Textarea;

  return (
    <Box
      as="div"
      __themeKey="forms"
      variant="field"
    >
      <Label htmlFor={name}>
        {label}
      </Label>

      <Component
        type={input}
        name={name}
        placeholder={placeholder}
        required={required === true ? true : false}
      />

    </Box>
  )
}

export default Input;
