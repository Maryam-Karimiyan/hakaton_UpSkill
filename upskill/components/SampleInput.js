import TextField from '@material-ui/core/TextField';

export const SampleInput=({
    label,
    variant,
    type,
    color,
    required,
    ...rest
})=>{
<TextField
label={label}
variant={variant}
type={type}
color={color}
required={required}
{...rest}
/>
}