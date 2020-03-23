import React from "react";

const defaultState = {
    lang: Array.from(navigator.language).slice(0, 2).join(''),
    toggleLang: () => { },
};

const LangContext = React.createContext(defaultState)

// Getting lang mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportslangMode = () =>
    window.matchMedia("(prefers-color-scheme: lang)").matches === true;

class LangProvider extends React.Component {
    state = {
        lang: navigator.language || 'en',
    };

    togglelang = () => {
        let lang = this.state.lang === 'en' ? 'fr' : 'en';
        localStorage.setItem("lang", JSON.stringify(lang));
        this.setState({ lang });
    };

  componentDidMount() {
    // Getting lang mode value from localStorage!
      const lslang = JSON.parse(localStorage.getItem("lang"));
    if (lslang) {
        this.setState({ lang: lslang });
    } else if (supportslangMode()) {
        this.setState({ lang: true });
      };
    };

  render() {
      const { children } = this.props;
      const { lang } = this.state;
    return (
      <LangContext.Provider
        value={{
          lang,
          togglelang: this.togglelang,
        }}
      >
        {children}
      </LangContext.Provider>
    );
    };
};

export default LangContext

export { LangProvider }