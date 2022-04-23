import { Request } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from 'App/Models/Cliente'

export default class ClientesController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const cliente = await Cliente.create(body)

    response.status(201)

    return {
      message: 'Cliente cadastrado com sucesso',
      data: cliente,
    }
  }
  public async index() {
    const clientes = await Cliente.all()

    return { data: clientes }
  }
  public async show({ params }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)

    return { data: cliente }
  }
  public async destroy({ params }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)

    await cliente.delete()

    return { message: 'Cliente deletado com sucesso' }
  }
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const cliente = await Cliente.findOrFail(params.id)

    cliente.prontuario = body.prontuario
    cliente.nome = body.nome
    cliente.nascimento = body.nascimento
    cliente.admissao = body.admissao
    cliente.recisao = body.recisao
    cliente.cpf = body.cpf
    cliente.categoria = body.categoria
    cliente.banco = body.banco
    cliente.agencia = body.agencia
    cliente.conta = body.conta
    cliente.cargo = body.cargo
    cliente.funcao = body.funcao
    cliente.rg = body.rg
    cliente.org_rg = body.org_rg
    cliente.uf_rg = body.uf_rg
    cliente.pis = body.pis
    cliente.pasep = body.pasep
    cliente.endereco = body.endereco
    cliente.num_end = body.num_end
    cliente.comp_end = body.comp_end
    cliente.bairro = body.bairro
    cliente.cep = body.cep
    cliente.cidade = body.cidade
    cliente.uf = body.uf
    cliente.est_civil = body.est_civil
    cliente.sexo = body.sexo
    cliente.data_aposentadoria = body.data_aposentadoria
    cliente.pai = body.pai
    cliente.mae = body.mae
    cliente.telefone = body.telefone
    cliente.celular = body.celular
    cliente.email = body.email
    cliente.numero_pasta = body.numero_pasta
    cliente.duplicada = body.duplicada
    cliente.links = body.links
    cliente.obs = body.obs
  }
}
