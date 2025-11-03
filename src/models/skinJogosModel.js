import { PrismaClient } from '@prisma/client';
import { populate } from 'dotenv';
const prisma = new PrismaClient();

export const encontreTodos = async() => {
    return await prisma.skins.findMany({
        orderBy: {id: 'asc'}
    });
}

export const encontreUm = async (id) => {
    return await prisma.skins.findUnique({
        where: { id: Number(id)}
    })
}

export const criar = async (dado) => {
    return await prisma.times.create({
        data: {
            nome: dado.nome,
            jogo: dado.jogo,
            raridade: dado.raridade,
            preco: dado.preco,
            categoria: dado.categoria,
            dataLancamento: dado.dataLancamento,
            popularidade: dado.popularidade,
            disponivel: dado.disponivel
        }
    })
}

export const deletar = async (id) => {
    return await prisma.skins.delete({
        where: { id: Number(id)}
    })
}

export const atualizar = async (id, dado) => {
    return await prisma.skins.update({
        where: {id: Number(id)},
        data: {
            ...(dado.nome && {nome: dado.nome}),
            ...(dado.jogo && {jogo: dado.jogo}),
            ...(dado.raridade && {raridade: dado.raridade}),
            ...(dado.preco && {preco: dado.peco}),
            ...(dado.categoria && {categoria: dado.categoria}),
            ...(dado.dataLancamento && {dataLancamento: dado.dataLancamento}),
            ...(dado.popularidade && {popularidade: dado.popularidade}),
            ...(dado.disponivel && {disponivel: dado.disponivel})
        }
    })
}