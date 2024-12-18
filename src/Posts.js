import React from "react"

export default function Posts() {
    const post = [
        {
            imgUsuario:"assets/img/meowed.svg",  
            nomeUsuario:"meowed", 
            imgConteudo:"assets/img/gato-telefone.svg", 
            altConteudo:"gato-telefone", 
            imgCurtida:"assets/img/respondeai.svg", 
            altCurtida:"respondeai", 
            numero: "101.523"
        },

        {
            imgUsuario:"assets/img/barked.svg", 
            nomeUsuario:"barked", 
            imgConteudo:"assets/img/dog.svg", 
            altConteudo:"dog", 
            imgCurtida:"assets/img/adorable_animals.svg", 
            altCurtida:"adorable_animals", 
            numero:"99.158"
        },

        {
            imgUsuario:"assets/img/satoru-gojo.jpg",  
            nomeUsuario:"Daily_JJK", 
            imgConteudo:"assets/img/gojo.gif", 
            altConteudo:"freaky-gojo", 
            imgCurtida:"assets/img/meowed.svg", 
            altCurtida:"meowed", 
            numero:"53.284"
        }
    ]

    return(
        <ul className="posts">
            {post.map((p, i) => <Post imgUsuario={p.imgUsuario} nomeUsuario={p.nomeUsuario} imgConteudo={p.imgConteudo} altConteudo={p.altConteudo} imgCurtida={p.imgCurtida} altCurtida={p.altCurtida} numero={p.numero} key={i}/>)}
        </ul>
    )
} 

function Post({imgUsuario, nomeUsuario, imgConteudo, altConteudo, imgCurtida, altCurtida, numero}) {
    const [icone, setIcone] = React.useState("bookmark-outline");

    const [coracao, setCoracao] = React.useState("heart-outline");
    const [classe, setClasse] = React.useState("");

    const [atualizaNumero, setNumero] = React.useState(Number(numero))  
    const [jaCurtiu, setJaCurtiu] = React.useState(false); 

    function salvarPost() {
        setIcone(prevIcone => prevIcone === "bookmark-outline" ? "bookmark" : "bookmark-outline")
    }

    function curtirPost() {
        setCoracao(prevCoracao => {
            if (prevCoracao === "heart-outline"){
                setNumero(atualizaNumero + 0.001);
                setJaCurtiu(true);
                return "heart";
            } else {
                setNumero(atualizaNumero - 0.001); 
                setJaCurtiu(false);
                return "heart-outline";
            }
        })
    
        setClasse(prevClasse => prevClasse === "" ? "vermelho" : "")
    }

    function curtirPostImagem() {
        if (!jaCurtiu) {
            setNumero(atualizaNumero + 0.001);
            setJaCurtiu(true);
            }
        setCoracao("heart");
        setClasse("vermelho")
    }

    return(
        <li className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={imgUsuario} alt={nomeUsuario}/>
                    {nomeUsuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img onClick={curtirPostImagem} src={imgConteudo} alt={altConteudo}/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon onClick={curtirPost} name={coracao} class={`coracao ${classe}`}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvarPost} name={icone}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={imgCurtida} alt={altCurtida}/>
                    <div className="texto">
                        Curtido por <strong>{altCurtida}</strong> e <strong>outras {atualizaNumero} pessoas</strong>
                    </div>
                </div>
            </div>
        </li>
    )
}