import { Link } from "react-router-dom"
import "./Instrucoes.css"

export default function Instrucoes(){
    return(
        <section className="section_instrucoes">
            <div className="div_instrucoes">
                <h1>Instruções</h1>
                <ul>
                    <li>
                        <h2>* Sobre o game:</h2>
                        <p>Este é um game de escolhas. Cada rodada você vai ter que escolher um dos elementos, até que sobre apenas um deles.</p>
                        <p>Foi feito para que você possa escolher o melhor item dentro do conjunto, o que, em alguns casos, pode ser uma tarefa difícil.</p>
                        <p>Nessa versão do site você pode criar os seus próprios games e personalizá-los da maneira que quiser. </p>
                    </li>
                    <li>
                        <h2>* Como criar o game:</h2>
                        <p>Para criar seu próprio game é necessário acessar o formulário de criação, que está disponível no botão "criar" do cabeçalho ou no menu inicial.</p>
                        <p>Preencha os dados do formulário para criar um card. Ele pode ser um vídeo do youtube ou uma imagem que tenha link (é importante que sejam preenchidos corretamente, para evitar erros).</p>
                        <p>Na parte abaixo do formulário há uma planilha onde você pode verificar os cards criados, editar e até mesmo excluir. Mas vale destacar que os ids devem SEMPRE estar em sequência, caso contrário o jogo não vai funcionar.</p>
                    </li>
                    <li>
                        <h2>* Criações da comunidade</h2>
                        <p>Lá você pode jogar com os cards criados por alguns colaboradores do projeto, possuem temas diversos e estes são estáticos (não podem ser alterados)</p>
                    </li>
                    <Link className="link_menu" to="http://localhost:3000/">Voltar para o menu</Link>
                </ul>
            </div>
        </section>
    )
}