export type ButtonProps = {
  title: string;
} & JSX.IntrinsicElements['button'];

export function Button({title, ...rest}: ButtonProps) {
  return <button {...rest}>{title}</button>;
}
