export function H1({ children }) {
  return (
    <h1 className="scroll-m-20 text-4xl  tracking-tight lg:text-7xl font-courierHeader capitalize">
      {children}
    </h1>
  );
}

export function H2({ children }) {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl lg:text-4xl tracking-tight first:mt-0 font-courierHeader capitalize">
      {children}
    </h2>
  );
}

export function H3({ children }) {
  return (
    <h3 className="scroll-m-20 pb-2 text-2xl lg:text-3xl tracking-tight first:mt-0 font-courierParagraph capitalize">
      {children}
    </h3>
  );
}

export function H4({ children }) {
  return (
    <h4 className="scroll-m-20 pb-2 text-xl lg:text-lg tracking-tight first:mt-0 font-courierParagraph capitalize">
      {children}
    </h4>
  );
}

export function P({children}) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 font-courierParagraph">
      {children}
    </p>
  )
}

