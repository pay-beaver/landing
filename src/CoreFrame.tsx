import { useContext } from "react";
import { OnMobileContext } from "./Responsive";
import { Footer } from "./Footer";

export function CoreFrame({ children }: any) {
  const onMobile = useContext(OnMobileContext);

  const mobileHeader = (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Beaver Crypto Subscriptions
      </h1>
      <a
        href="https://docs.paybeaver.xyz/"
        style={{
          display: "block",
          fontSize: 18,
          textAlign: "right",
        }}
      >
        Documentation
      </a>
    </div>
  );

  const desktopHeader = (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div />
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Beaver Crypto Subscriptions
        </h1>
        <a
          href="https://docs.paybeaver.xyz/"
          style={{
            fontSize: 18,
            marginLeft: 48,
          }}
        >
          Documentation
        </a>
      </header>
    </div>
  );

  return (
    <div
      style={{
        paddingLeft: onMobile ? 4 : 200,
        paddingRight: onMobile ? 4 : 200,
      }}
    >
      {onMobile ? mobileHeader : desktopHeader}
      {children}
      <Footer />
    </div>
  );
}
