import React from "react"
import { StyledRegisterVideo } from "./styles"
import { createClient } from "@supabase/supabase-js"
//Custom Hook
function useForm(propsForm) {
    const [values, setValues] = React.useState(propsForm.initialValues);
    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
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




const PROJECT_URL = "https://munzauqkkrspfolipuyq.supabase.co";
const PUBLICKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11bnphdXFra3JzcGZvbGlwdXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODAwODAsImV4cCI6MTk4Mzg1NjA4MH0.BiM1R1AkiT0K1MDJjCfGPMiml6KBsKDFTcTo08tIRn4"
const supabase = createClient(PROJECT_URL, PUBLICKEY);

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { title: "", url: "" }
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
                        //Contract(interface) between front e back
                        supabase.from("video").insert({
                            title: formCadastro.values.title,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: "cine",
                        })
                        .then((oqueveio) => {
                            console.log(oqueveio);
                        })
                        .catch((err) => {
                            console.log(err);
                        })

                        setformVisible(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setformVisible(false)}>
                                x
                            </button>
                            <input
                                placeholder="Título do Vídeo"
                                name="title"
                                value={formCadastro.values.title}
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