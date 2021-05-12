import React from 'react';


const ListaProdutos = (props) => {
    const { produtos } = props;
    if (!produtos || produtos.length === 0) return <p>Carregando ...</p>;
    return (
       
        <TabelaDeProdutos listaDeProdutos={produtos}/>
    );
};

class Linha extends React.Component {
    render() {
        const produto = this.props.produto;
        
        return (
            <tr key={produto.quotes}>
                <td>{produto.anime}</td>
                <td>{produto.character}</td>
              <td>{produto.quote}</td>
                
            </tr>
        );
    }
}

class TabelaDeProdutos extends React.Component {
    render() {
          const linhas = [];
         this.props.listaDeProdutos.forEach(
        
               (produto) => {
                
              linhas.push(
                
                   <Linha produto={produto}  />
                );
            }
        );

        return (
            <div className="container-sm">
            <div>
           
            </div>
            <h1>Lista de animes</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Anime</th>
                        <th>personagem </th>
                        <th>citação</th>
                        
                    </tr>
                </thead>
                <tbody>{linhas}</tbody>
            </table>

            </div>
        );
    }
}


export default ListaProdutos;
