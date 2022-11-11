import React from "react"
import { StyledRegisterVideo } from "./styles"
//Custom Hook
function useForm(propsForm) {
    const [values, setValues] = React.useState(propsForm.initialValues);
    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
            console.log(name);
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "", url: "" }
    });
    const [formVisible, setformVisible] = React.useState(false);    
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setformVisible(true)}>
                +
            </button>
            {formVisible
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        setformVisible(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setformVisible(false)}>
                                x
                            </button>
                            <input
                                placeholder="Título do Vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />
                            <input 
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : null}
        </StyledRegisterVideo>
        //ternary and short circuit operators
    )
}