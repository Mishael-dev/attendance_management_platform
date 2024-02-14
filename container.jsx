import classNames from "classnames";

const Container = ({ sm = false, pad = false, children }) => {
  return (
    <div
      className={classNames("mx-auto px-6 ", {
        "pt-12": pad,
        "max-w-3xl": sm,
        "max-w-7xl": !sm,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
