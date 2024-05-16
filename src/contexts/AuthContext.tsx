import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { toastAlerta } from "../util/toastAlerta"
import Produto from "../models/Produto"
import ModalProduto from "../components/produtos/modalProduto/ModalProduto"

interface AuthContextProps {
    adicionarProduto: (produto:Produto) => void 
    removerProduto: (produtoId:number) => void
    limparCart: () => void
    items: Produto[]
    quantidadeItems: number
    finalizarCompra: () => void
    usuario: UsuarioLogin
    handleLogout(): void
   
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}


export const AuthContext = createContext({} as AuthContextProps)
export function AuthProvider({ children }: AuthProviderProps) {
    
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        //variaveis de estado
        id: 0,
        nome: "",
        email: "",
        senha: "",
        foto: "",
        token: "",
        tipo:""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            
            toastAlerta('Usuário logado com sucesso', 'info')
            setIsLoading(false)

        } catch (error) {
            console.log(error)

            toastAlerta('Dados do usuário inconsistentes', 'error')
            setIsLoading(false)
        }
    }
    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            email: "",
            senha: "",
            foto: "",
            token: "",
            tipo:""
        })
    }

    // Adicione APENAS essa linhas de código daqui
    const [items, setItems] = useState<Produto[]>([])

    const quantidadeItems = items.length

    // Essa sintaxe guarda as info anteriores do State e atualiza com os novos dados(objetos)
    function adicionarProduto(produto: Produto) {
        setItems(state => [...state, produto])
    }

    // Remove a quantidade de um produto especifico
    function removerProduto(produtoId: number) {

        // O findIndex() verifica se o ID do produto informado consta no Array, e pega a posição/indice desse item no Array
        const indice = items.findIndex(items => items.id === produtoId) 
        let novoCart = [...items]   // Faz uma cópia do Carrinho anterior, apenas como variavel auxiliar

        // Se o index é maior que 0, o método splice(), vai encontrar esse item no Array e o remover
        if(indice >= 0){
            novoCart.splice(indice, 1)
            setItems(novoCart)  // Atualiza o Carrinho
        }
    }




    function limparCart() {
        setItems([])
    }

    
    function finalizarCompra() {
        <ModalProduto />
        setItems([])
    }

    // Até aqui

    return (                      
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading, adicionarProduto, removerProduto, limparCart,finalizarCompra ,items, quantidadeItems }}>
            {children}
        </AuthContext.Provider>
        
    )
}