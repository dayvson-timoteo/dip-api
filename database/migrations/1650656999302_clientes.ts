import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clientes extends BaseSchema {
  protected tableName = 'clientes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.bigint('prontuario')
      table.string('nome')
      table.string('nascimento')
      table.string('admissao')
      table.string('recisao')
      table.bigint('cpf')
      table.string('categoria')
      table.bigint('banco')
      table.bigint('agencia')
      table.bigint('conta')
      table.string('cargo')
      table.string('funcao')
      table.bigint('rg')
      table.string('org_rg')
      table.string('uf_rg')
      table.bigint('pis')
      table.bigint('pasep')
      table.string('endereco')
      table.bigint('num_end')
      table.string('comp_end')
      table.string('bairro')
      table.bigint('cep')
      table.string('cidade')
      table.string('uf')
      table.string('est_civil')
      table.string('sexo')
      table.string('data_aposentadoria')
      table.string('pai')
      table.string('mae')
      table.bigint('telefone')
      table.bigint('celular')
      table.string('email')
      table.bigint('numero_pasta')
      table.string('duplicada')
      table.string('links')
      table.string('obs')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
