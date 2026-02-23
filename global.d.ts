// types.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'jio-navbar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { property?: string };
    'jio-footer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { property?: string };
  }
}