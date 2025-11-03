import { retainIf } from 'effect/TMap';
import * as skinJogosModel from './../models/skinJogosModel.js'

export const listarTodos = async (req, res) => {
    try {
        const skins = await skinJogosModel.encontreTodos();

        if(!skins || skins.lenght === 0){
            res.status(404).json({
                total: skins.lenght,
                mensagem: "Não há skins na lista",
                skins
            })
        }

        res.status(200).json({
            total: skins.lenght,
            mensagem: "Lista de Skins",
            skins
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno no servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const skin = await skinJogosModel.encontreUm(id);

        if(!skin){
            return res.status(404).json({
                erro: "Skin não encontrada",
                mensagem: "Verifique o Id da skin",
                id: id
            })
        }

        res.status(200).json({
            message: "Skin encontrada",
            skin
        })

    } catch (error) {
        res.status(500).json({
            erro:'Erro no servidor',
            detalhes: error.message,
            status:500
        })
    }
}

export const criar = async (req, res) => {
    try {
        const {nome, jogo, reaidade, preco, categoria, dataLancamento,popularidade, disponivel} = req.body;

        const dado = {nome, jogo, reaidade, preco, categoria, dataLancamento,popularidade, disponivel}

        const novaSkin = await skinJogosModel.criar(req.body)

        res.status(201).json({
            mensagem: "Skin criada com sucesso",
            skin: novaSkin
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao criar skin',
            detalhes: error.message
        })
    }
}

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const skinExiste = await skinJogosModel.encontreUm(id);

        if(!skinExiste){
            return res.status(404).json({
                erro: 'Skin com esse id não encontrado',
                id: id
            })
        }

        await skinJogosModel.deletar(id)

        res.status(200).json({
            message: 'skin apagada com sucesso',
            skinRemovida: skinExiste
        })
    } catch (error) {
        res.status(500).json({
            erro: 'erro ao apagar skin',
            detalhes: error.message
        })
    }
}

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const skinExiste = await skinJogosModel.encontreUm(id);

        if(!skinExiste){
            return res.status(404).json({
                erro: 'essa skin não existe',
                id: id
            })
        }

        const skinAtualizada = await skinJogosModel.atualizar(id, dados)

        return res.status(200).json({
            mensagem: "Skin atualizada com sucesso",
            skin: skinAtualizada
        })

    } catch (error) {
        res.status(500).json({
            erro: 'erro ao atualizar a skin',
            detalhes: error.message
        })
    }
}