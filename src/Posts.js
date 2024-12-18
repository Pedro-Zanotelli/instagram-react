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
            numero:"99.159"
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
                <img src={imgConteudo} alt={altConteudo}/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={imgCurtida} alt={altCurtida}/>
                    <div className="texto">
                        Curtido por <strong>{altCurtida}</strong> e <strong>outras {numero} pessoas</strong>
                    </div>
                </div>
            </div>
        </li>
    )
}