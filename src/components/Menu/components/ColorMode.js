import React from "react";
export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert("Precisa de configuração") },
    toggleMode: () => { alert("Precisa configurar") },
});
export function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.inicialMode)

    function toggleMode() {
        if(mode === "dark") setMode("light")
        if(mode === "light") setMode("dark")
    }
    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode }}>
            {props.children}
        </ColorModeContext.Provider>
    )
}