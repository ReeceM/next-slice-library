import { Box, Input as ThemeInput, Textarea, Label } from 'theme-ui';

/**
 * Create Dynamic input
 *
 * @param {Object} props
 */
const Input = ({ label, input, placeholder, required }) => {
  return (
    <Box
      as="div"
      __themeKey="forms"
      variant="field"
    >
      <Label>
        {label}
      </Label>
      {
        input !== 'textarea'
          ? <ThemeInput
            type={input}
            placeholder={placeholder}
            required={required === true ? true : false}
          />
          : <Textarea />
      }
    </Box>
  )
}

export default Input;
